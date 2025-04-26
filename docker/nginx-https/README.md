Change me to miss cache!

sudo apt install libnss3-tools

wget https://github.com/FiloSottile/mkcert/releases/latest/download/mkcert-v1.4.4-linux-amd64
chmod +x mkcert-v1.4.4-linux-amd64
sudo mv mkcert-v1.4.4-linux-amd64 /usr/local/bin/mkcert

mkcert -install

docker build -t nginx-https .

docker run -d -p 443:443 nginx-https
