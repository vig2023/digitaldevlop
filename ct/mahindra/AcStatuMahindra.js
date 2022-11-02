const plugin = ({widgets, simulator, vehicle}) => {

    let testFrameDiv = null;
    widgets.register("acStatusMahindra", (box) => {
        const div = document.createElement("div")
        div.style = "display: flex;height: 100%;width: 100%;"

        testFrameDiv = div

        div.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        * {
            box-sizing: border-box;
        }
        body {
            font-family: 'Lato', sans-serif;
        }    
        </style>
        <div style="display: flex; flex-direction: column; width: 100%; height: 100%; padding: 30px 40px; justify-content: center; color: #808080; user-select: none; background-color: #f7f7f7;">
        <iframe width="100%" height="100%" src="https://vig2023.github.io/digitaldevlop/ct/Test/acStatus.html" title="application" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        `

        box.injectNode(div)
    })


    return {
     
    }
}

export default plugin