# <span style="color: lightblue;"> Jorge Bucio's Super Quiz </span>

> Super Quiz is an interactive, animated front-end quiz application configured to test your coding fundamentals. Built natively with HTML, CSS, Bootstrap, jQuery, and Anime.js, it features local storage mechanisms evaluating and cataloging real-time trivia data.

## <span style="color: orange;"> Preface </span>

I want to preface this by saying that, the RI team has been great this whole time. I have learned a lot from them,
and they have been instrumental in the making of this project with the things I have learned from them this past 19 weeks.

I want to thank all of TLM for the oportunity to be part of this experience. It has been challenging, but pleasant at the same time all the way through.


## <span style="color: orange;"> Project background </span>

By this point I had covered the basics of Javascript, things like `DOM manipulation`, `objects`, and `functions.` This project posed a challenge in a way that I was not expecting, I had to really ponder about how to tackle each item of the list, while making code that would be easy to understand, as well as be maintainable for the future, and contain all of the features I wanted to have.

### <span style="color: orange;"> For this project I employed all of the things I have learned thus far. </span>

- HTML mark up is always at the top of the list for me.
- CSS @key frames is used to animate the title at the intro of the page.
- Transitions are my go to for smooth looking animations with buttons.
- Animate is my favorite new toy since I discovered how to implement it to my work.
- I used session storage to take users scores and store them to campare scores with future scores.
- Local storage was used to store score data of the whole time spent playing.
- Local storage was also used to store questions added by users to save and use them in future playthroughs.


## <span style="color: orange;"> Technologies used: </span>

- HTML.
- CSS.
- Bootstrap.
- jQuery.
- Animate JS.

## <span style="color: orange;"> How to use the front end as a user: </span>

<summary><span style="color: green; font-size: 1.4rem;">Introduction</span>
  - At first, the user will encounter the <span style="color: orange; font-size: 1.2rem;"><q> Super Quiz </q></span> name with an animation as a welcome of sorts with a button displaying <span style="color: orange; font-size: 1.2rem;"><q> jump in </q></span> as a call to action. </summary><br>

<details>
<summary><span style="color: lightseagreen;"> First Stage </span>  </summary>

![Example](./readMeAssets/intro.png)

- Clicking the `jump in` button will take users to next stage of the game.

</details>
<br>
<details>
<summary><span style="color: lightseagreen;"> Second Stage </span> </summary>

![example](./readMeAssets/second.png)

- This stage of the game displays `instructions`, an `input` field for the user to write their `name` to make the game more personable. It also contains a `button` for the user to add their own `question` to the game.

</details>
<br>
<details>
<summary><span style="color: lightseagreen;"> Add Question </span> </summary>

![example](./readMeAssets/addQuestion.png)

 - This section displays `intructions` on how to add a `question` for the user, with all the `required` fields for the app to work the way it was intended to. Then the user will be taken back to the previous stage where they can `begin` the `game`, either with or without inputing their name.

</details>
<br>
<details>
<summary><span style="color: lightseagreen;"> Game Play </span>  </summary>

![example](./readMeAssets/gamePlay.png)

- User will be presented with a `scoreboard`, a `question counter` that keeps track of what question their on, and how far they have to go to finish. A `question` and for posible `answers` to select from.

</details>
<br>
<details>
<summary><span style="color: lightseagreen;"> User Selection </span>  </summary>

![example](./readMeAssets/correct.png)

- If user answers `correctly`, a banner with `CORRECT!!` will display on screen, the `score` will be incremented, and a `next` button will appear for them to click and move on to the next question.
<hr>

![example](./readMeAssets/incorrect.png)

- If the user answers `incorrectly`, the same thing that happened with the correct answers will happen, but a message of `INCORRECT` will be displayed instead, and the score will not be incremented.

</details>
<br>
<details>
<summary><span style="color: lightseagreen;"> At the End </span> </summary>

![example](./readMeAssets/total.png)

- User will be presented with a `percentage` total of what their `score` was. Along with some `words` of `encouragement`.
<hr>

![example](./readMeAssets/restart.png)

- Then the User will have access to a `restart` button to go back to the instructions part of the `Application`.
<hr>

![example](./readMeAssets/modal.png)

- A `restart` will pop up asking user if they would like to add their own `question`, but user can simply skip close this modal by `clicking` the `skip` button. The `modal` will close and the second stage of the `Application` will be revealed to them once again.

</details>
<br>
<details>
<summary><span style="color: lightseagreen;"> If User typed their name in the Input field </span> </summary>

![example](./readMeAssets/totalWithUser.png)

- User will be presented with a `percentage` total of what their `score` was. Along with some `words` of `encouragement` with their `name` displayed on screen.
<hr>

![example](./readMeAssets/compareScore.png)

- User will be presented with a `percentage` total of what their `score` was. Along with some `words` of `encouragement` and telling them if they improved, `furthering` encouragement.

</details>


## <span style="color: orange;"> Project styles </span>

For this project I broke the convention of using four colors. Reason being that they all compliment eachother and add a modern feel. Green evokes success and a feeling of moving forward since its used for stoplights in most places. Red was used to visually let user know they chose the wrong answer. I used variables for colors streamline the process of changing color in the future.

### <span style="color: orange;"> Colors used for this project. </span>

- Black: #000
- Beige: #f4f4db
- Green: #008000
- Purple: #800080
- Lightseagreen: #20b2aa
- Lightblue: #add8e6
- Red: #ff0000
- Darkred: #8b0000
- Orange: #ffa500
- Grey: #808080
- Darkgrey: #a9a9a9
- Charcoal: #333

### <span style="color: orange;"> Fonts used for this project. </span>

- Fantasy.
- Georgia.
