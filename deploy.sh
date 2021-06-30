#!/bin/sh     
sudo git pull origin main
sudo npm install
cd client
npm install
sudo npm run-script build
cd ..
sudo systemctl restart nginx
sudo pm2 restart all
