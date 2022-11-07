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
    
    <div style="
    position: relative;
    max-width: fit-content;
    /* bottom: 31em; */
    /* left: 9%; */
    top: 4em;
    ">
    <label for="lname" style="
    font-family: 'Lato' !important;
    position: relative;
    bottom: 1em;
    font-size: 21px;
">Car Location:</label><br>
    <input type="text" id="lname" name="lname" value="Robert Bosch GmbH, Bismarckstraße 71, 10627 Berlin, Germany" style="
    width: 28em;
    line-height: 3em;
    font-size: 18px;
">
    

<button class="button">Submit</button>
    </div>   
    </div>
    `)

    let boxGlobal = null

    widgets.register("carNwInput", (box) => {
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