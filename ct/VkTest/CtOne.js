// import GoogleMapsPluginApi from "/GoogleMapsPluginApi.js"
// import StatusTable from "./StatusTable.js.js"

const plugin = ({widgets, simulator, vehicle}) => {
    
    let speedDiv = null;
    let carDiv = null;
    function setSpeedRandomOne() {
        var val= Math.random() * 90;
        var trVal= Math.round(val);
        console.log(trVal)
        // var element=container.querySelector(".status-text");
        speedDiv.querySelector(`[data-cell="speed-stat-one"] span`).textContent = trVal
        var eleOne = speedDiv.querySelector(".speedVal-one");
        var leftWheel = carDiv.querySelector(".ct-left-one");
        var rightWheel = carDiv.querySelector(".ct-right-one");

        if(val<=30){
        //    element.setAttribute("style", "color:red; background-color:#e1f0fe")
            eleOne.setAttribute("style", "color:orange;font-weight:bolder");
            leftWheel.setAttribute("style", "height: 44%;width: 60%;position: absolute;right: 15%;");
            rightWheel.setAttribute("style", "height: 44%;width: 60%;position: absolute;right: 25%;");
        }else if(val>30){
            eleOne.setAttribute("style", "color:#383c7f;font-weight:bolder")
            leftWheel.setAttribute("style", "height: 44%;width: 60%;position: absolute;right: 20%;");
            rightWheel.setAttribute("style", "height: 44%;width: 60%;position: absolute;right: 20%;")
        }
        // container.querySelector(".status-text").textContent=val
    // document.getElementById('out').innerHTML = Math.random() * 101 | 0;
}
setInterval(setSpeedRandomOne, 2500);
    widgets.register("blockOne", (box) => {
        const div = document.createElement("div")
        div.style = "display: flex;height: 100%;width: 100%;"

        speedDiv = div

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
        <div style="display: flex;/* align-items:center; *//* justify-content: center; *//* margin-bottom: 30px; */">
        <img src="https://pic.onlinewebfonts.com/svg/img_273202.png" style="height: 100%;width: 33%;object-fit: cover;">               
        </div>
        <div style="font-size: 9em;line-height: 1.5em;text-align:center">
            <div class="speedVal-one" data-cell="speed-stat-one" style="color:#383c7f;font-weight:bolder"><strong> </strong><span>29</span></div>
          
        </div>
    </div>
        `

        box.injectNode(div)
    })
let polyLineDiv = null;
    widgets.register("polyBoxOne", (box) => {
        const div = document.createElement("div")
        div.style = "display: flex;height: 100%;width: 100%;"

        polyLineDiv = div

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
        <iframe width="560" height="315" src="https://vig2023.github.io/digitaldevlop/ct/Test/threetest.html" title="application" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        `

        box.injectNode(div)
    })

    // widgets.register("CarImage", (box) => {
    //     box.injectHTML(`
    //     <div style="max-width: fit-content; margin: 0 auto; position: relative;">
    //     <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2FE-Car_Full_Vehicle.png?alt=media&token=9c9d4cb4-fee0-42e3-bbb1-7feaa407cc8e" style="height: 100%; width: 100%; object-fit: cover;">
    //         <div class="smartphone-text" style="position: absolute; color: white; font-family: 'Lato'; width: 100%; top: 0; height: 100%; box-sizing: border-box; padding-top: 25px; padding-right: 12px; padding-left: 12px; padding-bottom: 25px;"></div>
    //     </div>
    //     `)
    // })

    //CT-Car-Placement
   
    //eof CT-car
     //CT-Car-Placement
     widgets.register("carBoxOne", (box) => {
        const div = document.createElement("div")
        div.style = "display: flex;height: 100%;width: 100%;"

        carDiv = div

        div.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        * {
            box-sizing: border-box;
        }
        body {
            font-family: 'Lato', sans-serif;
        }    
        @keyframes left_move {
            from {
              left: 25%;
            }
            100% {
              left: 20%;
            }
          }
        </style>
        <div style="display: flex; flex-direction: column; width: 100%; height: 100%; padding: 30px 40px; justify-content: center; color: #808080; user-select: none; background-color: #f7f7f7;">
        <div style="display: flex; flex-direction: column; width: 100%; height: 100%; padding: 30px 40px; justify-content: center; color: #808080; user-select: none; background-color: #f7f7f7;">
        <div style="display: flex; align-items:center; justify-content: center; margin-bottom: 30px;">
        <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2FMobile_view.png?alt=media&amp;token=f4ec950a-72d6-4218-b440-08f6af307600" style="height: 34em;width: 18em;object-fit: cover;">
        <img class="ct-left-one" src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fleft_wheel.png?alt=media&amp;token=49e1b2c8-a832-4d5a-9fb9-a3ab51e8f269" style="height: 44%;width: 60%;position: absolute;left: 25%;">
        <img class="ct-right-one" src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fright_wheel.png?alt=media&amp;token=5585a090-61b1-42e8-8d0a-edb97b5cfcf7" style="height: 44%;width: 60%;position: absolute;right: 25%;">
        <img class="ct-body-one" src=" https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fmid_body.png?alt=media&amp;token=99619916-1333-406e-b31f-9fd779e8e468" style="height: 44%;width: 60%;/* object-fit: cover; */position: absolute;">
        </div>
        </div>
        </div>
        `

        box.injectNode(div)
    })
    //eof CT-car

    return {
       
    }
}

export default plugin