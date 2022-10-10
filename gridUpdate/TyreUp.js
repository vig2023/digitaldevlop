const plugin = ({widgets, simulator}) => {
    const container = document.createElement("div")
    container.setAttribute("style", `height: 100%; width: 100%;`)
    container.innerHTML = (`
    <div style="max-width: fit-content;position: relative; margin: auto 0;">
       
        <div class="status-text" style="position: absolute;color: black;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;display: inline-grid;justify-content: center;padding-top: 10px;">
        <div >
        <p style="color:#00568f;font-weight:600;font-size:20px;font-family: 'Lato';">Tyre Pressure</p>
        </div>
        <div style="display:block">
        <p>F_Left: <span style="color:red;font-family: 'Lato'">14 psi</span></p>
        <p>F_Right: <span style="color:#1973a5;font-family: 'Lato'">40 psi</span></p>
        </div>
        <div style="display:block">
        <p>R_Left: <span style="color:#1973a5;font-family: 'Lato'">40 psi</span></p>
        <p>R_Right: <span style="color:#1973a5;font-family: 'Lato'">40 psi</span></p>
        </div>
        </div>
    </div>
    `)

    let boxGlobal = null

    widgets.register("tyreup", (box) => {
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