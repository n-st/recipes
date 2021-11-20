module.exports = Ferdi => {
    const path = require('path');
    const updateBadge = function updateBadge() {
        Ferdi.injectJSUnsafe(path.join(__dirname, 'webview-unsafe.js'));
    };

    Ferdi.loop(updateBadge);
};
