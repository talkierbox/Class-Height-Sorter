let classData = require(`./classHeights.json`) // Require the data JSON file


// Initialize Arrays to be sorted
let maleHeightArray = []
let femaleHeightArray = []


// Add all the female/males to their respective arrays
for(var i in classData.female){
    femaleHeightArray.push(classData.female[i])    
}
for(var i in classData.male){
    maleHeightArray.push(classData.male[i])    
}


// Sort from greatest to smallest
function sortNumber(a, b) {
    return b - a;
  }

// Sort from smallest to greatest
  function sortDown(a, b) {
    return a - b;
  }
  
  
  // Actually sort the arrays
  maleHeightArray.sort(sortNumber);
  femaleHeightArray.sort(sortNumber)

// A function to get a key from an object by its value
  function getKeyByValue(object, value) { 
    for (var prop in object) { 
        if (object.hasOwnProperty(prop)) { 
            if (object[prop] === value) 
            return prop; 
        } 
    } 
} 

// A function to get the average of an array
function getAvg(arrToAverage) {
    const total = arrToAverage.reduce((acc, c) => acc + c, 0);
    return total / arrToAverage.length;
  }
  



  let maleAverage = getAvg(maleHeightArray)
  let femaleAverage = getAvg(femaleHeightArray)


// Log out all the info into the console
console.log(`[MALE] Amount of men: ` + parseInt(maleHeightArray.length + 1))
console.log(`[FEMALE] Amount of women: ` + parseInt(femaleHeightArray.length + 1))

console.log(`[MALE] Male Average: ` + maleAverage)
console.log(`[FEMALE] Female Average ` + femaleAverage)


console.log(`[MALE] Tallest Man: ` + getKeyByValue(classData.male, maleHeightArray[0]) + ` || Their height: ${maleHeightArray[0]}`)
console.log(`[MALE] Shortest Man: ` + getKeyByValue(classData.male, maleHeightArray[maleHeightArray.length - 1]) + ` || Their height: ${maleHeightArray[maleHeightArray.length - 1]}`)
console.log(`[FEMALE] Tallest Woman: ` + getKeyByValue(classData.female, femaleHeightArray[0])  + ` || Their height: ${femaleHeightArray[0]}`)
console.log(`[FEMALE] Shortest Woman: ` + getKeyByValue(classData.female, femaleHeightArray[femaleHeightArray.length - 1])  + ` || Their height: ${femaleHeightArray[femaleHeightArray.length - 1]}`)

console.log(`[FEMALE] Female Range: ${femaleHeightArray[femaleHeightArray.length - 1]}` + `-` + `${femaleHeightArray[0]}`)
console.log(`[MALE] Male Range: ${maleHeightArray[maleHeightArray.length - 1]}` + `-` + `${maleHeightArray[0]}`)

console.log(`[MALE] Full Male Array (Lowest => Highest): ${maleHeightArray.sort(sortDown)}`)
console.log(`[MALE] Full Female Array (Lowest => Highest): ${femaleHeightArray.sort(sortDown)}`)