# datathon.cat
## Landing page
[![Netlify Status](https://api.netlify.com/api/v1/badges/6b843ffe-a49f-4131-a7e2-9f21b4fdfd4f/deploy-status)](https://app.netlify.com/sites/datathon/deploys)

Landing page for the 3rd Datathon FME competition, taking place 11-12 November 2023!

### How to test locally?
1. Install the Node Package Manager (NPM).
2. Open a terminal inside this folder and run the following commands:
```
npm i
npm run start
```
3. Remember that the source code is in `./src` while the static assets are in `.public`.

#### Using docker
1. Open a terminal inside this folder and run the following commands:
```
docker build -t datathon_web .
docker run -p 8080:8080 datathon_web
```
2. Go to http://localhost:8080

##### Using docker for development
1. Open a terminal inside this folder and run the following commands:
```
docker build -t datathon_web_dev -f Dockerfile.dev .
docker run -p 8080:8080 -v $(pwd):/app -it datathon_web_dev
```
2. You will now be inside the docker container, in a folder linked with the folder on you computer, meaning
any change done locally will change the files in the container (More info [here](https://docs.docker.com/storage/volumes/)). Now run:
```
npm i
npm run start
```
3. Go to http://localhost:8080

### How do I deploy a new version?
1. Edit whatever you want. Do not manually edit anything in `./dist`. Its contents are automatically generated.
2. Run `npm run build`.
3. Commit your changes, the new version will automatically deploy to Netlify!
