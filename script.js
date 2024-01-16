
// VARIABLES

let intervalWaterIn = 0
let intervalNaClIn = 0
let intervalKClIn = 0
let intervalElectrolytesIn = 0

let intervalWaterOut = 0
let urineOsm = 0
let urineSodium = 0
let urinePotassium = 0

let urineTonicity = 0
let intervalElectrolytesOut = 0
  // >> for now, outs will combine Na and K (x2 with anions)
let intervalSoluteNet = 0

let idealTBW = 0
let idealICF = 0
let idealECF = 0

let idealTBOsm = 0
  // double normal sodium of 140
let idealICOsm = 0
let idealECOsm = 0


let preIntervalTBW = 0
let preIntervalICF = 0
let preIntervalECF = 0
let preIntervalTBOsm = 0
let preIntervalICOsm = 0
let preIntervalECOsm = 0
let preIntervalSodium = 0
let preIntervalPotassium = 0
let preIntervalUrineTonicity = 0

let biologicalSexVar = ""

let preIntervalTBOsmolality = 0

let SIADH = true
  // for now, default SIADH true

let idealCommentsVar = ""
let initialCommentsVar = ""

let timeZero = ""

let currentTime = ""

let currentHour = -1 // starts negative 1 so it can become zero once initial state set

let currentMinute = -1

let currentDay = -1 // also starts negative 1

let hourZeroValue = -1 // will be set based on which hour the time is "within" for the table


// CACHED ELEMENTS

const intervalWaterInEl = document.querySelector("#water-manual-value-input")
const intervalNaClInEl = document.querySelector("#na-cl-manual-value-input")
const intervalKClInEl = document.querySelector("#potassium-manual-value-input")
const intervalWaterOutEl = document.querySelector("#urine-output-value-input")
const mostRecentSodiumEl = document.querySelector("#serum-sodium-value-input")
const mostRecentPotassiumEl = document.querySelector("#serum-potassium-value-input")
const mostRecentUrineOsmEl = document.querySelector("#urine-osm-value-input")
const mostRecentUrineNaEl = document.querySelector("#urine-sodium-value-input")
const mostRecentUrineKEl = document.querySelector("#urine-potassium-value-input")
const biologicalSexEl = document.querySelector("#sex-value-input")
const weightEl = document.querySelector("#weight-value-input")

const preIntervalWeightEl = document.querySelector("#pre-interval-weight-value-input")

const renderTBWEl = document.querySelector("#output-ideal-tbw")
const renderICFEl = document.querySelector("#output-ideal-icf")
const renderECFEl = document.querySelector("#output-ideal-ecf")
const renderTBSoluteEl = document.querySelector("#output-ideal-tbosm")
const renderICSoluteEl = document.querySelector("#output-ideal-icosm")
const renderECSoluteEl = document.querySelector("#output-ideal-ecosm")

const renderInitialTBWEl = document.querySelector("#output-initial-tbw")
const renderInitialICFEl = document.querySelector("#output-initial-icf")
const renderInitialECFEl = document.querySelector("#output-initial-ecf")
const renderInitialTBSoluteEl = document.querySelector("#output-initial-tbosm")
const renderInitialICSoluteEl = document.querySelector("#output-initial-icosm")
const renderInitialECSoluteEl = document.querySelector("#output-initial-ecosm")

const renderInitialSodiumEl = document.querySelector("#output-initial-sodium")
const renderInitialPotassiumEl = document.querySelector("#output-initial-potassium")

const renderPreIntervalTBWEl = document.querySelector("#output-pre-interval-tbw")
const renderPreIntervalICFEl = document.querySelector("#output-pre-interval-icf")
const renderPreIntervalECFEl = document.querySelector("#output-pre-interval-ecf")
const renderPreIntervalTBSoluteEl = document.querySelector("#output-pre-interval-tbosm")
const renderPreIntervalICSoluteEl = document.querySelector("#output-pre-interval-icosm")
const renderPreIntervalECSoluteEl = document.querySelector("#output-pre-interval-ecosm")

const renderPreIntervalSodiumEl = document.querySelector("#output-pre-interval-sodium")
const renderPreIntervalPotassiumEl = document.querySelector("#output-pre-interval-potassium")
const renderPreIntervalUrineTonicityEl = document.querySelector("#output-pre-interval-urine-tonicity")

const preIntervalSodiumEl = document.querySelector('#serum-sodium-pre-interval-input')
const preIntervalPotassiumEl = document.querySelector('#serum-potassium-pre-interval-input')

const renderTimeZeroEl = document.querySelector("#time-zero-value-output")

const renderCurrentTimeEl = document.querySelector("#render-pre-interval-current-time")

const idealCommentsEl = document.querySelector("#ideal-comments")
const initialCommentsEl = document.querySelector("#initial-comments")


const setBaselinesButtonEl = document.querySelector(".set-baseline-button")
const setInitialStateButtonEl = document.querySelector(".set-initial-state-button")
const setPreIntervalButtonEl = document.querySelector(".set-pre-interval-button")
const intervalButtonEl = document.querySelector(".run-interval-button")

const timeZeroEl = document.querySelector("#time-zero-value-input")

// EVENT LISTENERS

setBaselinesButtonEl.addEventListener('click', setBaselineValues)
setInitialStateButtonEl.addEventListener('click', setInitialStateValues)
setPreIntervalButtonEl.addEventListener('click', setPreIntervalValues)
intervalButtonEl.addEventListener('click', runInterval)

// FUNCTIONS

//

init ()

function init () {
  // if needed
}

function setBaselineValues() {

  setBaselinesButtonEl.setAttribute('disabled', true);
  setInitialStateButtonEl.removeAttribute('disabled', true)

  mostRecentSodiumEl.removeAttribute('disabled')
  timeZeroEl.removeAttribute('disabled')
  setVars()

  biologicalSexEl.setAttribute('disabled', true);
  weightEl.setAttribute('disabled', true);

}

function runInterval () {
  // active once button clicked
  calculatedVars()
  // TODO: remember to set the inputs to zero for the next interval!
}



function setVars () {
  // take input fields and turn into 

  intervalWaterIn = Number(intervalWaterInEl.value)
    console.log("JS var for interval water in: ", intervalWaterIn)
  intervalNaClIn = Number(intervalNaClInEl.value)
    console.log("JS var for interval NaCl in: ", intervalNaClIn)

  if (biologicalSexEl.value === "male") {
    biologicalSexVar = "male"
    idealTBW = 0.6 * (weightEl.value)
    // will use 60% for male
    idealCommentsVar = "Comment: assuming ideal TBW is 60% of dry weight"
    console.log("male; ideal TBW: ", idealTBW)
  } else {
    biologicalSexVar = "female"
    idealTBW = 0.55 * (weightEl.value)
    // will use 55% for female
    idealCommentsVar = "Comment: assuming ideal TBW is 55% of dry weight"
    console.log("female; ideal TBW: ", idealTBW)
  }

  idealECF = idealTBW * 0.4
  idealICF = idealTBW * 0.6
    console.log("ideal ICF/ECF: ", idealICF, "/", idealECF)

  idealTBOsm = 280 * idealTBW
  idealECOsm = 280 * idealECF
  idealICOsm = 280 * idealICF
    console.log("ideal TBOsm/ICOsm/ECOsm: ", idealTBOsm, "/", idealICOsm, "/", idealECOsm)


  renderIdealValues()
}


function calculatedVars () {

  intervalElectrolytesIn = intervalNaClIn + intervalKClIn
  // for now, just sodium chloride but later will include K
  
  // recall, the "interval specific therapies" will be added by clicking a specific button, so these will easily add to the total field with a separate function triggered that way

  // 

  intervalElectrolytesOut = (intervalWaterOut * urineTonicity)
  // for now, we are ignoring ineffective solutes

  intervalSoluteNet = (intervalElectrolytesIn - intervalElectrolytesOut)

  physiologicEquations()
 }


 function renderIdealValues () {
  renderTBWEl.innerHTML = `${idealTBW.toFixed(1)} L`
  renderICFEl.innerHTML = `${idealICF.toFixed(1)} L`
  renderECFEl.innerHTML = `${idealECF.toFixed(1)} L`
  renderTBSoluteEl.innerHTML = `${idealTBOsm.toFixed(0)} mOsm`
  renderICSoluteEl.innerHTML = `${idealICOsm.toFixed(0)} mOsm`
  renderECSoluteEl.innerHTML = `${idealECOsm.toFixed(0)} mOsm`

  idealCommentsEl.innerHTML = idealCommentsVar

 }


 function setInitialStateValues () {

  setInitialStateButtonEl.setAttribute('disabled', true);
  mostRecentSodiumEl.setAttribute('disabled', true);
  timeZeroEl.setAttribute('disabled', true);
  setPreIntervalButtonEl.removeAttribute('disabled')

  if (preIntervalWeightEl.value <= 0) {
      console.log("pre-interval weight not given; SIADH case assumed")
    // if SIADH true and NO weight given; assuming "chronic":
      // in this case, we have to anticipate extent of water excess and solute loss
      // will assume ECW is unchanged from ideal, since "euvolemic"
      // will follow assumption that new TBW is only 50% greater than would be expected if we had ONLY excess water in this case of SIADH:

      // hypothetic situation first, where no TBOsm are lost:
        preIntervalSodium = Number(mostRecentSodiumEl.value)
        preIntervalTBOsmolality = preIntervalSodium * 2
        preIntervalTBOsm = idealTBOsm
    let hypotheticalPreIntervalTBW = preIntervalTBOsm / preIntervalTBOsmolality
        // in reality, after 1-2 days, increase in TBW will only be half what would be expected if no change in solute:
    let hypotheticalIncreaseTBW = hypotheticalPreIntervalTBW - idealTBW
    let halfIncreaseTBW = hypotheticalIncreaseTBW * 0.5
        preIntervalTBW = idealTBW + halfIncreaseTBW
        // now, above, this is corrected
        // below, we re-establish TBOsm for this new value, since solute is lost
        preIntervalTBOsm = preIntervalTBOsmolality * preIntervalTBW

        preIntervalECF = idealECF // with SIADH, ECF is unchanged
        preIntervalICF = (preIntervalTBW - preIntervalECF)

        preIntervalECOsm = preIntervalTBOsmolality * preIntervalECF
        preIntervalICOsm = preIntervalTBOsmolality * preIntervalICF
        
        initialCommentsVar = "Comment: assumes solute loss has occured along with increased TBW, the increase of which is half of what it would be if gain in free water alone were the sole contributor"

  } else {

    // for now, will just call the new TBW the current/most recent weight
      console.log("pre-interval weight: ", preIntervalWeightEl.value)
    if (biologicalSexVar === "male") {
      preIntervalTBW = 0.6 * (preIntervalWeightEl.value)
      // will use 60% for male
    } else {
      preIntervalTBW = 0.55 * (preIntervalWeightEl.value)
      // will use 55% for female
    }



    // ignoring potassium for now; will also assume IC solute fixed for now
    preIntervalICOsm = idealICOsm

    preIntervalSodium = Number(mostRecentSodiumEl.value)

    preIntervalTBOsmolality = preIntervalSodium * 2
       console.log("pre-interval TBOsm: ", preIntervalTBOsmolality)

    preIntervalTBOsm = preIntervalTBOsmolality * preIntervalTBW

    preIntervalICF = preIntervalICOsm / preIntervalTBOsmolality

    preIntervalECF = preIntervalTBW - preIntervalICF

    preIntervalECOsm = preIntervalTBOsmolality * preIntervalECF

    console.log("ensuring total osmolality adds up; pre-interval IC OSM + EC Osm = TB Osm: ", preIntervalICOsm, " + ", preIntervalECOsm, " = ", (preIntervalICOsm + preIntervalECOsm), " = ", preIntervalTBOsm)

  }

  // set initial time:

  timeZero = timeZeroEl.value

  currentTime = timeZeroEl.value
  currentHour = 0
  currentDay = 0


  renderInitialStateValues()
 }


 function renderInitialStateValues () {

  renderInitialTBWEl.innerHTML = `${preIntervalTBW.toFixed(1)} L`
  renderInitialICFEl.innerHTML = `${preIntervalICF.toFixed(1)} L`
  renderInitialECFEl.innerHTML = `${preIntervalECF.toFixed(1)} L`
  renderInitialTBSoluteEl.innerHTML = `${preIntervalTBOsm.toFixed(0)} mOsm`
  renderInitialICSoluteEl.innerHTML = `${preIntervalICOsm.toFixed(0)} mOsm`
  renderInitialECSoluteEl.innerHTML = `${preIntervalECOsm.toFixed(0)} mOsm`

  renderInitialSodiumEl.innerHTML = `${preIntervalSodium.toFixed(0)} mEq/L`
  renderInitialPotassiumEl.innerHTML = `${preIntervalPotassium.toFixed(0)} mEq/L`

  // also renders pre-interval for this first time!
  renderPreIntervalTBWEl.innerHTML = `${preIntervalTBW.toFixed(1)} L`
  renderPreIntervalICFEl.innerHTML = `${preIntervalICF.toFixed(1)} L`
  renderPreIntervalECFEl.innerHTML = `${preIntervalECF.toFixed(1)} L`
  renderPreIntervalTBSoluteEl.innerHTML = `${preIntervalTBOsm.toFixed(0)} mOsm`
  renderPreIntervalICSoluteEl.innerHTML = `${preIntervalICOsm.toFixed(0)} mOsm`
  renderPreIntervalECSoluteEl.innerHTML = `${preIntervalECOsm.toFixed(0)} mOsm`
// still have to have variables now for preintervalVars!

  renderPreIntervalSodiumEl.innerHTML = `${preIntervalSodium.toFixed(0)} mEq/L`
  renderPreIntervalPotassiumEl.innerHTML = `${preIntervalPotassium.toFixed(0)} mEq/L`

  initialCommentsEl.innerHTML = initialCommentsVar

  renderTimeZeroEl.innerHTML = ` ${timeZero} (Day 0, Hr 0)`

 }


 function setPreIntervalValues () {


  // holding off on potassium for now, but would be similar
     console.log("here is the preinterval sodium from that function: ", preIntervalSodium)

      // urine tonicity:

      let urineElectrolytes = Number(mostRecentUrineNaEl.value) + Number(mostRecentUrineKEl.value)
      console.log("urine electrolytes total: ", urineElectrolytes)

   urineTonicity = (urineElectrolytes / preIntervalSodium) * 100

   preIntervalUrineTonicity = urineTonicity

   updateClock()
   renderPreIntervalValues()

 }


 function updateClock () {

  // for next time interval, will need this updated

 }


 function renderPreIntervalValues () {

  renderPreIntervalTBWEl.innerHTML = `${preIntervalTBW.toFixed(1)} L`
  renderPreIntervalICFEl.innerHTML = `${preIntervalICF.toFixed(1)} L`
  renderPreIntervalECFEl.innerHTML = `${preIntervalECF.toFixed(1)} L`
  renderPreIntervalTBSoluteEl.innerHTML = `${preIntervalTBOsm.toFixed(0)} mOsm`
  renderPreIntervalICSoluteEl.innerHTML = `${preIntervalICOsm.toFixed(0)} mOsm`
  renderPreIntervalECSoluteEl.innerHTML = `${preIntervalECOsm.toFixed(0)} mOsm`
// still have to have variables now for preintervalVars!

  renderPreIntervalSodiumEl.innerHTML = `${preIntervalSodium.toFixed(0)} mEq/L`
  renderPreIntervalPotassiumEl.innerHTML = `${preIntervalPotassium.toFixed(0)} mEq/L`

  renderPreIntervalUrineTonicityEl.innerHTML = `${preIntervalUrineTonicity.toFixed(0)} %`

  renderCurrentTimeEl.innerHTML = `${currentTime} (Day ${currentDay}, Hr ${currentHour})`

 }


 function physiologicEquations () {



    // 

 }


