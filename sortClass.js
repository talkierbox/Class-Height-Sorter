/*
    Class Height Sorter
    Copyright (C) 2020 Hershraj N.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/


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
