let f = Number(prompt("enter a number degree of fahrenheit"));
if (!Number.isNaN(f)) {
  let c = (f - 32) / (9 / 5);
  console.log(f + "° fahrenheit = " + c + "° celsius");
  } else {
  console.log("that's NOT a number")
  }