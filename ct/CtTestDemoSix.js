// import GoogleMapsPluginApi from "/GoogleMapsPluginApi.js"
// import StatusTable from "./StatusTable.js.js"

const plugin = ({widgets, simulator, vehicle}) => {
    // let setVehiclePinGlobal = null
    // widgets.register("Maps", (box) => {
    //     GoogleMapsPluginApi("AIzaSyCQd4f14bPr1ediLmgEQGK-ZrepsQKQQ6Y", box, [
    //         {
    //             "lat": 48.813254159291475,
    //             "lng": 9.212379215835714
    //         },
    //         {
    //             "lat": 49.20261646797924,
    //             "lng": 9.189121574828052
    //         },
    //     ]).then(({setVehiclePin}) => {
    //         setVehiclePinGlobal = setVehiclePin
    //     })
    // })

    // const vehicles = [
    //     {
    //         "Vehicle.CurrentLocation.Latitude": 48.85850429451804,
    //         "Vehicle.CurrentLocation.Longitude": 9.125898683591739,
    //         "Vehicle.VehicleIdentification.VIN": "4Y1SL65848Z411439",
    //         "Vehicle.Speed": "80 km/h",
    //         "Vehicle.Powertrain.TractionBattery.StateOfCharge.Current": "56%",
    //         "Vehicle.Powertrain.TractionBattery.NetCapacity": "80 kwH",
    //         "Vehicle.Powertrain.TractionBattery.Charging.TimeToComplete": "9112s",
    //         "Vehicle.Powertrain.TractionBattery.Charging.ChargeLimit": "80%",
    //         "Vehicle.Powertrain.TractionBattery.Range": "123km",
    //         nextChargestation: {
    //             "ID": 4711,
    //             "Max Current": "32A",
    //             "Max Voltage": "208V",
    //             "Average Power": "7.68kW",
    //         },
    //         status: {
    //             Status: "Not connected",
    //             Distance: "98km",
    //             ETA: "1hr12m",
    //         },
    //     },
    //     {
    //         "Vehicle.CurrentLocation.Latitude": 48.969879287383634,
    //         "Vehicle.CurrentLocation.Longitude": 9.226323054446112,
    //         "Vehicle.VehicleIdentification.VIN": "WBAVH31008A056053",
    //         "Vehicle.Speed": "62 km/h",
    //         "Vehicle.Powertrain.TractionBattery.StateOfCharge.Current": "83%",
    //         "Vehicle.Powertrain.TractionBattery.NetCapacity": "120 kWH",
    //         "Vehicle.Powertrain.TractionBattery.Charging.TimeToComplete": "12381s",
    //         "Vehicle.Powertrain.TractionBattery.Charging.ChargeLimit": "90%",
    //         "Vehicle.Powertrain.TractionBattery.Range": "156km",
    //         nextChargestation: {
    //             "ID": 3211,
    //             "Max Current": "64A",
    //             "Max Voltage": "184V",
    //             "Average Power": "9.84kW",
    //         },
    //         status: {
    //             Status: "Not connected",
    //             Distance: "276km",
    //             ETA: "4hr42m",
    //         },
    //     },
    //     {
    //         "Vehicle.CurrentLocation.Latitude": 49.168188548489255,
    //         "Vehicle.CurrentLocation.Longitude": 9.25731322438704,
    //         "Vehicle.VehicleIdentification.VIN": "JTEHY05J080010242",
    //         "Vehicle.Speed": "96 km/h",
    //         "Vehicle.Powertrain.TractionBattery.StateOfCharge.Current": "72%",
    //         "Vehicle.Powertrain.TractionBattery.NetCapacity": "110 kWH",
    //         "Vehicle.Powertrain.TractionBattery.Charging.TimeToComplete": "11462s",
    //         "Vehicle.Powertrain.TractionBattery.Charging.ChargeLimit": "95%",
    //         "Vehicle.Powertrain.TractionBattery.Range": "137km",
    //         nextChargestation: {
    //             "ID": 674,
    //             "Max Current": "48A",
    //             "Max Voltage": "340V",
    //             "Average Power": "11.56kW",
    //         },
    //         status: {
    //             Status: "Not connected",
    //             Distance: "12km",
    //             ETA: "0hr18m",
    //         },
    //     },
    // ]


    // const apis = [
    //     "Vehicle.CurrentLocation.Latitude",
    //     "Vehicle.CurrentLocation.Longitude",
    //     "Vehicle.VehicleIdentification.VIN",
    //     "Vehicle.Speed",
    //     "Vehicle.Powertrain.TractionBattery.StateOfCharge.Current",
    //     "Vehicle.Powertrain.TractionBattery.NetCapacity",
    //     "Vehicle.Powertrain.TractionBattery.Charging.TimeToComplete",
    //     "Vehicle.Powertrain.TractionBattery.Charging.ChargeLimit",
    //     "Vehicle.Powertrain.TractionBattery.Range",
    // ]

    // let currentVehicle = null

    // for (const api of apis) {
    //     // eslint-disable-next-line no-loop-func
    //     simulator(api, "get", async () => {
    //         if (currentVehicle === null) {
    //             return ""
    //         }
    //         return currentVehicle[api]
    //     })
    //     // eslint-disable-next-line no-loop-func
    //     simulator(api, "set", async ({args}) => {
    //         const [newValue] = args
    //         if (currentVehicle === null) {
    //             return ""
    //         }
    //         return currentVehicle[api] = newValue
    //     })
    // }

    // widgets.register("VehicleDetails", StatusTable({
    //     apis,
    //     vehicle,
    //     refresh: 300
    // }))

    let nextChargeStationDiv = null

    // widgets.register("NextChargestation", (box) => {
    //     const div = document.createElement("div")
    //     div.style = "display: flex;width: 100%; height: 100%;"

    //     nextChargeStationDiv = div
        
    //     div.innerHTML = DataTableHTML({
    //         headers: ["Chargestation", "Current Value"],
    //         rows: ["ID", "Max Current", "Max Voltage", "Average Power"].map(firstCol => ({
    //             htmlAttributes: `data-row="${firstCol}"`,
    //             cells: {
    //                 "Chargestation": firstCol,
    //                 "Current Value": ""
    //             }
    //         })),
    //         colorTheme: {
    //             headerBackground: "#fbbf24",
    //             evenCellBackground: "#fffbeb"
    //         }
    //     })

    //     box.injectNode(div)
    // })

    let speedStatusDiv = null
    function setSpeedRandom() {
        var val= Math.random() * 90;
        var trVal= Math.round(val);
        console.log(trVal)
        // var element=container.querySelector(".status-text");
        speedStatusDiv.querySelector(`[data-cell="speed-stat"] span`).textContent = trVal
        var eleOne = speedStatusDiv.querySelector(".speedVal");
        var leftWheel = ctStatusDiv.querySelector(".ct-left");
        var rightWheel = ctStatusDiv.querySelector(".ct-right");

        // let eleTwo = container.querySelector(".left-one");
        // let eleThree = container.querySelector(".left-two");
        // let eleFour = container.querySelector(".right-one");
        // let eleFive = container.querySelector(".right-two");
        // let eleSix = container.querySelector(".bannet");
        if(val<=20){
        //    element.setAttribute("style", "color:red; background-color:#e1f0fe")
            eleOne.setAttribute("style", "color:orange;font-weight:bolder");
            leftWheel.setAttribute("style", "height: 44%;width: 60%;position: absolute;right: 20%;");
            rightWheel.setAttribute("style", "height: 44%;width: 60%;position: absolute;right: 20%;");
        }else if(val>20){
            eleOne.setAttribute("style", "color:#383c7f;font-weight:bolder")
            leftWheel.setAttribute("style", "height: 44%;width: 60%;position: absolute;right: 25%;");
            rightWheel.setAttribute("style", "height: 44%;width: 60%;position: absolute;right: 25%;")
        }
        // container.querySelector(".status-text").textContent=val
    // document.getElementById('out').innerHTML = Math.random() * 101 | 0;
}
setInterval(setSpeedRandom, 2500);
    widgets.register("demospeedonettSix", (box) => {
        const div = document.createElement("div")
        div.style = "display: flex;height: 100%;width: 100%;"

        speedStatusDiv = div

        div.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        * {
            box-sizing: border-box;
        }
        body {
            font-family: 'Lato', sans-serif;
        }    
        </style>
        <div style="display: flex; flex-direction: column; width: 100%; height: 100%; padding: 30px 40px; justify-content: center; color: #808080; user-select: none; background-color: #f7f7f7;">
            <div style="display: flex; align-items:center; justify-content: center; margin-bottom: 30px;">
            <img src="https://pic.onlinewebfonts.com/svg/img_273202.png" style="height: 100%; width: 72%; object-fit: cover;">               
            </div>
            <div style="font-size: 3em; line-height: 1.5em;text-align:center">
                <div  class ="speedVal"data-cell="speed-stat"><strong> </strong><span></span></div>
              
            </div>
        </div>
        `

        box.injectNode(div)
    })

    let distanceStatusDiv = null
    function setDistanceRandom() {
        var val= Math.random() * 90;
        var trDistanceVal= Math.round(val)
        console.log(trDistanceVal)
        // var element=container.querySelector(".status-text");
        distanceStatusDiv.querySelector(`[data-cell="distance-stat"] span`).textContent = trDistanceVal
        var eleOne = distanceStatusDiv.querySelector(".distanceVal");
        
        // let eleTwo = container.querySelector(".left-one");
        // let eleThree = container.querySelector(".left-two");
        // let eleFour = container.querySelector(".right-one");
        // let eleFive = container.querySelector(".right-two");
        // let eleSix = container.querySelector(".bannet");
        if(val<=20){
        //    element.setAttribute("style", "color:red; background-color:#e1f0fe")
            eleOne.setAttribute("style", "color:orange;font-weight:bolder")
            distanceStatusDiv.querySelector(`[data-cell="mode-drive"] span`).textContent = "Parking"
        }else if(val<=40){
            eleOne.setAttribute("style", "color:blue")
            distanceStatusDiv.querySelector(`[data-cell="mode-drive"] span`).textContent = "Drive"
        }
        // container.querySelector(".status-text").textContent=val
    // document.getElementById('out').innerHTML = Math.random() * 101 | 0;
}
setInterval(setDistanceRandom, 2500); 

    widgets.register("distancedemotwottSix", (box) => {
        const div = document.createElement("div")
        div.style = "display: flex;height: 100%;width: 100%;"

        speedStatusDiv = div

        div.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        * {
            box-sizing: border-box;
        }
        body {
            font-family: 'Lato', sans-serif;
        }    
        </style>
        <div style="display: flex; flex-direction: column; width: 100%; height: 100%; padding: 30px 40px; justify-content: center; color: #808080; user-select: none; background-color: #f7f7f7;">
            <div style="display: flex; align-items:center; justify-content: center; margin-bottom: 30px;">
            <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fdistance.png?alt=media&token=d965e8c2-edc4-416c-8312-9e88264d9fda" style="height: 100%; width: 100%; object-fit: cover;">               
            </div>
            <div style="font-size: 1em; line-height: 1.5em;">
                <div  class ="distanceVal"data-cell="distance-stat"><strong>Distance: </strong><span></span></div>
                <div data-cell="mode-drive"><strong>Driving Mode: </strong><span></span></div>
            </div>
        </div>
        `

        box.injectNode(div)
    })

    // widgets.register("CarImage", (box) => {
    //     box.injectHTML(`
    //     <div style="max-width: fit-content; margin: 0 auto; position: relative;">
    //     <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2FE-Car_Full_Vehicle.png?alt=media&token=9c9d4cb4-fee0-42e3-bbb1-7feaa407cc8e" style="height: 100%; width: 100%; object-fit: cover;">
    //         <div class="smartphone-text" style="position: absolute; color: white; font-family: 'Lato'; width: 100%; top: 0; height: 100%; box-sizing: border-box; padding-top: 25px; padding-right: 12px; padding-left: 12px; padding-bottom: 25px;"></div>
    //     </div>
    //     `)
    // })

    //CT-Car-Placement
    widgets.register("ctcardisplaySix", (box) => {
        const div = document.createElement("div")
        div.style = "display: flex;height: 100%;width: 100%;"

        speedStatusDiv = div

        div.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        * {
            box-sizing: border-box;
        }
        body {
            font-family: 'Lato', sans-serif;
        }    
        </style>
        <div style="display: flex; flex-direction: column; width: 100%; height: 100%; padding: 30px 40px; justify-content: center; color: #808080; user-select: none; background-color: #f7f7f7;">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TM4ZpNHKC3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        `

        box.injectNode(div)
    })
    //eof CT-car
     //CT-Car-Placement
     widgets.register("ctMobileDisplaySix", (box) => {
        const div = document.createElement("div")
        div.style = "display: flex;height: 100%;width: 100%;"

        ctStatusDiv = div

        div.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        * {
            box-sizing: border-box;
        }
        body {
            font-family: 'Lato', sans-serif;
        }    
        @keyframes left_move {
            from {
              left: 25%;
            }
            100% {
              left: 20%;
            }
          }
        </style>
        <div style="display: flex; flex-direction: column; width: 100%; height: 100%; padding: 30px 40px; justify-content: center; color: #808080; user-select: none; background-color: #f7f7f7;">
        <div style="display: flex; flex-direction: column; width: 100%; height: 100%; padding: 30px 40px; justify-content: center; color: #808080; user-select: none; background-color: #f7f7f7;">
        <div style="display: flex; align-items:center; justify-content: center; margin-bottom: 30px;">
        <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2FMobile_view.png?alt=media&amp;token=f4ec950a-72d6-4218-b440-08f6af307600" style="height: 34em;width: 18em;object-fit: cover;">
        <img class="ct-left" src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fleft_wheel.png?alt=media&amp;token=49e1b2c8-a832-4d5a-9fb9-a3ab51e8f269" style="height: 44%;width: 60%;position: absolute;left: 25%;">
        <img class="ct-right" src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fright_wheel.png?alt=media&amp;token=5585a090-61b1-42e8-8d0a-edb97b5cfcf7" style="height: 44%;width: 60%;position: absolute;right: 25%;">
        <img class="ct-body" src=" https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fmid_body.png?alt=media&amp;token=99619916-1333-406e-b31f-9fd779e8e468" style="height: 44%;width: 60%;/* object-fit: cover; */position: absolute;">
        </div>
        </div>
        </div>
        `

        box.injectNode(div)
    })
    //eof CT-car

    return {
        // set_vehicle: (vehicleIndex) => {
        //     const vehicle = vehicleIndex === null ? null : vehicles[vehicleIndex]
        //     currentVehicle = vehicle

        //     if (nextChargeStationDiv !== null) {
        //         ["ID", "Max Current", "Max Voltage", "Average Power"].forEach((key) => {
        //             console.log("vehicle", vehicle)
        //             const value = vehicle === null ? "" : vehicle.nextChargestation[key]
        //             nextChargeStationDiv.querySelector(`[data-row="${key}"] td:nth-child(2)`).textContent = value
        //         })
        //     }

        //     if (statusDiv !== null) {
        //         ["Status", "Distance", "ETA"].forEach((key) => {
        //             console.log("vehicle", vehicle)
        //             const value = vehicle === null ? "" : vehicle.status[key]
        //             statusDiv.querySelector(`[data-cell="${key}"] span`).textContent = value
        //         })
        //     }
            
        //     if (setVehiclePinGlobal !== null) {
        //         if (vehicle === null) {
        //             setVehiclePinGlobal(null)
        //         } else {
        //             setVehiclePinGlobal({
        //                 lat: vehicle["Vehicle.CurrentLocation.Latitude"],
        //                 lng: vehicle["Vehicle.CurrentLocation.Longitude"], 
        //             })    
        //         }
        //     }

        // }
    }
}

export default plugin