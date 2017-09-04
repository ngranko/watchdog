const {app, BrowserWindow, Tray, Menu} = require('electron');
const path = require('path');
const {check} = require('./src/scripts/ping');
const ServerList = require('./src/scripts/serverList');

const WINDOW_VERTICAL_OFFSET = 4;

const assetsDirectory = path.join(__dirname, 'assets');

let tray;
let window;

// Don't show the app in the doc
app.dock.hide();

app.on('ready', () => {
    check(ServerList.get());
    createTray();
    createWindow();
});

// Quit the app when the window is closed
app.on('window-all-closed', () => {
    app.quit();
});

function createTray() {
    tray = new Tray(path.join(assetsDirectory, 'serverTemplate.png'));
    tray.setToolTip('all servers are working fine');

    const menu = Menu.buildFromTemplate([
        {label: 'Open', click() {toggleWindow();}},
        {label: 'Check now', click() {check(ServerList.get());}},
        {type: 'separator'},
        {label: 'Quit', role: 'quit'},
    ]);

    tray.on('double-click', toggleWindow);
    tray.on('right-click', () => tray.popUpContextMenu(menu));
    tray.on('click', function() {
        toggleWindow();

        // Show devtools when command clicked
        if (window.isVisible()) {
            window.openDevTools({mode: 'detach'});
        }
    });
}

function getWindowPosition() {
    const windowBounds = window.getBounds();
    const trayBounds = tray.getBounds();

    // Center window horizontally below the tray icon
    const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2));

    // Position window 4 pixels vertically below the tray icon
    const y = Math.round(trayBounds.y + trayBounds.height + WINDOW_VERTICAL_OFFSET);

    return {x, y};
}

function createWindow() {
    window = new BrowserWindow({
        width: 300,
        height: 450,
        show: false,
        frame: false,
        fullscreenable: false,
        resizable: false,
        transparent: true,
    });
    window.loadURL(`file://${path.join(__dirname, 'lib', 'index.html')}`);

    // Hide the window when it loses focus
    window.on('blur', () => {
        if (!window.webContents.isDevToolsOpened()) {
            window.hide();
        }
    });
}

function toggleWindow() {
    if (window.isVisible()) {
        window.hide();
    } else {
        showWindow();
    }
}

function showWindow() {
    const position = getWindowPosition();
    window.setPosition(position.x, position.y, false);
    window.show();
    window.focus();
}

// ipcMain.on('show-window', () => {
//     showWindow();
// });

// ipcMain.on('weather-updated', (event, weather) => {
//     tray.setTitle(`${Math.round(weather.currently.apparentTemperature)}°`);

// Show summary and last refresh time as hover tooltip
// const time = new Date(weather.currently.time).toLocaleTimeString();
// tray.setToolTip(`${weather.currently.summary} at ${time}`);

// Update icon for different weather types
// switch (weather.currently.icon) {
//     case 'cloudy':
//     case 'fog':
//     case 'partly-cloudy-day':
//     case 'partly-cloudy-night':
//         tray.setImage(path.join(assetsDirectory, 'cloudTemplate.png'));
//         break;
//     case 'rain':
//     case 'sleet':
//     case 'snow':
//         tray.setImage(path.join(assetsDirectory, 'umbrellaTemplate.png'));
//         break;
//     case 'clear-night':
//         tray.setImage(path.join(assetsDirectory, 'moonTemplate.png'));
//         break;
//     case 'wind':
//         tray.setImage(path.join(assetsDirectory, 'flagTemplate.png'));
//         break;
//     case 'clear-day':
//     default:
//         tray.setImage(path.join(assetsDirectory, 'sunTemplate.png'));
// }
// });
