const plugin = ({widgets, simulator}) => {
    const container = document.createElement("div")
    container.setAttribute("style", `height: 100%; width: 100%;`)
    container.innerHTML = (`
    <div style="max-width: fit-content; margin: 0 auto; position: relative;">
    <img style="width:18em" src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fvehicle_status_asset.png?alt=media&token=0f9b503c-da94-4c50-beaf-7f2e1883ec9b" style="height: 100%; width: 100%; object-fit: contain;">
       
    </div>
    `)

    let boxGlobal = null

    widgets.register("pressureindicator", (box) => {
        boxGlobal = box
        box.injectNode(container)
        return () => {
            boxGlobal = null
            // Deactivation function for clearing intervals or such.
        }
    })

    return {
        // set_text: (text) => {
        //     if (boxGlobal !== null) {
        //         container.querySelector(".map-text").textContent = text
        //     }
        // }
    }
}

export default plugin