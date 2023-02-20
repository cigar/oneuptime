import BadDataException from 'Common/Types/Exception/BadDataException';
import { JSONObject, JSONValue } from 'Common/Types/JSON';
import ComponentMetadata, { Port } from 'Common/Types/Workflow/Component';
import ComponentID from 'Common/Types/Workflow/ComponentID';
import JavaScriptComponents from 'Common/Types/Workflow/Components/JavaScript';
import ComponentCode, { RunReturnType } from '../ComponentCode';
import VM, { VMScript } from 'vm2';
import axios from 'axios';
import http from 'http';
import https from 'https';

export default class JavaScirptCode extends ComponentCode {
    public constructor() {
        super();

        const JavaScirptComponent: ComponentMetadata | undefined =
            JavaScriptComponents.find((i: ComponentMetadata) => {
                return i.id === ComponentID.JavaScriptCode;
            });

        if (!JavaScirptComponent) {
            throw new BadDataException(
                'Custom JavaScirpt Component not found.'
            );
        }

        this.setMetadata(JavaScirptComponent);
    }

    public override async run(args: JSONObject): Promise<RunReturnType> {
        const successPort: Port | undefined = this.getMetadata().outPorts.find(
            (p: Port) => {
                return p.id === 'success';
            }
        );

        if (!successPort) {
            throw new BadDataException('Success port not found');
        }

        const errorPort: Port | undefined = this.getMetadata().outPorts.find(
            (p: Port) => {
                return p.id === 'error';
            }
        );

        if (!errorPort) {
            throw new BadDataException('Error port not found');
        }

        try {
            // Set timeout
            // Inject args
            // Inject dependencies

            const vm: VM.NodeVM = new VM.NodeVM({
                timeout: 5000,
                allowAsync: true,
                sandbox: {
                    args: args['arguments'],
                    axios: axios,
                    http: http,
                    https: https,
                    console: {
                        log: (logValue: JSONValue) => {
                            this.log(logValue);
                        },
                    },
                },
            });

            const script: VMScript = new VMScript(
                `module.exports = async function(args) { ${
                    (args['code'] as string) || ''
                } }`
            ).compile();

            const functionToRun: any = vm.run(script);

            const returnVal: any = await functionToRun(
                JSON.parse((args['arguments'] as string) || '{}')
            );

            return {
                returnValues: {
                    returnValue: returnVal,
                },
                executePort: successPort,
                logs: this.logs,
            };
        } catch (err: any) {
            this.log('Error running script');
            this.log(err.message ? err.message : JSON.stringify(err, null, 2));
            return {
                returnValues: {},
                executePort: errorPort,
                logs: this.logs,
            };
        }
    }
}