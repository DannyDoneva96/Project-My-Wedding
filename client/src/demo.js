function calculateBottom3Even(arr) {

    let result = []

    do  {

        let smallestNumber = Math.min(...arr)

        let index = arr.indexOf(smallestNumber)
        arr.splice(index, 1)

        if(smallestNumber % 2 == 0) {


        result.push(smallestNumber)

    }

} while (!result.length == 3)

    console.log(result)
        
    
    }


calculateBottom3Even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])