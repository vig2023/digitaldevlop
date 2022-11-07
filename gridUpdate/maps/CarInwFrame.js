const plugin = ({widgets, simulator}) => {
    const container = document.createElement("div")
    container.setAttribute("style", `height: 100%; width: 100%;`)
    container.innerHTML = (`
    <div style="max-width: fit-content; margin: 0 auto; position: relative;">
    <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2FLocate%20My%20Car%20%E2%80%93%20asset.png?alt=media&token=348aca00-8357-4102-a0ad-4468697c4a3b" style="height: 100%; width: 100%; object-fit: contain;">
    <div style="position: relative;max-width: fit-content;bottom: 31em;
    left: 9%;">
    <iframe
    width="81%"
    height="68%"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://maps.google.com/maps?q=27.149699,8.3672&hl=en-US&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>   
    </div>
    `)

    let boxGlobal = null

    widgets.register("carinwframe", (box) => {
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