import GMapsAPI from "/GoogleMapsPluginApi.js"

const plugin = ({dashboard, simulator}) => {
    GMapsAPI(
        "AIzaSyD_WxxqknIQR40Bp7_d5gnucZ0P-X8XwWk",
        dashboard.create(1, 2), [
        {
            lat: a,
            lng: b
        },
        {
            lat: c,
            lng: d
        },
    ])

    return {
        set_location: (a,b,c,d) => {
            a,b,c,d
        }

    }
}

export default plugin