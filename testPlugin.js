import GoogleMapsPluginApi from "/GoogleMapsPluginApi.js"

const plugin = ({grid, simulator}) => {
    return {
        createDirections: (path) => {
            GoogleMapsPluginApi("AIzaSyD_WxxqknIQR40Bp7_d5gnucZ0P-X8XwWk", grid.create(1, 2), path)
        }
    }
}

export default plugin