
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

const intervalButtonEl = document.querySelector(".run-interval-button")

// EVENT LISTENERS

intervalButtonEl.addEventListener('click', runInterval)

// FUNCTIONS

function runInterval () {
  // active once button clicked
  setVars()

  // TODO: remember to set the inputs to zero for the next interval!
}

function setVars () {
  // take input fields and turn into 
  intervalWaterIn = Number(intervalWaterInEl.value)
    console.log("JS var for interval water in: ", intervalWaterIn)
  intervalNaClIn = Number(intervalNaClInEl.value)
    console.log("JS var for interval NaCl in: ", intervalNaClIn)


  let biologicalSexVar = ""

  if (biologicalSexEl.value === "male") {
    biologicalSexVar = "male"
    idealTBW = 0.6 * (weightEl.value)
    // will use 60% for male
    console.log("male; ideal TBW: ", idealTBW)
  } else {
    biologicalSexVar = "female"
    idealTBW = 0.55 * (weightEl.value)
    // will use 55% for female
    console.log("female; ideal TBW: ", idealTBW)
  }

  idealECF = idealTBW * 0.4
  idealICF = idealTBW * 0.6
    console.log("ideal ICF/ECF: ", idealICF, "/", idealECF)

  idealTBOsm = 280 * idealTBW
  idealECOsm = 280 * idealECF
  idealICOsm = 280 * idealICF
    console.log("ideal TBOsm/ICOsm/ECOsm: ", idealTBOsm, "/", idealICOsm, "/", idealECOsm)

  calculatedVars()
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

 function physiologicEquations () {



    // 

 }


