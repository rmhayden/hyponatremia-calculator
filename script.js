
// VARIABLES

let intervalNumber = 1

let returnVar = false

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
let intervalWaterNet = 0

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

let preIntervalTBOsmolality = 0

let postIntervalTBW = 0
let postIntervalICF = 0
let postIntervalECF = 0
let postIntervalTBOsm = 0
let postIntervalICOsm = 0
let postIntervalECOsm = 0
let postIntervalSodium = 0
let postIntervalPotassium = 0

let postIntervalTBOsmolality = 0


let biologicalSexVar = ""


let SIADH = true
  // for now, default SIADH true

let idealCommentsVar = ""
let initialCommentsVar = ""

let timeZero = ""

let currentTime = ""

let currentHour = -1 // starts negative 1 so it can become zero once initial state set

let currentMinute = -1

let cummulativeMins = 0

let currentDay = -1 // also starts negative 1

let hourZeroValue = -1 // will be set based on which hour the time is "within" for the table

// these values are within intervals, NOT total cummulative
let cummulativeHours = 0
let cummulativeHoursWithoutRemainder = 0
let remainingMinutes = 0



// CACHED ELEMENTS

const intervalWaterInEl = document.querySelector("#water-manual-value-input")
const intervalNaClInEl = document.querySelector("#na-cl-manual-value-input")
const intervalKClInEl = document.querySelector("#potassium-manual-value-input")
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

//poster interval:
const renderPostIntervalTBWEl = document.querySelector("#output-post-interval-tbw")
const renderPostIntervalICFEl = document.querySelector("#output-post-interval-icf")
const renderPostIntervalECFEl = document.querySelector("#output-post-interval-ecf")
const renderPostIntervalTBSoluteEl = document.querySelector("#output-post-interval-tbosm")
const renderPostIntervalICSoluteEl = document.querySelector("#output-post-interval-icosm")
const renderPostIntervalECSoluteEl = document.querySelector("#output-post-interval-ecosm")

const renderPostIntervalSodiumEl = document.querySelector("#output-post-interval-sodium")
const renderPostIntervalPotassiumEl = document.querySelector("#output-post-interval-potassium")
//


const renderTimeZeroEl = document.querySelector("#time-zero-value-output")

const renderCurrentTimeEl = document.querySelector("#render-pre-interval-current-time")

const postIntervalTimeEl = document.querySelector('#end-time-value-input')

const idealCommentsEl = document.querySelector("#ideal-comments")
const initialCommentsEl = document.querySelector("#initial-comments")


const setBaselinesButtonEl = document.querySelector(".set-baseline-button")
const setInitialStateButtonEl = document.querySelector(".set-initial-state-button")
const setPreIntervalButtonEl = document.querySelector(".set-pre-interval-button")
const intervalButtonEl = document.querySelector(".run-interval-button")
const newIntervalButtonEl = document.querySelector(".new-interval-button")

const timeZeroEl = document.querySelector("#time-zero-value-input")

const intakeD5WEl = document.querySelector("#d5w-value-input")
const intakeNormalSalineEl = document.querySelector("#normal-saline-value-input")
const intakeHypertonicSalineEl = document.querySelector("#hypertonic-value-input")

const outputUrineOutputEl = document.querySelector("#urine-output-value-input")

const intervalEndTimeEl = document.querySelector("#end-time-value-input")

const renderPostIntervalEndTimeEl = document.querySelector("#render-post-interval-time")

const renderIntervalDuration = document.querySelector("#interval-duration")

const renderCurrentIntervalNumberEl = document.querySelector("#render-interval-number")

const renderPreIntervalCummulativetimeEl = document.querySelector("#render-cumulative-time")

// EVENT LISTENERS

setBaselinesButtonEl.addEventListener('click', setBaselineValues)
setInitialStateButtonEl.addEventListener('click', setInitialStateValues)
setPreIntervalButtonEl.addEventListener('click', setPreIntervalValues)
intervalButtonEl.addEventListener('click', runInterval)
newIntervalButtonEl.addEventListener('click', newInterval)

// FUNCTIONS

//

init ()

function init () {
  // if needed
  renderCurrentIntervalNumberEl.innerHTML = `1`

}

function newInterval () {

  intervalNumber = intervalNumber + 1

  // update on footer: 

  renderCurrentIntervalNumberEl.innerHTML = ` ${intervalNumber}`

  setPreIntervalButtonEl.removeAttribute("disabled")
  newIntervalButtonEl.setAttribute("disabled", true)
  preIntervalSodiumEl.removeAttribute("disabled")
    // user can enter either predicted or actual if different
  mostRecentUrineOsmEl.removeAttribute("disabled")
  mostRecentUrineNaEl.removeAttribute("disabled")
  mostRecentUrineKEl.removeAttribute("disabled")

  // this clears the RENDERING values only so far
  clearAllPreIntervalValues()
  clearAllPostIntervalValues()

  // below, also clear the input field values:

  mostRecentUrineOsmEl.value = null
  mostRecentUrineNaEl.value = null
  mostRecentUrineKEl.value = null
  preIntervalSodiumEl.value = postIntervalSodium.toFixed(0)



  // set actual post values to pre-values;

     // ignoring potassium for now; will also assume IC solute fixed for now
     preIntervalICOsm = postIntervalICOsm

  
     // updating pre-interval sodium depending on if a value was placed or not:

    if (!mostRecentSodiumEl.value) {
      console.log("no value for pre-interval sodium, so using prior postint Na", preIntervalSodium, " = ", postIntervalSodium)
      preIntervalSodium = postIntervalSodium

      preIntervalTBOsmolality = postIntervalSodium * 2
      preIntervalTBW = postIntervalTBW
              // will be difficult to know what the true preIntervalTBW actually is, so with this limited approach will just assume it is unchanged from predicted prior postTBW
      preIntervalTBOsm = preIntervalTBOsmolality * preIntervalTBW
      preIntervalICF = preIntervalICOsm / preIntervalTBOsmolality
      preIntervalECF = preIntervalTBW - preIntervalICF
      preIntervalECOsm = preIntervalTBOsmolality * preIntervalECF

    } else {
      preIntervalSodium = Number(mostRecentSodiumEl.value)

      preIntervalTBW = postIntervalTBW
      preIntervalTBOsmolality = postIntervalSodium * 2
        console.log("checking that new preinterval TBOsmolality is post-total Osmolality and double new perintevalsodium: ", (preIntervalSodium * 2), postIntervalTBOsmolality, preIntervalTBOsmolality)

      preIntervalTBOsm = preIntervalTBOsmolality * preIntervalTBW
      preIntervalICF = preIntervalICOsm / preIntervalTBOsmolality
      preIntervalECF = preIntervalTBW - preIntervalICF
      preIntervalECOsm = preIntervalTBOsmolality * preIntervalECF

    }
 

 
}

function setBaselineValues() {

  if (!weightEl.value) {
    returnVar = true
    alert("Must specify baseline estimated dry weight")
    return
  } else {
    returnVar = false
  }

  setBaselinesButtonEl.setAttribute('disabled', true);
  setInitialStateButtonEl.removeAttribute('disabled', true)

  mostRecentSodiumEl.removeAttribute('disabled')
  timeZeroEl.removeAttribute('disabled')
  setVars()

  biologicalSexEl.setAttribute('disabled', true);
  weightEl.setAttribute('disabled', true);

}

function runInterval () {

  // first, update the clock to get time value components
  updateClock()

  if (returnVar === false) {
    
  //
  postIntervalTimeEl.setAttribute('disabled', true)
  intakeD5WEl.setAttribute('disabled', true)
  intakeHypertonicSalineEl.setAttribute('disabled', true)
  intakeNormalSalineEl.setAttribute('disabled', true)
  intakeD5WEl.setAttribute('disabled', true)
  outputUrineOutputEl.setAttribute('disabled', true)
  intervalButtonEl.setAttribute('disabled', true)

  newIntervalButtonEl.removeAttribute("disabled")

  calculatedVars()

  }
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

  // reset values from global let variables
    intervalWaterIn = 0
    intervalWaterOut = 0
    intervalWaterNet = 0

    intervalElectrolytesIn = 0
    intervalElectrolytesOut = 0
    intervalSoluteNet = 0

    intervalNaClIn = 0
    intervalKClIn = 0

    urineOsm = 0
    urineSodium = 0
    urinePotassium = 0
    urineTonicity = 0


// manual values not yet here - not yet functional (TODO)
  intervalElectrolytesIn = intervalNaClIn + intervalKClIn
  // for now, just sodium chloride but later will include K
  
  // recall, the "interval specific therapies" will be added by clicking a specific button, so these will easily add to the total field with a separate function triggered that way

// NORMAL SALINE:
  let soluteAddedFromNormalSaline = 0
  let waterAddedFromNormalSaline = 0

  let rateNormalSaline = 0
  let totalIntervalNormalSaline = 0
   
  rateNormalSaline = Number(intakeNormalSalineEl.value)
    // console.log("normal saline rate: ", rateNormalSaline, " in context of total hours as fraction: ", cummulativeHours)
  totalIntervalNormalSaline = (rateNormalSaline * Number(cummulativeHours))
    // console.log("total normal saline: ", totalIntervalNormalSaline)
  
    soluteAddedFromNormalSaline = (totalIntervalNormalSaline * 0.308)
      // console.log("solute added from normal saline: ", soluteAddedFromNormalSaline)
    waterAddedFromNormalSaline = (totalIntervalNormalSaline * 0.001)

    intervalElectrolytesIn = (intervalElectrolytesIn + soluteAddedFromNormalSaline)
    intervalWaterIn = intervalWaterIn + waterAddedFromNormalSaline

 // D5W:
   let waterAddedFromD5W = 0
   let rateD5W = 0
   let totalIntervalD5W = 0

   rateD5W = Number(intakeD5WEl.value)
   totalIntervalD5W = (rateD5W * Number(cummulativeHours))
    waterAddedFromD5W = (totalIntervalD5W * 0.001)

    intervalWaterIn = intervalWaterIn + waterAddedFromD5W

// HYPERTONIC SALINE:
    let waterAddedFromHypertonicSaline = 0
    let soluteAddedFromHypertonicSaline = 0
    let rateHypertonicSaline = 0
    let totalIntervalHypertonicSaline = 0

    rateHypertonicSaline = Number(intakeHypertonicSalineEl.value)
    totalIntervalHypertonicSaline = (rateHypertonicSaline * Number(cummulativeHours))

      waterAddedFromHypertonicSaline = (totalIntervalHypertonicSaline * 0.001)
      soluteAddedFromHypertonicSaline = (totalIntervalHypertonicSaline * 1.026)

    intervalWaterIn = intervalWaterIn + waterAddedFromHypertonicSaline
    intervalElectrolytesIn = intervalElectrolytesIn + soluteAddedFromHypertonicSaline

// URINE:

  let waterLostFromUrine = 0
  let electrolytesLostFromUrine = 0
  let rateUrineOutput = 0
  let totalIntervalUrineOutput = 0

  rateUrineOutput = Number(outputUrineOutputEl.value)
    console.log("urine output rate: ", rateUrineOutput)

  totalIntervalUrineOutput = (rateUrineOutput * Number(cummulativeHours))

    waterLostFromUrine = (totalIntervalUrineOutput * 0.001)
    
    electrolytesLostFromUrine = ((Number(mostRecentUrineNaEl.value) + Number(mostRecentUrineKEl.value)) * 2 * waterLostFromUrine)
    // TODO: double check this: alternative below:   
          // intervalElectrolytesOut = (intervalWaterOut * urineTonicity)

    intervalWaterOut = intervalWaterOut + waterLostFromUrine
    intervalElectrolytesOut = intervalElectrolytesOut + electrolytesLostFromUrine

  // NETS:

  intervalSoluteNet = (intervalElectrolytesIn - intervalElectrolytesOut)
  intervalWaterNet = (intervalWaterIn - intervalWaterOut)

  // now for the ACUTE setting between intervals, we WILL keep IC solute constant (for now - until later when we add potassium... )

  postIntervalTBW = preIntervalTBW + intervalWaterNet
  postIntervalTBOsm = preIntervalTBOsm + intervalSoluteNet
  postIntervalTBOsmolality = postIntervalTBOsm / postIntervalTBW

  postIntervalSodium = (postIntervalTBOsmolality / 2)

    console.log("post interval osmolarity and sodium: ", postIntervalTBOsmolality, postIntervalSodium)
  
  postIntervalICOsm = preIntervalICOsm
  postIntervalICF = postIntervalICOsm / postIntervalTBOsmolality

  postIntervalECF = postIntervalTBW - postIntervalICF
  postIntervalECOsm = postIntervalTBOsmolality * postIntervalECF

  //

  renderPostIntervalValues()

    // final step, set the 'current time' to this post interval time for next interval:
    currentTime = postIntervalTimeEl.value
    console.log("re-logging currentTime: ", currentTime, typeof(currentTime))

    // and update footer!
    renderPreIntervalCummulativetimeEl.innerHTML = `Cummulative Hour(s): &nbsp;&nbsp; ${Number(currentHour).toFixed(0)}`

 }


 function updateClock () {

  if (!postIntervalTimeEl.value) {
    returnVar = true
    alert("Must specify post-interval time")
    return
  } {
    returnVar = false // must always reset if not made true
  }


  // before--cache current Time in case we have to re-run this function:

    let cacheCurrentTime = currentTime
    let cacheCurrentHourValue = Number(currentTime.slice(0, 2))
    let cacheCurrentMinuteValue = Number(currentTime.slice(3, 5))
    let cacheEndPointHourValue = Number((intervalEndTimeEl.value).slice(0, 2))
    let cacheEndPointMinuteValue = Number((intervalEndTimeEl.value).slice(3, 5))

  // first, update currentDay, currentHour, currentMin from pre-interval time:

  console.log("pre-interval aka current time: ", currentTime)
  console.log("pre-interval slice hour: ", currentTime.slice(0, 2))
  console.log("pre-interval slice min: ", currentTime.slice(3, 5))

  let currentHourValue = Number(currentTime.slice(0, 2))
  let currentMinuteValue = Number(currentTime.slice(3, 5))

  console.log("end point time given? ", (intervalEndTimeEl.value))

  let endPointHourValue = Number((intervalEndTimeEl.value).slice(0, 2))
  let endPointMinuteValue = Number((intervalEndTimeEl.value).slice(3, 5))

  console.log("end point hour and min? ", endPointHourValue, endPointMinuteValue)
  console.log(typeof(endPointHourValue))

  // cummulativeMins = 0

  let intervalRemainingMins = 0

    intervalRemainingMins = (60 - currentMinuteValue) // how many mins 'til next hour

  let intervalPastHourMins = 0

    intervalPastHourMins = endPointMinuteValue


  let intervalMinsFromHours = (((endPointHourValue) - (currentHourValue + 1)) * 60)
    console.log("interval mins from hours: ", intervalMinsFromHours)

  let intervalCummulativeMins = 0

    intervalCummulativeMins = (intervalMinsFromHours + intervalRemainingMins + endPointMinuteValue)

    console.log("interval cummulative minutes: ", intervalCummulativeMins)


  console.log("pre-interval aka current time: ", currentTime)
  console.log("pre-interval aka current day/hour/minute: ", currentDay, currentHour, currentMinute)


  // simpler case, if end point hour number is HIGHER (did not cross midmnight)

  console.log("values? ", currentHourValue, endPointHourValue)


  // case where we've crossed midnight (since end point hour is lower)
  if (endPointHourValue < currentHourValue) {
    console.log("crossed midnight")

      // since midnight crossed, we will update the "day counter"

      currentDay = (currentDay + 1)

      let hoursUntilMidnight = 0
        hoursUntilMidnight = (24 - currentHourValue)
        console.log("hours 'til midnight: ", hoursUntilMidnight, " = ", "24 - ", currentHourValue)

      intervalMinsFromHours = (((endPointHourValue) + (hoursUntilMidnight - 1)) * 60)
        console.log(endPointHourValue, " + (", hoursUntilMidnight, " - 1) = ",  intervalMinsFromHours)
        console.log("updated interval mins from hours: ", intervalMinsFromHours)

      intervalCummulativeMins = (intervalMinsFromHours + intervalRemainingMins + endPointMinuteValue)

        console.log("updated interval cummulative minutes: ", intervalCummulativeMins)

  }


  if (intervalCummulativeMins < 60) {
    returnVar = true
      // now reset those values to cached states:

      currentTime = cacheCurrentTime
      currentHourValue = cacheCurrentHourValue
      currentMinuteValue = cacheCurrentMinuteValue
      endPointHourValue = cacheEndPointHourValue
      endPointMinuteValue = cacheEndPointMinuteValue

      alert("Interval time duration must be at least one hour")
      return
  } else if (!postIntervalTimeEl.value) {
    returnVar = true
    alert("Must specify post-interval time")
    return
  } {
    returnVar = false // must always reset if not made true
  }

  // now, update current HOUR (first hour is hour zero, so once crosses into new hour that's hour 1... we ignore the remainder (extra mins after the hour!)

  cummulativeHours = Number(intervalCummulativeMins / 60).toFixed(2)
    console.log("cummulative hours to fixed 2? ", cummulativeHours)

    // now separate if over 10 to slice appropriately

    if (cummulativeHours < 10) {
      cummulativeHoursWithoutRemainder = Number(cummulativeHours.slice(0, 1))
      console.log("cummualative hours to fixed 1? ", cummulativeHoursWithoutRemainder)
    currentHour = Number(currentHour + cummulativeHoursWithoutRemainder)
      console.log(currentHour)
    } else {
    cummulativeHoursWithoutRemainder = Number(cummulativeHours.slice(0, 2))
      console.log("cummualative hours to fixed 1? ", cummulativeHoursWithoutRemainder)
    currentHour = Number(currentHour + cummulativeHoursWithoutRemainder)
      console.log(currentHour)
    }

  remainingMinutes = (Number(cummulativeHours.slice(-3)) * 60)
    console.log("remaining minutes: ", remainingMinutes)

  remainingMinutes = remainingMinutes.toFixed(0)

 }


 function renderPostIntervalValues () {

  renderPostIntervalTBWEl.innerHTML = `${postIntervalTBW.toFixed(1)} L`
  renderPostIntervalICFEl.innerHTML = `${postIntervalICF.toFixed(1)} L`
  renderPostIntervalECFEl.innerHTML = `${postIntervalECF.toFixed(1)} L`
  renderPostIntervalTBSoluteEl.innerHTML = `${postIntervalTBOsm.toFixed(0)} mOsm`
  renderPostIntervalICSoluteEl.innerHTML = `${postIntervalICOsm.toFixed(0)} mOsm`
  renderPostIntervalECSoluteEl.innerHTML = `${postIntervalECOsm.toFixed(0)} mOsm`

  renderIntervalDuration.innerHTML = `${cummulativeHoursWithoutRemainder} hr ${remainingMinutes} min`

  renderPostIntervalEndTimeEl.innerHTML = `${postIntervalTimeEl.value} (Day ${currentDay}, Hr ${currentHour})`

  renderPostIntervalSodiumEl.innerHTML = `${postIntervalSodium.toFixed(0)} mEq/L`
  renderPostIntervalPotassiumEl.innerHTML = `${postIntervalPotassium.toFixed(0)} mEq/L`

 }

 function clearAllPostIntervalValues() {
  renderPostIntervalTBWEl.innerHTML = ``
  renderPostIntervalICFEl.innerHTML = ``
  renderPostIntervalECFEl.innerHTML = ``
  renderPostIntervalTBSoluteEl.innerHTML = ``
  renderPostIntervalICSoluteEl.innerHTML = ``
  renderPostIntervalECSoluteEl.innerHTML = ``
  renderIntervalDuration.innerHTML = ``
  renderPostIntervalEndTimeEl.innerHTML = ``
  renderPostIntervalSodiumEl.innerHTML = ``
  renderPostIntervalPotassiumEl.innerHTML = ``
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

  if (!timeZeroEl.value) {
    returnVar = true
    alert("Must specify initial time")
    return
  } else if (!mostRecentSodiumEl.value) {
    returnVar = true
    alert("Must specify initial serum sodium")
    return
  } else {
    returnVar = false // must always reset if not made true
    console.log("no issues with values; run initial stat values fxn")
  }

if (returnVar === false) {

  setInitialStateButtonEl.setAttribute('disabled', true);
  mostRecentSodiumEl.setAttribute('disabled', true);
  timeZeroEl.setAttribute('disabled', true);
  setPreIntervalButtonEl.removeAttribute('disabled')

  mostRecentUrineOsmEl.removeAttribute('disabled')
  mostRecentUrineNaEl.removeAttribute('disabled')
  mostRecentUrineKEl.removeAttribute('disabled')

  if (preIntervalWeightEl.value <= 0) {
      console.log("pre-interval weight not given; SIADH case assumed")
    // if SIADH true and NO weight given; assuming "chronic":
      // in this case, we have to anticipate extent of water excess and solute loss
      // will assume ECW is unchanged from ideal, since "euvolemic"
      // will follow assumption that new TBW is only 50% greater than would be expected if we had ONLY excess water in this case of SIADH:

      // hypothetic situation first, where no TBOsm are lost:

        // if first interval, this uses the initial sodium; else, uses inputted value:
        // TODO: once beyond SIADH, will have to carry forward this if/else stmt

        if (intervalNumber === 1) {
        preIntervalSodium = Number(mostRecentSodiumEl.value)
          } else {
            preIntervalSodium = Number(preIntervalSodiumEl.value)
          }

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


  timeZero = timeZeroEl.value

  currentTime = timeZeroEl.value
  currentHour = 0
  currentDay = 0

  renderInitialStateValues()
 }
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

    setPreIntervalButtonEl.setAttribute("disabled", true)

    mostRecentUrineOsmEl.setAttribute('disabled', true)
    mostRecentUrineNaEl.setAttribute('disabled', true)
    mostRecentUrineKEl.setAttribute('disabled', true)

    preIntervalSodiumEl.setAttribute('disabled', true)

    // activate next fields:

    postIntervalTimeEl.removeAttribute('disabled')
    intakeD5WEl.removeAttribute('disabled')
    intakeHypertonicSalineEl.removeAttribute('disabled')
    intakeNormalSalineEl.removeAttribute('disabled')
    intakeD5WEl.removeAttribute('disabled')

    outputUrineOutputEl.removeAttribute('disabled')

    intervalButtonEl.removeAttribute('disabled')


    if (!preIntervalSodiumEl.value) {
      // in this case, assumes you will just use predicted value
      preIntervalSodium = postIntervalSodium
      console.log("assume post-interval sodium is pre-interval sodium: ", preIntervalSodium, " = ", postIntervalSodium)
    } else {
      preIntervalSodium = Number(preIntervalSodiumEl.value)
      console.log("manual preinterval sodium: ", preIntervalSodium)
    }


  // holding off on potassium for now, but would be similar
     console.log("here is the preinterval sodium from that function: ", preIntervalSodium)

      // urine tonicity:

      let urineElectrolytes = Number(mostRecentUrineNaEl.value) + Number(mostRecentUrineKEl.value)
      console.log("urine electrolytes total: ", urineElectrolytes)

   urineTonicity = (urineElectrolytes / preIntervalSodium) * 100

   preIntervalUrineTonicity = urineTonicity

   renderPreIntervalValues()

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

 

 function clearAllPreIntervalValues () {

  renderPreIntervalTBWEl.innerHTML = ``
  renderPreIntervalICFEl.innerHTML = ``
  renderPreIntervalECFEl.innerHTML = ``
  renderPreIntervalTBSoluteEl.innerHTML = ``
  renderPreIntervalICSoluteEl.innerHTML = ``
  renderPreIntervalECSoluteEl.innerHTML = ``
  renderPreIntervalSodiumEl.innerHTML = ``
  renderPreIntervalPotassiumEl.innerHTML = ``
  renderPreIntervalUrineTonicityEl.innerHTML = ``

  renderCurrentTimeEl.innerHTML = `${currentTime} (Day ${currentDay}, Hr ${currentHour})`

 }

 



