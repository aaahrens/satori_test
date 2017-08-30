#!/usr/bin/env bash

npm run build

docker build . -t drunkengranite/satori_demo
docker push drunkengranite/satori_demo

scw exec dank\ memes docker stop satori_test || true && docker rm satori_test || true
scw exec dank\ memes docker run -d -p 6900:9000 --name satori_test drunkengranite/satori_demo