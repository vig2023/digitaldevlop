const plugin = ({widgets, simulator}) => {

    const container = document.createElement("div")
    container.setAttribute("style", `display:flex; height: 100%; width: 100%;`)
    container.innerHTML = (`
    <div style="max-width: fit-content; margin: 0 auto; position: relative; margin: auto 0;">
        <img onclick ="alert("image-main-one")" src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fvehicle_status_asset.png?alt=media&token=0f9b503c-da94-4c50-beaf-7f2e1883ec9b" style="height: fit-content; width: 100%; object-fit: contain;">
        <div class="lock-one" onclick ="alert("image-one")"style="position: absolute;color: white;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;display: flex;justify-content: center;padding-top: 40px;">
        <img onclick ="alert("image-one")" src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fdoor_lock.png?alt=media&token=4e7543a5-3b7f-4cea-a1cf-976f87beb4c2" style="height:30%;width:30%">
        </div>
        <div class="lock-two" style="position: absolute;color: white;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;display: flex;justify-content: center;padding-top: 80px;">
        <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fdoor_lock.png?alt=media&token=4e7543a5-3b7f-4cea-a1cf-976f87beb4c2" style="height:30%;width:30%">
        </div>
        <div class="lock-three" style="position: absolute;color: white;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;display: flex;justify-content: center;padding-top: 120px;">
        <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fdoor_lock.png?alt=media&token=4e7543a5-3b7f-4cea-a1cf-976f87beb4c2" style="height:30%;width:30%">
        </div>
        <div class="lock-four" style="position: absolute;color: white;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;display: flex;justify-content: center;padding-top: 160px;">
        <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fdoor_lock.png?alt=media&token=4e7543a5-3b7f-4cea-a1cf-976f87beb4c2" style="height:30%;width:30%">
        </div>
        <div class="lock-five" style="position: absolute;color: white;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;display: flex;justify-content: center;padding-top: 200px;">
        <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fdoor_lock.png?alt=media&token=4e7543a5-3b7f-4cea-a1cf-976f87beb4c2" style="height:30%;width:30%">
        </div>
        <div class="lock-six" style="position: absolute;color: white;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;display: flex;justify-content: center;padding-top: 240px;">
        <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fdoor_lock.png?alt=media&token=4e7543a5-3b7f-4cea-a1cf-976f87beb4c2" style="height:30%;width:30%">
        </div>
    </div>
    `)
    function setRandom() {
        container.querySelector(".status-text").textContent=  Math.random() * 101 | 0;
    // document.getElementById('out').innerHTML = Math.random() * 101 | 0;
}
setRandom();
setInterval(setRandom, 5000);
    let boxGlobal = null

    widgets.register("acvalue", (box) => {
        boxGlobal = box
        box.injectNode(container)
        return () => {
            boxGlobal = null
            // Deactivation function for clearing intervals or such.
        }
    })

    // let currentValue = ""

    // simulator("Vehicle.Cabin.InstrumentPanel.Status", "get", async ({args}) => {
    //     return currentValue
    // })

    // simulator("Vehicle.Cabin.InstrumentPanel.Status", "set", async ({args}) => {
    //     currentValue = args[0]
    //     if (boxGlobal !== null) {
    //         container.querySelector(".status-text").textContent = currentValue
    //     }
    //     return null
    // })

    
    return {}
}

export default plugin