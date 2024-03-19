// Write Prime numbers from 1 to 100
// Prime numbers are numbers that are only divisible by 1 and itself


for (let num = 1; num <= 100; num++) {
    let isPrime = true;

// avoid 1 and itself
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;

            break;
        }
    }
// if the number is prime, print it
    if(isPrime) {
        console.log(num);
    }
}
   