const appendMapScript = (window, apikey) => {
    return new Promise(async (resolve, reject) => {
        try {
            const GOOGLE_MAPS_API = `https://maps.googleapis.com/maps/api/js?key=${apikey}`;

            const script = window.document.createElement("script");
            script.defer = true;

            script.src = GOOGLE_MAPS_API;
            await window.document.head.appendChild(script);
            script.addEventListener("load", () => resolve());
        } catch (e) {
            reject();
        }
    });
}

// function calculateAndDisplayRoute(space, path, directionsService, directionsRenderer) {
//     const start = new space.window.google.maps.LatLng(path[0].lat, path[0].lng);
//     const end = new space.window.google.maps.LatLng(path[1].lat, path[1].lng);

//     directionsService
//     .route({
//         origin: start,
//         destination: end,
//         travelMode: space.window.google.maps.TravelMode.DRIVING,
//     })
//     .then((response) => {
//         directionsRenderer.setDirections(response);
//     })
//     .catch((e) => console.log("Directions request failed due to " + e));
// }

const GoogleMapsPluginApi = (apikey, box, path) => {
    appendMapScript(box.window, apikey).then(() => {
        console.log(path,"hiiiiiiiiiii")
        const container = document.createElement("div");
        container.setAttribute("style", `display:flex; height: 100%; width: 100%;`);
        // const directionsService = new box.window.google.maps.DirectionsService();
        // const directionsRenderer = new box.window.google.maps.DirectionsRenderer();
        const mapCoOrdinates = { lat: path[0].lat, lng: path[0].lng };
        const map = new box.window.google.maps.Map(container, {
            zoom: 7,
            center: path[0].lat,
        });
        const marker = new space.window.google.maps.Marker({
            position: mapCoOrdinates,
            map: map,
          });
        // directionsRenderer.setMap(map);
        // calculateAndDisplayRoute(box, path, directionsService, directionsRenderer);
        box.injectNode(container);
    });
};

export default GoogleMapsPluginApi;