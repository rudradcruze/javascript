function arraySum (number) {
    
    let sum = 0;
    for(let i=0; i<number.length; i++)
        sum += number[i];

    return sum;
}

const array = [10,20,30,40,50,60];

const result = arraySum(array);

console.log(result);
