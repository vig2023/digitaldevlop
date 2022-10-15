const plugin = ({widgets, simulator}) => {
    const container = document.createElement("div")
    container.setAttribute("style", `height: 100%; width: 100%;`)
    container.innerHTML = (`
    <div style="max-width: fit-content; margin: 0 auto; position: relative;">
    <img style="width:18em" src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2FAC_Status_Asset.png?alt=media&token=d1174d6f-df5c-4cdf-b305-698b2264c847" style="height: 100%; width: 100%; object-fit: contain;">
       
    </div>
    `)

    let boxGlobal = null

    widgets.register("acvalue", (box) => {
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