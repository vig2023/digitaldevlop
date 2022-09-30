<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
  function InitializeMap() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions =
{
    zoom: 8,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('directionpanel'));

    var control = document.getElementById('control');
    control.style.display = 'block';
}
const plugin = ({dashboard, simulator}) => {
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();

    InitializeMap();
    
    const container = document.createElement("div")
    container.setAttribute("style", `display:flex; height: 100%; width: 100%;`)
    container.innerHTML = (`
    <div style="max-width: fit-content; margin: 0 auto; position: relative; margin: auto 0;">
        <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2FDashboardSpeed.jpg?alt=media&token=44b42de9-12a7-4cb1-b525-94e8fc077141" style="height: fit-content; width: 100%; object-fit: contain;">
        <div class="status-text" style="position: absolute;color: white;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;display: flex;justify-content: center;padding-top: 10px;"></div>
    </div>
    `)

    dashboard.create(7, 8).injectNode(container)

    let currentValue = ""

    simulator("Vehicle.Cabin.InstrumentPanel.Status", "get", async ({args}) => {
        return currentValue
    })

    simulator("Vehicle.Cabin.InstrumentPanel.Status", "set", async ({args}) => {
        currentValue = args[0]
        container.querySelector(".status-text").textContent = currentValue
        return null
    })

    
    return {}
}

export default plugin