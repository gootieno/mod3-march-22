# Follow Up Questions

    This is a file that will hold mod 3 week 7 questions that may have been asked and I needed to look into it more.

# Monday w7D1

    Q: How does the scope attribute work for tables?
    A: The scope attribute is tricky because you don't see any notable changes in the browser. Follow this MDN dock for a quick exercise:
    Practice https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th

    Task: Change scope from col to row in the "Try it" section. How does our table change when we specify the scope of "Player" to row? Now remove the scope all together and see what happens. Really nothing. The blue background that is styled in the css page under a scope attribute disappears because we are not styling a th with a scope attribute anymore. :) More on this later!

# Tuesday W7D2

    Incomplete Sandbox:
    In the Box Model and Positioning Demo main css has the blue box styled starting at line 167. What I was trying to showcase was how the elements respected each others space based on the different positioning.

    If you comment out position relative and comment in position absolute, you will see that the other two container scooted over to the left. If you revert the styling with position relative you will see the gray boxes maintain their ground.

# Wednesday W7D3

## What ever happened to media speech?

    Check this out on MDN --> https://developer.mozilla.org/en-US/docs/Web/CSS/@media <--
    If you click on Media Queries Level 4, MDN will open a page with way more information than you need. **_Whats important is about 1/4th down the screen at section 2.3_**. You can see "all" "print" and "screen" defined as available media types and below that depreciated types. Speech must have made the list recently.

## What resources will be allowed on the assessment?

- AppAcademy Open
- MDN
- A whiteboard or paper to work out problems/code, but they must be within camera range
- VScode or a console for testing and experimentation during any part of the test, including multiple-choice questions
- Node
- Previously written code you wrote yourself
- Except for code from previous assessment submissions
- Comments within code
- If there are comments in your code about your specific code and about what your code is doing, that is appropriate. If your comments are about concepts and based on the readings, then that counts as notes. Those would not be appropriate.

## You MAY NOT use the following resources during the assessment:

- Slack
- Discord
- Google / other search engines
- StackOverflow, etc.
- GeeksForGeeks, or any tutorial site
- Notes
- Code from previous assessment submissions

## Why should we put the transition property on the selected element and not only in the psuedo-class selector?

    From our demo with the rocket, Paste the code below and see what happens to our rocket when we hover and hover off after the transition.

```css
.rocket_svg {
  height: 200px;
  width: auto;
  margin-left: 300px;
  /* Your code here */
  /* transition: transform 2s; */
}

.rocket_svg:hover {
  /* border: 1px solid red; */
  transition: transform 2s;

  transform: rotate(250deg);
}
```

    Now comment out the transition above the transform property and comment in the .rocket_svg with only a class selector

    Repeat the hover test in the browser :)

    See the difference? The transition property listens in on two states of an element. 

    Now, if what your styling doesn't have a cool transition back (like the rocket gif) then its okay. Code  what is expected but for a real transition effect we want to be able to have it transition back smoothly as well :) 

    Happy coding! 