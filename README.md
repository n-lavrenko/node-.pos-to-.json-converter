# node-.pos-to-.json-converter
Tool for converting .pos files (GPS data) to .json. Very useful for emulate moving some objects on the map. 


For convert:
1. Install Node.js (if not installed)
2. Install moment.js if you need to work with you Data values (if not - edit this in .js file): 
`npm i moment --save`
3. Edit `posToJson.js` by comments there. 
4. Be sure than line.substr(x, y) get the correct substring. 
5. Be sure that you was deleted first lines from .pos files that do not contain data values (only legend). 
6. Run in console from working directory: `node posToJson`

If converting have finished - you'll see 'Success' in console and you'll get your .json file.
Have fun and good luck!
