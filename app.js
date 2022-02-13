// Write a simple function to iterate through the array and console.log to test the results.

// Place each array element in new Set() function.  Assign this to a variable.  Console.log the variable.  

function unreapeatedArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i])

        let unrepeated = new Set(arr[i])

        console.log(unrepeated)
    }
}
unreapeatedArray(["1223", "334455", "667788", "7798956443211"])


