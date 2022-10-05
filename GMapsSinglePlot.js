import GoogleMapsSinglePlot from "./GoogleMapsSinglePlotApi.js"

const plugin = ({grid, simulator}) => {
    return {
        plotMarker: (path) => {
            GoogleMapsSinglePlot("AIzaSyD_WxxqknIQR40Bp7_d5gnucZ0P-X8XwWk", grid.create(3, 5), path)
        }
    }
}


export default plugin