cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-gyroscope/www/Orientation.js",
        "id": "cordova-plugin-gyroscope.Orientation",
        "pluginId": "cordova-plugin-gyroscope",
        "clobbers": [
            "Orientation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-gyroscope/www/gyroscope.js",
        "id": "cordova-plugin-gyroscope.gyroscope",
        "pluginId": "cordova-plugin-gyroscope",
        "clobbers": [
            "navigator.gyroscope"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-gyroscope": "0.1.4"
}
// BOTTOM OF METADATA
});
