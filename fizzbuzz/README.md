## fizzbuzz assignment
I did this assignment in class, I actually decided to think on the solution for this while playing a game on my laptop because I needed to collect some daily rewards, and I remembered the ternary operator `a ? b : c` which I learned from [chapter 1 of eloquent javascript](https://eloquentjavascript.net/01_values.html).

I thought of it like a 2x2 true/false table, since there's only 4 possible outputs when it logs a number:

![2 by 2 table showing that if a given number is divisible by both 3 and 5, the output will be fizzbuzz. if the number is divisible by 3 or 5 it will be fizz or buzz respectively. if the number is divisible by neither 3 or 5, it will just output the number.](https://github.com/garblebasses/itp/blob/main/fizzbuzz/fizzbuzz%20table.png)

it's actually really straightforward, it checks if the given number is divisible by 3 or not, then in both cases also checks if the number is divisible by 5, and it gets its corresponding output based on what is true and what is false.

since there's no overlap between the 4 possible outputs, the order in which the code checks these conditions is arbitrary [phew]
### the problems that came up
two problems came up:

1. when I was setting up the loop, I interpreted the condition that defines when to keep looping as a condition to define when to STOP looping, causing me to use the wrong crocodile symbol `i >= 100` instead of `i <= 100`, and causing there to be no output at all when I tried running the code
2. when I was setting up the outputs for fizzbuzz and fizz and buzz, I forgot the quotations around them to indicate that they're strings and not bindings

both of these issues were solved by simply relooking over the code