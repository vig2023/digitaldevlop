import GoogleMapsSinglePlotApi from "/GoogleMapsSinglePlotApi.js"

const plugin = ({grid, simulator}) => {
    return {
        createDirections: (path) => {
            GoogleMapsSinglePlotApi("AIzaSyD_WxxqknIQR40Bp7_d5gnucZ0P-X8XwWk", grid.create(1, 2), path)
        }
    }
}

export default plugin