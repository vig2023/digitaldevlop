const plugin = ({grid, simulator}) => {
    const container = document.createElement("div")
    container.setAttribute("style", `display:flex; height: 100%; width: 100%;`)
    container.innerHTML = (`
    <div style="max-width: fit-content; margin: 0 auto; position: relative; margin: auto 0;">
        <img style="width:18em" src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fvehicle_status_asset.png?alt=media&token=0f9b503c-da94-4c50-beaf-7f2e1883ec9b">
       
    </div>
    `)

    grid.create(4, 9).injectNode(container)

    // let currentValue = ""

    // simulator("Vehicle.Cabin.InstrumentPanel.Status", "get", async ({args}) => {
    //     return currentValue
    // })

    // simulator("Vehicle.Cabin.InstrumentPanel.Status", "set", async ({args}) => {
    //     currentValue = args[0]
    //     container.querySelector(".status-text").textContent = currentValue
    //     return null
    // })

    
    return {}
}

export default plugin