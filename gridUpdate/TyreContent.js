const plugin = ({widgets, simulator}) => {
    const container = document.createElement("div")
    container.setAttribute("style", `display:flex; height: 100%; width: 100%;`)
    container.innerHTML = (`
    <div style="max-width: fit-content; margin: 0 auto; position: relative; margin: auto 0;">
       
        <div class="status-text" style="position: absolute;color: black;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;display: flex;justify-content: center;padding-top: 10px;">
        <p style="color:"#00568f";font-weight:600;font-size:20px">Tyre Pressure</p>
        <div style="display:flex">
        <p>Front Left: <span style="color:red">14 psi</span></p>
        <p>Front Right: <span style="color:red">40 psi</span></p>
        <p>Rear Left: <span style="color:red">40 psi</span></p>
        <p>Rear Right: <span style="color:red">40 psi</span></p>
        </div>
        </div>
    </div>
    `)

    let boxGlobal = null

    widgets.register("tyrecontent", (box) => {
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