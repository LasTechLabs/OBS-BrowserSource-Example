# OBS-BrowserSource-Example

## Running the example: 

1) Download/clone this git repository; open powershell and run:

    `git clone https://github.com/LasTechLabs/OBS-BrowserSource-Example.git`

2) To install the packages it (socketIO) uses, cd into the OBS-BrowserSource-Example folder that was created and run:

    `npm install`

3) Once that's done, it should all be set up and installed. To start the backend run:

    `node app.js` or `npm start`

4) You can either open index.html in a regular web-browser or add it as a BrowserSource in OBS. 

    - When you're adding it to OBS make sure you have the "Local File" option checked. As long as the back-end is running the gifs will cycle between True and False.
