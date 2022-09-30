import GMapsAPI from "/GoogleMapsPluginApi.js"

const plugin = ({dashboard, simulator}) => {
    GMapsAPI(
        "AIzaSyD_WxxqknIQR40Bp7_d5gnucZ0P-X8XwWk",
        dashboard.create(1, 2), [
        {
            lat: 48.813254159291475,
            lng: 9.212379215835714
        },
        {
            lat: 49.20261646797924,
            lng: 9.189121574828052
        },
    ])

    return {}
}

export default plugin
