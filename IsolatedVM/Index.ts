import logger from 'CommonServer/Utils/Logger';
import App from 'CommonServer/Utils/StartServer';
import process from 'process';
import { PromiseVoidFunction } from 'Common/Types/FunctionTypes';
import Express, { ExpressApplication } from 'CommonServer/Utils/Express';
import VmAPI from './API/VM';

const APP_NAME: string = 'isolated-vm';

const app: ExpressApplication = Express.getExpressApp();

app.use([`/${APP_NAME}`, '/'], VmAPI);

const init: PromiseVoidFunction = async (): Promise<void> => {
    try {
        // init the app
        await App(APP_NAME);
        logger.info('App Init Success');
    } catch (err) {
        logger.error('App Init Failed:');
        logger.error(err);
        throw err;
    }
};

init().catch((err: Error) => {
    logger.error(err);
    logger.info('Exiting node process');
    process.exit(1);
});
