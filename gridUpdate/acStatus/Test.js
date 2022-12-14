const plugin = ({widgets, simulator}) => {

    const container = document.createElement("div")
    container.setAttribute("style", `display:flex; height: 100%; width: 100%;`)
    container.innerHTML = (`
    <div style="max-width: fit-content; margin: 0 auto; position: relative; margin: auto 0;">
        <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2FAC_Status_Asset.png?alt=media&token=d1174d6f-df5c-4cdf-b305-698b2264c847" style="height: fit-content; width: 100%; object-fit: contain;">
        <div class="status-text" style="position: absolute;color: white;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;display: flex;justify-content: center;padding-top: 10px;"></div>
        <div class="status-text" style="position: absolute;color: white;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;display: flex;justify-content: center;padding-top: 10px;padding-right:20px"></div>
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