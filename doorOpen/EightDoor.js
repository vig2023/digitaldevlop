const plugin = ({widgets, simulator}) => {

    const container = document.createElement("div")
    container.setAttribute("style", `display:flex; height: 100%; width: 100%;`)
    container.innerHTML = (`
    <div style="max-width: fit-content; margin: 0 auto; position: relative; margin: auto 0;">
    <img src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fvehicle_status_asset.png?alt=media&amp;token=0f9b503c-da94-4c50-beaf-7f2e1883ec9b" style="height: fit-content; width: 100%; object-fit: contain;">
    <div class="lock-one" style="position: absolute;color: white;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;padding-top: 40px;">
    <img class="front" src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fdoor_lock.png?alt=media&amp;token=4e7543a5-3b7f-4cea-a1cf-976f87beb4c2" style="height:3%;width:5%;position: absolute;left: 48%;top: 15%;">
    </div>
    <div class="lock-two" style="position: absolute;color: white;font-family: 'Lato';width: 71%;top: 0;height: 100%;box-sizing: border-box;">
    <img class="left-one" src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fdoor_lock.png?alt=media&amp;token=4e7543a5-3b7f-4cea-a1cf-976f87beb4c2" style="height: 3%;width: 7%;position: absolute;top: 38%;left: 30%;">
    <!-- </div> -->
    <!-- <div class="lock-three" style="position: absolute;color: white;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;display: flex;justify-content: center;padding-top: 120px;"> -->
    <img class="left-two" src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fdoor_lock.png?alt=media&amp;token=4e7543a5-3b7f-4cea-a1cf-976f87beb4c2" style="height:3%;width: 7%;position: absolute;top: 50%;left: 30%;">
    </div>
    <div class="lock-four" style="position: absolute;color: white;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;">
    <img class="right-one" src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fdoor_lock.png?alt=media&amp;token=4e7543a5-3b7f-4cea-a1cf-976f87beb4c2" style="height:3%;width:5%;position: absolute;top: 38%;right: 22%;">
    <!-- </div> -->
    <!-- <div class="lock-five" style="position: absolute;color: white;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;display: flex;justify-content: center;padding-top: 200px;"> -->
    <img class="right-two" src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fdoor_lock.png?alt=media&amp;token=4e7543a5-3b7f-4cea-a1cf-976f87beb4c2" style="height:3%;width:5%;position: absolute;right: 22%;bottom: 47%;">
    </div>
    <div class="lock-six" style="position: absolute;color: white;font-family: 'Lato';width: 100%;top: 0;height: 100%;box-sizing: border-box;">
    <img class="bannet" src="https://firebasestorage.googleapis.com/v0/b/digital-auto.appspot.com/o/media%2Fdoor_lock.png?alt=media&amp;token=4e7543a5-3b7f-4cea-a1cf-976f87beb4c2" style="height:3%;width:5%;position: absolute;bottom: 31%;left: 47%;">
    </div>
</div>
    `)
    function setRandom() {
        var val= Math.random() * 120;
        // var element=container.querySelector(".status-text");
        var eleOne = container.querySelector(".front");
        let eleTwo = container.querySelector(".left-one");
        let eleThree = container.querySelector(".left-two");
        let eleFour = container.querySelector(".right-one");
        let eleFive = container.querySelector(".right-two");
        let eleSix = container.querySelector(".bannet");
        if(val<=20){
        //    element.setAttribute("style", "color:red; background-color:#e1f0fe")
            eleOne.setAttribute("style", "display:none")
            eleTwo.setAttribute("style","display:block;height: 3%;width: 7%;position: absolute;top: 38%;left: 30%;")
            eleThree.setAttribute("style","display:block;height:3%;width: 7%;position: absolute;top: 50%;left: 30%;")
            eleFour.setAttribute("style","display:block;height:3%;width:5%;position: absolute;top: 38%;right: 22%;")
            eleFive.setAttribute("style","display:block;height:3%;width:5%;position: absolute;right: 22%;bottom: 47%;")
            eleSix.setAttribute("style","display:block;height:3%;width:5%;position: absolute;bottom: 31%;left: 47%;")
        }else if(val<=40){
            eleTwo.setAttribute("style", "display:none")
            eleOne.setAttribute("style","display:block;height:3%;width:5%;position: absolute;left: 48%;top: 15%;")
            eleThree.setAttribute("style","display:block;height:3%;width: 7%;position: absolute;top: 50%;left: 30%;")
            eleFour.setAttribute("style","display:block;height:3%;width:5%;position: absolute;top: 38%;right: 22%;")
            eleFive.setAttribute("style","display:block;height:3%;width:5%;position: absolute;right: 22%;bottom: 47%;")
            eleSix.setAttribute("style","display:block;height:3%;width:5%;position: absolute;bottom: 31%;left: 47%;")
        }else if(val<=60){
            eleThree.setAttribute("style", "display:none")
            eleOne.setAttribute("style","display:block;height:3%;width:5%;position: absolute;left: 48%;top: 15%;")
            eleTwo.setAttribute("style","display:block;height: 3%;width: 7%;position: absolute;top: 38%;left: 30%;")
            eleFour.setAttribute("style","display:block;height:3%;width:5%;position: absolute;top: 38%;right: 22%;")
            eleFive.setAttribute("style","display:block;height:3%;width:5%;position: absolute;right: 22%;bottom: 47%;")
            eleSix.setAttribute("style","display:block;height:3%;width:5%;position: absolute;bottom: 31%;left: 47%;")
        }else if(val<=80){
            eleFour.setAttribute("style", "display:none")
            eleOne.setAttribute("style","display:block;height:3%;width:5%;position: absolute;left: 48%;top: 15%;")
            eleTwo.setAttribute("style","display:block;height: 3%;width: 7%;position: absolute;top: 38%;left: 30%;")
            eleThree.setAttribute("style","display:block;height:3%;width: 7%;position: absolute;top: 50%;left: 30%;")
            eleFive.setAttribute("style","display:block;height:3%;width:5%;position: absolute;right: 22%;bottom: 47%;")
            eleSix.setAttribute("style","display:block;height:3%;width:5%;position: absolute;bottom: 31%;left: 47%;")
        }else if(val<=100){
            eleFive.setAttribute("style", "display:none")
            eleOne.setAttribute("style","display:block;height:3%;width:5%;position: absolute;left: 48%;top: 15%;")
            eleTwo.setAttribute("style","display:block;height: 3%;width: 7%;position: absolute;top: 38%;left: 30%;")
            eleThree.setAttribute("style","display:block;height:3%;width: 7%;position: absolute;top: 50%;left: 30%;")
            eleFour.setAttribute("style","display:block;height:3%;width:5%;position: absolute;top: 38%;right: 22%;")
            eleSix.setAttribute("style","display:block;height:3%;width:5%;position: absolute;bottom: 31%;left: 47%;")
        }else if(val<=120){
            eleSix.setAttribute("style", "display:none")
            eleOne.setAttribute("style","display:block;height:3%;width:5%;position: absolute;left: 48%;top: 15%;")
            eleTwo.setAttribute("style","display:block;height: 3%;width: 7%;position: absolute;top: 38%;left: 30%;")
            eleThree.setAttribute("style","display:block;height:3%;width: 7%;position: absolute;top: 50%;left: 30%;")
            eleFour.setAttribute("style","display:block;height:3%;width:5%;position: absolute;top: 38%;right: 22%;")
            eleFive.setAttribute("style","display:block;height:3%;width:5%;position: absolute;right: 22%;bottom: 47%;")
        }
        // container.querySelector(".status-text").textContent=val
    // document.getElementById('out').innerHTML = Math.random() * 101 | 0;
}
setRandom();
setInterval(setRandom, 2500);
    let boxGlobal = null

    widgets.register("doorcheckEight", (box) => {
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