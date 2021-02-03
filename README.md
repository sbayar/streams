# Getting started

 - Go to folder client and run: npm install and then npm start
 - Go to folder api and run: npm install and npm start
 - Go to folder rtmpserver and run: npm install and npm start

# Download OBS
Download OBS (Open Boradcaster Software) from https://obsproject.com/ 
From OBS (Settings -> Stream)\
Stream Type : Custom Streaming Server\
URL : rtmp://localhost/live\
Stream key : 1\
Instructions: https://github.com/illuspas/Node-Media-Server#npm-version-recommended 

## Steps for making OBS to work on Windows 10 1909 or newer
1. Open Settings and search for "Graphics Settings". Select "Classic App/Desktop App" and browse to C:\Program Files\obs-studio\bin\64bit\obs64.exe (or wherever you have installed OBS). Click "Options" and select "Power Saving".
2. From OBS: select current "Scen", then in "Sources" pane add "Display Capture" and then add "Audio Output Capture"
3. Navigate to http://localhost:3000/streams/1
4. From OBS: click "Start Streaming"



