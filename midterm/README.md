## MIDTERM
I created smiley face tiles in p5.js!!!!

### Too Many Problems Too Many Of Them Stop It
- I actually did phases 1-3 [sort of] in class before reading the actual guidelines of the midterm
- phases 1 & 2 were obviously straightforward enough
- phase 3 was where the problems started occuring, I technically was able to do it in class but I looked over the [actual guidelines](https://github.com/rdwrome/261fa25/tree/main/06Midterm) and realized I did it in an entirely different way:
	- no use of `transform()`, `push()`, and `pop()` because they weren't covered in the lecture, just on the guidelines
	- this meant I had to have the bindings within the coordinates of the `draw()` function, e.g. things like `ellipse(x - 17, y - 10, 25, 25);`. and then that had fucked up x and y coordinates to be not nice even factors of the canvas size when I actually had to call the function because of the origin still being 0, 0, causing things like `VERYHAPPY(25, 25, 1)`
	- I also forgot the entire scaling variable so I had to add it along with the other things above that I forgot, pretty easy when the code is literally just laid out on the guidelines
- phase 4 I did not attempt during class, and it definitely was a long process trying to make it work
- I was very lost and also was doing this the weekend before the midterm is due, meaning I definitely did NOT retain for loops very well after not thinking about them for over a week
- I ended up just straight up googling "p5 tiling" and came across [this file](https://editor.p5js.org/ericalimsongyi/sketches/lggQwPZ0D) by user ericalimsongyi, I basically took a look at it, tried understanding its workflow and ultimately just kinda copy pasted it in
- keep in mind, this file isn't just a 1:1 perfect model to Berklee College of Music LMCS-261 Rachel Rome Midterm Project in the way that I can't just paste pieces of it into the project and be done
	- for example, there's no scaling included in it
	- actually that might be the only major difference
	- I mean there's also the fact it had the capacity for a different number between the amount of columns and rows, I had to compress that down into just one parameter
	- okay it really felt like a lot more than just one difference because it took me so long to figure out what parts I actually need to paste into my code, not to mention how to implement scaling into it
	- [sorry, this markdown file is very train-of-thought-y]

### HEADER IN A STRANGE SPACE PACING WISE!!! HOW DID I IMPLEMENT CODE I FOUND FROM GOOGLING
- one of the easiest things I did first was compress down the `cellsX` and `cellsY` variables into just `tiles` in every spot they appeared
- I had to figure out `width` and `height` call to the canvas size, which is why they are divided by `tiles` to figure out how far to space the iterations apart
- I actually got it working [kinda, I will explain about 2 lines down from here] before implementing scaling in, but obviously I needed to add it
- to implement scaling, I just added in the line defining `s` as `4/tiles` and it's 4 because that's just the parameters from phase 3 I built this off of, the canvas is 400x400 and if I try to think about it harder my brain starts to hurt
- but this first attempt had one flaw in where now when I tried to output it altogether, I found something strage:

![output of my code of 4x4 happy face tiles, the tiles are offset by 1 pixel per loop making the last row and column cut off](https://github.com/garblebasses/itp/blob/main/midterm/veryhappy4.png)

- the happy faces were printing out slightly separated, and I had no idea why; it actually took me like 30 minutes to think this through. also yes this matters because while it kind of gets the job done it's supposed to be full tiles, and if I set it to a high number of tiles it would be very apparent and not the full whole number amount of tiles that were specified (below is 32x32)

![output of 32x32 happy face tiles, the tiles are offset by 1 pixel per loop making the last row and column cut off](https://github.com/garblebasses/itp/blob/main/midterm/veryhappy32.png)

- as I said it took me 30 minutes, but I realized I left a `translate(x, y);` in defining the `VERYHAPPY` function. the for loop I copy pasted in also has a `translate(x, y);` in the form of `translate(x*w, y*h);` meaning it would further offset the following tiles by (1, 1) per loop after already offsetting the origin in the for loop.
- I'm actually not sure how to clearly put that into words, sorry for the weird maybe incorrect explanation, all I know is that my thought process was correct because after removing the `translate(x, y);` in the `VERYHAPPY` function, there was no more offsetting and no more ugly cutoff. hooray! code complete!