const plugin = ({widgets, simulator}) => {
    const container = document.createElement("div")
    container.setAttribute("style", `height: 100%; width: 100%;`)
    container.innerHTML = (`
    <div style="max-width: fit-content; margin: 0 auto; position: relative;">
    <style>
    .button {
        background-color: #4c83af;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
    </style>
    <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2FLocate%20My%20Car%20%E2%80%93%20asset.png?alt=media&token=348aca00-8357-4102-a0ad-4468697c4a3b" style="height: 100%; width: 100%; object-fit: contain;">
    <div style="position: relative;max-width: fit-content;bottom: 31em;
    left: 9%;">
    <label for="lname">Car Location:</label><br>
    <input type="text" id="lname" name="lname" value="Robert Bosch GmbH, Bismarckstraße 71, 10627 Berlin, Germany" style="
    width: 50%;
    line-height: 3em;
    font-size: 18px;
">
    

<button class="button">Default Button</button>
    </div>   
    </div>
    `)

    let boxGlobal = null

    widgets.register("carInput", (box) => {
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