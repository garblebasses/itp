## JAVASCRIPT FAHRENHEIT TO CELSIUS
- I created a javascript program that lets the user input a certain degree of fahrenheit, and the program will convert it to celsius
### THE PROCESS
- right off the bat I wanted to do the harder option of having a prompt pop up to put in any number you want, and for it to be able to say 'that's not right.........' when the user didn't input a number
- I remembered in [chapter 2](https://eloquentjavascript.net/02_program_structure.html) of eloquent javascript an example program that does the exact thing I just described:
`let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}`
- it would've taken me probably 70% less time if I just copy pasted the code and changed the function of the binding to fit this assignment but I didn't because I wanted to try typing it out myself
- this was inefficient because of many roadblocks I ran into (but easily figured out), like:
	- forgetting to specify the type of string prompted by `let f = prompt("enter a number degree of fahrenheit");` as a number, fixed by looking back at the code I'm copying off of and just copying what it said
	- before I figured the above out, I tried checking for if the string entered was a number or not with `if f = !NaN`. this didn't work so then I tried `if (!f.isNaN(f))` because I initially thought Number was a binding related to the binding theNumber in the code I'm copying. I also fixed this by looking back and realizing "oh right, Number"
	- at some point while trying to format the output `console.log(f + "° fahrenheit = " + c + "° celsius");` I must've missed a quotation mark or + somewhere, because I was getting some error about missing an end parenthesis. I still honestly don't really know why it was saying the parentheses surrounding the output message weren't linked together but I couldn't find the missing whatever and just redid the line from scratch. 'debugged'
	- completely my fault but writing `c = (f - 32) 5 / 9` didn't do the equation because I forgot you wrote the equation on the github in normal math not javascript math, and I didn't recognize that because I don't know the fahrenheit to celsius equation off the top of my head as a dumb dumb american. therefore, I googled the equation and just used [this calculator site](https://www.calculatorsoup.com/calculators/conversions/fahrenheit-to-celsius.php) to copy the equation off of, and also to check the program was doing math correctly. yes I did realize my initial error of misinterpreting normal math syntax for javascript math syntax as I was typing this
- other than those small chokes, the rest was smooth enough as it is quite literally the same framework as the code from the text I referenced above