const plugin = ({grid, simulator}) => {
    const container = document.createElement("div")
    container.setAttribute("style", `display:flex; height: 100%; width: 100%;`)
    container.innerHTML = (`
    <div style="max-width: fit-content; margin: 0 auto; position: relative; margin: auto 0;">
        <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2FLocate%20My%20Car%20%E2%80%93%20asset.png?alt=media&token=348aca00-8357-4102-a0ad-4468697c4a3b" style="height: fit-content; width: 100%; object-fit: contain;">
       
    </div>
    `)

    grid.create(3, 8).injectNode(container)

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