/* Welcome to My Page!! I'm particularly proud of this project because of the
way it all came together and all the milestones for features I was able to achieve
like the local storage storing questions to use in subsequent playthroughs.  */

const id = (id) => document.getElementById(id);

let user;
let tempStorage = []; // Temporary storage to create a cache of questions to avoid repetition.
let questions = [...codingQ]; // Array to store questions, initializing with coding questions directly.
const jumpInContainer = id( 'jumpIn' ); // Variable to manipulate the instructions text and buttons at the beginning.
const beginQuizContainer = id('beginQuiz'); // Variable to manipulate the instructions text and buttons at the beginning.
const nextBtn = id('nextBtn'); // variable for the next button.
const restartBtn = id('restart'); // variable for the restart button.
const qtnDisplay = id('qtnScreen'); // variable for the question text to be displayed in.
const answerDisplay = id('answers'); // variable for the answers' text to be displayed in.
const qtnCntr = id('qtnCntr'); // variable to display on screen and keep track of questions out of 10 count.
const score = id('score'); // variable to display user score on screen, also out of 10 count.
let tally = 0; // Initial number for score to be displayed. Its set up this in order to reset in the future back to 0 value for any subsequent playthroughs.
score.innerHTML = `${tally}`; // User score increments on screen as questions get answered correctly.
let counter = 0; // Variable to keep track of questions to only do 10 at a time.
qtnCntr.innerHTML = `Question ${counter + 1} out of 10`; // variable to display counter on screen.

function addUser(event) {
  if (id('name').value === '') {
    return;
  } else {
     user = {
      name: id('name').value.toUpperCase(),
      score: []
    };
  newUser = sessionStorage.setItem('user', JSON.stringify(user));
  }
  id('name').value = '';
  return user;
}





function eventListeners() {
  id('begin').addEventListener('click', (e) => {
    id('footer').classList.add('hide');
    beginQuiz.classList.add('hide'); // removes instructions and add question text as well as buttons from screen.
    restartBtn.classList.add('hide'); // ensures restart button doesn't appear on screen until time is right.
    nextBtn.classList.add('hide'); // ensures nextBtn button doesn't appear on screen until time is right.
    $('#quiz').slideDown('slow'); // uses jQuery to animate quiz to slide down on screen and display score, question and answers.
    getQuestions();
    randomizedQtn(questions); // calls function to start process to get question and answers to show the user.
  });

  id('nextBtn').addEventListener('click', () => {
    if (counter < 10) { // if question counter is below or equal to 10, the next block of code will run.
      restartBtn.classList.add('hide'); // ensures restart button doesn't appear on screen until time is right.
      nextBtn.classList.add('hide'); // removes next button so that only question and answers are on screen until user makes a selection.
      const title = id('title'); // target message displayed to user, whether it was wrong or right.
      title.remove(); // removes it from screen.
      randomizedQtn(questions); // calls function to request the next question.
    } else { // if the counter is at 10 already, the following code executes.
      endGame(); // calls function for ending message and animations.
      // nextBtn.setAttribute();
      nextBtn.classList.add('hide'); // removes next button from screen.
      setTimeout(() => { // timer.
        $('#restart').slideDown('slow'); // animation slides down restart button after end game animations finalize.
      }, 7200);
    }
  });

  id('restart').addEventListener('click', () => { // if user clicks on restart button, next block of code executes.
    id('footer').classList.remove('hide');
    beginQuiz.classList.remove('hide'); // instructions, add question text and buttons all come back.
    quiz.classList.add('hide'); // removes quiz from screen.
    counter = 0; // resets counter back to default.
    tally = 0; // resets score back to default.
    qtnCntr.innerHTML = `Question 1 out of 10`; // resets question counter to default.
    score.innerHTML = 0; // resets score to default.
    $('#quiz').slideUp(0); // ensures the quiz won't come back until we need it to.
    $('#restart').slideUp(0); // ensures the restart button won't come back until we need it to.
  });

  id('addQnA').addEventListener('click', () => { // when user clicks the click here button, next block of code runs.
    beginQuiz.classList.add('hide'); // hides instructions, add question text and buttons.
    addQtn.classList.remove('hide'); // shows form for the user to add their question.
    // id('newQ').focus(); // puts focus on the first input of the form so the user doesn't have to, and they can start typing right away.
  });

  id('submitBtn').addEventListener('click', () => { // when user clicks submit button, next block of code runs.
    if (id('newQ').value === '' || id('posibleAnsOne').value === '' || id('posibleAnsTwo').value === '' || id('posibleAnsThree').value === '' || id('posibleAnsFour').value === '' || id('correctAnswer').value === '') {
      // if user didn't fill out the input fields, it justs sends them back to the start.

      beginQuiz.classList.remove('hide'); // displays instructions, add question text and buttons.
      addQtn.classList.add('hide'); // hides form, their text, and button.
    } else { // if user did fill out the fields, next block of code runs.
      beginQuiz.classList.remove('hide'); // displays instructions, add question text and buttons.
      addQtn.classList.add('hide'); // hides form, their text, and button.
      addNewQtn(); // calls function to add new question.
    }
  });

  id('jumpInBtn').addEventListener('click', () => {
    jumpIn.classList.add('hide');
    beginQuiz.classList.remove('hide');
    id('footer').classList.remove('hide');
    // id('name').focus();
  });
}

function getQuestions() {
  const indices = generateIndices(10);
  tempStorage = [];
  for (let index of indices) {
    tempStorage.push(questions[index]);
  }
}

function generateIndices(numQuestions) {
  const indices = [];
  let index;
  while (indices.length <= numQuestions) {
    do {
      index = Math.floor(Math.random() * questions.length);
    } while (indices.includes(index));
    indices.push(index);
  }
  return indices;
}

/* function picks a question at random, takes the answers of that question and sends them on for further processing later. */
function randomizedQtn(array) {
  const randomQtn = tempStorage[counter++]; // pick random question out of the array of questions we have.

  setTimeout(() => { // timer.
    const qtn = randomQtn.question; // separates question from answers.
    const displayQtn = document.createElement('h3'); // creates h3 element to add question text to.
    displayQtn.setAttribute('id', 'qtn'); // sets id for use later on.
    displayQtn.className = 'my-4'; // bootstrap class for styling.
    displayQtn.innerHTML = `${qtn}`; // add question text to h3..
    qtnDisplay.appendChild(displayQtn); // appends h3 to div on html to display on screen.
    displayAns(randomQtn); // calls next function and sends current question data with it.
    tempStorage.push(randomQtn); // stores current question for future comparison ot avoid repetition.
    qtnCntr.innerHTML = `Question ${counter} out of 10`; // displays progress on screen.
  }, 1000); // timer interval in milliseconds.
}

/* function takes current question and separates answers from correct answer, to display the answers on screen. */
function displayAns(randomQtn) {
  const randomAns = randomQtn.answers; // variable takes answers only from question.
  const correctAns = randomQtn.correctAnswer; // variable isolates the correct answer from the rest of the answers.
  const shuffled = [...randomAns]; // copy, don’t mutate original
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}

  setTimeout(() => { // timer
    shuffled.forEach((answer) => { // forEach takes every question individually.
      if (answer === correctAns) { // if the answer is the correct answer to the current question executes the following code.
        const li = document.createElement('button'); // creates li to add answer to.
        li.setAttribute('id', 'correctAns'); // add id for later use with event listener.
        li.className = 'm-4 answer'; // bootstrap and css classes for styling.
        li.innerHTML = `~ ${answer} ~`; // adds answer text to li.
        answerDisplay.appendChild(li); // adds li to proper container to display answer on screen.
      } else { // for the other answers it executes the following code.
        const li = document.createElement('button'); // creates li to add each answer to.
        li.setAttribute('id', 'wrongAns'); // add id for later use with event listener.
        li.className = 'm-4 answer'; // bootstrap and css classes for styling, and wrongAns class for identification when comparing user's choice through event listener.
        li.innerHTML = `~ ${answer} ~`; // adds answer text to li.
        answerDisplay.appendChild(li); // adds li to proper container to display answer on screen.
      }
    });

    document.querySelectorAll('.answer').forEach(btn => { // Event Listener to check if answer was right or wrong.
      btn.addEventListener('click', event => { // Applies to all possible answers.
        nextBtn.classList.remove('hide'); // shows next button to keep moving forward.
        rightWrongAns(event, correctAns); // calls function for right, wrong answer.
      });
    })
  }, 1000);
  return;
}

/* function executes after the user answers and checks if the question was
    answered correctly, then it executes the appropriate block of code. */
function rightWrongAns(event,correctAns) {

  if (event.target.id === 'correctAns') {
    const li = document.querySelectorAll('.answer'); // targets all answers on screen.
    li.forEach(item => item.remove()); // removes them from screen.

    const qtn = id('qtn'); // targets question.
    qtn.remove(); // removes question also.

    const correct = document.createElement('h2'); // creates element for message.
    correct.setAttribute('id', 'title'); // adds id for manipulation later.
    correct.className = 'display-2 text-center correct'; // bootstrap and css classes for styling.
    correct.innerHTML = '~ CorrecT!! ~'; // message to user.
    answerDisplay.appendChild(correct); // message added to proper container.

    tally++; // score is incremented by one.
    score.innerHTML = `${tally} out of 10`; // updates score on screen.
    return;
  }

  if (event.target.id === 'wrongAns') {
    const li = document.querySelectorAll('.answer'); // targets all answers on screen.
    li.forEach(item => item.remove()); // removes them from screen.
    const qtn = id('qtn'); // targets question.
    qtn.remove(); // removes question also.
    const wrong = document.createElement('h2'); // creates element for message.
    wrong.setAttribute('id', 'title'); // adds id for manipulation later.
    wrong.className = 'display-2 text-center wrong'; // bootstrap and css classes for styling.
    wrong.innerHTML = `~ IncorrecT ~ <br/> <hr/> <h5 class=''>Answer: ${correctAns}</h5>`; // message to user.
    answerDisplay.appendChild(wrong); // updates score on screen.
    return;
  }
}

/* function executes once the question count has reached 10. */
function endGame() {
  const li = document.querySelectorAll('.answer'); // targets all answers on screen.
  li.forEach(item => item.remove()); // removes them from screen.
  const title = id('title'); // targets question.
  title.remove(); // removes question also.
  const goodBye = document.createElement('div'); // creates element for message.
  goodBye.setAttribute('id', 'farewell'); // adds id for manipulation later.
  goodBye.className = 'text-center my-5 finalScore'; // bootstrap and css classes for styling.
  let finalScore = parseInt(score.innerHTML) / 10 * 100; // takes score and creates a percentage grade.

  if (user) {
   JSON.parse(sessionStorage.getItem('user'));
   user.score.push(finalScore);
   localStorage.setItem('user', JSON.stringify(user));
   user.score.length > 2 ? user.score.shift() : user.score;
   sessionStorage.setItem('user', JSON.stringify(user));

    if (finalScore % user.score[0] > 0 ) {
       goodBye.innerHTML = `Congratulations ${user.name}, You've Improved!! <br> You Scored ${finalScore}% This Time <br> Last Score was ${user.score[0]}%`;
    } else {
      if (finalScore >= 90 && finalScore <= 100) {
       goodBye.innerHTML = `You got ${finalScore}% <br> Well Done ${user.name}!!`; // if grade is between 90 and 100%, it displays this message.
      } else if (finalScore >= 80 && finalScore < 90) {
         goodBye.innerHTML = `You got ${finalScore}% <br> You Have Potential ${user.name}!`; // if grade is between 80 and 90%, it displays this message.
      } else if (finalScore >= 70 && finalScore < 80) {
         goodBye.innerHTML = `You got ${finalScore}% <br> There is Still Hope in You ${user.name}`; // if grade is between 70 and 80%, it displays this message.
      } else if (finalScore >= 60 && finalScore < 70) {
         goodBye.innerHTML = `You got ${finalScore}% <br> Better Luck Next Time ${user.name}`; // if grade is between 60 and 70%, it displays this message.
      } else {
         goodBye.innerHTML = `You got ${finalScore}% <br> You Need to Study More ${user.name}!`; // if grade is 50% or below, it displays this message.
      }
    }
  } else {
      if (finalScore >= 90 && finalScore <= 100) {
       goodBye.innerHTML = `You got ${finalScore}% <br> Well Done!!`; // if grade is between 90 and 100%, it displays this message.
      } else if (finalScore >= 80 && finalScore < 90) {
         goodBye.innerHTML = `You got ${finalScore}% <br> You Have Potential!`; // if grade is between 80 and 90%, it displays this message.
      } else if (finalScore >= 70 && finalScore < 80) {
         goodBye.innerHTML = `You got ${finalScore}% <br> There is Still Hope in You`; // if grade is between 70 and 80%, it displays this message.
      } else if (finalScore >= 60 && finalScore < 70) {
         goodBye.innerHTML = `You got ${finalScore}% <br> Better Luck Next Time`; // if grade is between 60 and 70%, it displays this message.
      } else {
         goodBye.innerHTML = `You got ${finalScore}% <br> You Need to Study More!`; // if grade is 50% or below, it displays this message.
      }
    }

  answerDisplay.appendChild(goodBye); // adds message to screen.
  tempStorage = []; // empties cache in tempStorage for the next  playthrough.

  setTimeout(() => { // timer
    goodBye.innerHTML = ''; // deletes text for next process on the end animation.
  }, 4600);

  setTimeout(() => {
    goodBye.innerHTML = ' Til\'  Next Time '; // next message in the animation.
  }, 5200);

  setTimeout(() => {
    $('#farewell').slideUp(1600); // last part of the animation.
  }, 5600);

  setTimeout(() => {
    goodBye.remove(); // removes container to ensure theres is no  interference in subsequent playthroughs.
  }, 7200);

  /* all setTimeouts are set up so they do not overlap each other and for everything to run smooth. */
  return;
}

/* function takes users input for the new question through the form. */
function addNewQtn(event) {
// Add new question to array to work with the class constructor.
  let newQ = new Question(`${id('newQ').value.trim()}`, [`${id('posibleAnsOne').value.trim()}`, `${id('posibleAnsTwo').value.trim()}`,
    `${id('posibleAnsThree').value.trim()}`, `${id('posibleAnsFour').value.trim()}`], `${id('correctAnswer').value.trim()}`);


  questions.push(newQ); // Add question to our array.
  questions.push(newQ); //Adds question to array for local storage.
  localStorage.setItem('questions', JSON.stringify(questions)); // Puts data in local storage.

  const q = id('newQ').value = ''; // Clears input field.
  const ans1 = id('posibleAnsOne').value = ''; // Clears input field.
  const ans2 = id('posibleAnsTwo').value = ''; // Clears input field.
  const ans3 = id('posibleAnsThree').value = ''; // Clears input field.
  const ans4 = id('posibleAnsFour').value = ''; // Clears input field.
  const rightAns = id('posibleAnsFour').value = '' // Clears input field.
  return;
}

/* function takes users input for the new question through the form. */
function modalAddNewQtn(event) {
// Add new question to array to work with the class constructor.
  let newQ = new Question(`${id('newQstn').value.trim()}`, [`${id('ansOne').value.trim()}`, `${id('ansTwo').value.trim()}`, `${id('ansThree').value.trim()}`,
    `${id('ansFour').value.trim()}`], `${id('correctAns').value.trim()}`);


  questions.push(newQ); // Add question to our array.
  questions.push(newQ); //Adds question to array for local storage.
  localStorage.setItem('questions', JSON.stringify(questions)); // Puts data in local storage.

  const q = id('newQstn').value = ''; // Clears input field.
  const ans1 = id('ansOne').value = ''; // Clears input field.
  const ans2 = id('ansTwo').value = ''; // Clears input field.
  const ans3 = id('ansThree').value = ''; // Clears input field.
  const ans4 = id('ansFour').value = ''; // Clears input field.
  const rightAns = id('correctAns').value = '' // Clears input field.
  return;
}

eventListeners(); // Function self calls so that eventListeners are all available at any given time.


// This eventListener triggers until after page loads.
window.addEventListener('DOMContentLoaded', (() => {
  const questionBank = JSON.parse(localStorage.getItem('questions')); // Retrieve questions added by users from local storage.
  questionBank ? questionBank.forEach(question => questions.push(question)) : questionBank; // Add them to our questions array.
}));


/* This is for the landing page title and grid animations with animejs 4.0 */
window.onload = () => {
	const { animate } = anime;
	const squares = anime.utils.$('.square');

	function animateGrid() {
		anime.animate(squares, {
			scale: [{ to: [0, 1.25] }, { to: 0 }],
			boxShadow: [
				{ to: '0 0 1rem 0 currentColor' },
				{ to: '0 0 0rem 0 currentColor' },
			],
			delay: anime.stagger(100, {
				grid: [11, 4],
				from: anime.utils.random(0, 44),
			}),
			onComplete: animateGrid,
		});
	}

	animateGrid();

	id('jumpIn').classList.remove('hide'); // shows jumpIn container once page loads.

	// Title custom HTML Animation with animejs 4.0
	// anime.splitText('h1', {
	// 	chars: `<span class="char-3d word-{i}">
	//     <em class="face face-top">{value}</em>
	//     <em class="face-front">{value}</em>
	//     <em class="face face-bottom">{value}</em>
	//   </span>`,
	// });

	// const charsStagger = anime.stagger(100, { start: 0 });

	// anime.createTimeline({ defaults: { ease: 'linear', loop: true, duration: 1200 } })
	// 	.add('.char-3d', { rotateX: -90 }, charsStagger)
	// 	.add('.char-3d .face-top', { opacity: [0.5, 0] }, charsStagger)
	// 	.add('.char-3d .face-front', { opacity: [1, 0.5] }, charsStagger)
	// 	.add('.char-3d .face-bottom', { opacity: [0.5, 1] }, charsStagger);

	// Word text animation with animejs 4.0 code block above has to be commented out for code below to work..
	const { words } = anime.splitText('h1', {
		words: { wrap: 'clip' },
	});

	anime.animate(words, {
		y: [{ to: ['100%', '0%'] }, { to: '-100%', delay: 2600, ease: 'in(3)' }],
		duration: 750,
		ease: 'out(3)',
		delay: anime.stagger(400),
		loop: false,
		fontSize: '6rem',
  } );

  setTimeout(() => {
		id('firstTitle').classList.add('hidden'); // hides first title after its animation ends.
	}, 5000);

	setTimeout(() => {
    // timer
    id('secondTitle').classList.remove('hide'); // hides second title after first title animation ends.

    const { chars } = anime.splitText('h4', {
			chars: { wrap: 'clip' },
		});

		anime.animate(chars, {
			y: [{ to: ['100%', '0%'] }, { to: '-100%', delay: 4200, ease: 'in(3)' }],
			duration: 750,
			ease: 'out(3)',
			delay: anime.stagger(120),
			loop: false,
      fontSize: '4rem',
      color: 'darkred'
		});
	}, 5000); // timer interval in milliseconds.

	setTimeout(() => {
    // timer
		$('#jumpInBtn').slideDown('slow'); // jQuery animation to slide down jumpIn container once page loads.
	}, 14000); // timer interval in milliseconds.
};
