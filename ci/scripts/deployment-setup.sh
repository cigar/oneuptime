cd ./ci/credentials
openssl enc -in encrypted-credentials.enc -out encrypted-credentials.tar -d -aes256 -pbkdf2 -k $KUBE_ENC
tar -xvf encrypted-credentials.tar
cd ..
cd ..
echo "Remove Google Cloud SDK"
sudo rm -rf /home/gitlab-runner/google-cloud-sdk
curl -sSL https://sdk.cloud.google.com | bash > /dev/null;
source $HOME/google-cloud-sdk/path.bash.inc
$HOME/google-cloud-sdk/bin/gcloud components update kubectl
