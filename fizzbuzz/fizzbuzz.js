for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i % 5 === 0 ? "FizzBuzz" : "Fizz");
  } else {
    console.log(i % 5 === 0 ? "Buzz" : i)
  }
}