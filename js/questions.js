// constructor function.
class Question {
	constructor(question, answers, correctAnswer) {
		this.question = question;
		this.answers = answers;
		this.correctAnswer = correctAnswer;
	}
}

// array of objects created by calling constructor function.
const codingQ = [
	new Question(
		'One of your classmates tells you that one way they remember what methods are is to think of methods like objects inside of functions. Is your classmate correct?',
		[
			'No, methods are more similar to arrays',
			'Yes, methods are very similar to objects',
			'No, methods are only used for loops',
			'No, methods are like functions inside of objects',
		],
		'No, methods are like functions inside of objects'
	),
	new Question(
		'Which function will allow you to turn the string variable x into a number? <br> let x = "1"?',
		['parseInt(x)', 'x.toNumber()', 'number(x)', 'int(x)'],
		'parseInt(x)'
	),
	new Question(
		'Which of the following are all keywords in JavaScript?',
		[
			'const, console, computer',
			'let, var, const, method, to',
			'let, function, for, while',
			'string, boolean, number, list',
		],
		'let, function, for, while'
	),
	new Question(
		'Which of the following is the correct way to create a JavaScript Date object representing the current date and time?',
		[
			'let today = new Date(Date())',
			'let today = new Date()',
			'let today = Date.now()',
			'let today = Date()',
		],
		'let today = new Date(Date())'
	),
	new Question(
		'Your classmate wants to code the directions from their house to their favorite ice cream shop. Which data structure would you advise them to use? ',
		[
			'a string, because all of the directions will be text',
			'an object, so you can store different types of data',
			'numbers, because you need to know the distance of each step',
			'an array, so that the order of the steps will be maintained',
		],
		'an array, so that the order of the steps will be maintained'
	),
	new Question(
		'What are five primitive data types used in JavaScript?',
		[
			'String, Object, Number, Null, Boolean ',
			'String, Number, Boolean, Null, Undefined',
			'Strings, Objects, Number, Array, Boolean',
			'String, Object, Number, Undefined, Boolean ',
		],
		'String, Number, Boolean, Null, Undefined'
	),

	new Question(
		'Your classmate is having trouble understanding the difference between an alert() and a console.log(). Which of the following would you tell them to help them understand the difference?',
		[
			'An alert() is a notification, while a console.log() is a database method',
			'They are essentially the same, but a console.log() is much easier to create',
			'An alert() can only be created using HTML',
			'alert() is a popup to interact with users while a console.log() is used by developers to test code',
		],
		'alert() is a popup to interact with users while a console.log() is used by developers to test code'
	),
	new Question(
		'How do you use an event handler to add a click event to a button with an id of "clickMe"?',
		[
			'$(button#clickMe).click(function(){});',
			'$(button#clickMe).onclick()=>{});',
			'$(#clickMe).onClick(function(){})',
			'$("#clickMe").on("click", ()=>{});',
		],
		'$(button#clickMe).click(function(){});'
	),
	new Question(
		'Your classmate wants to create a button on a web page that will populate a div with text describing what element was just clicked on. A good choice for this functionality would be...?',
		[
			'$("div").html("Triggered by a " + (this).Name + " element.");',
			'$("div").html("Triggered by a " + (this).nodeName + " element.");',
			'$("div").html("Triggered by a " + (this) + " element.");',
			'$("div").html("Triggered by a " + event.target.nodeName + " element.");',
		],
		'$("div").html("Triggered by a " + event.target.nodeName + " element.");'
	),
	new Question(
		'Which jQuery line will select all div elements that include the word "John" and add a style attribute of text-decoration: underline to those elements?',
		[
			'$( "div:with("John")" ).css( "text-decoration", "underline" ); ',
			'$( "div:contains("John")" ).css( "text-decoration", "underline" );',
			'$( "div:contains("John")" ).style( "text-decoration", "underline" ); ',
			'None of the above',
		],
		'$( "div:contains("John")" ).css( "text-decoration", "underline" );'
	),
	new Question(
		'What type of element will $(":checked") select?',
		[
			'Checkboxes that are checked',
			'Both radio buttons and checkboxes that are checked',
			'None of These Answers are True',
			'Radio buttons that are checked',
		],
		'Both radio buttons and checkboxes that are checked'
	),
	new Question(
		'Which jQuery line will select all images that have an alt attribute?',
		['$("img alt") ', '$("img[alt]")', 'All of them will', '$("img.alt")'],
		'$("img[alt]")'
	),

	new Question(
		'You notice that your classmate is always including a copy of some jQuery files in his project folder. This makes his projects larger than they should be, so he should...?',
		[
			'Link to a CDN version of jQuery, then delete his local jQuery files from his project',
			'Move local jQuery files to parent directory of project folder, link them at the new location',
			'Move local jQuery files to computer desktop, then link to them at the new location',
			'Link to a CDN version of jQuery, but keep his local jQuery files in his project just in case',
		],
		'Link to a CDN version of jQuery, then delete his local jQuery files from his project'
	),
	new Question(
		'Which jQuery line would select the li element with an ID of "special" and use the chaining method to add a class of "ordinary", then hide it from view?',
		[
			'$("li>special").hide().addClass("ordinary");',
			'None of These Examples are Correct',
			'$(".special").addClass("ordinary").hide()',
			'$("#special").addClass("ordinary").hide();',
		],
		'$("#special").addClass("ordinary").hide();'
	),
	new Question(
		'Which jQuery line will select all href attributes in a tags ending with .pdf?',
		[
			'$("a[href=".pdf"]")',
			'$("a[href$=".pdf""])',
			'$("a[href^=".pdf"]")',
			'$("a[href$=".pdf"]")',
		],
		'$("a[href^=".pdf"]")'
	),
	new Question(
		'Which jQuery line would set background-color to green and font-size to 12px?',
		[
			'.style({background-color:"green", font-size:12px});',
			'.css({"background-color":"green", "font-size":"12px"});',
			'.css("background-color":green ,"font-size":12px);',
			'None of the above',
		],
		'.css({"background-color":"green", "font-size":"12px"});'
	),
	new Question(
		'Which jQuery code will add class highlight to all even li elements within all ul elements?',
		[
			'$( "ul li" ).even.addClass( "highlight" );',
			'$( "ul li" ).even().addClass( "highlight" );',
			'$( "ul li" ).eachOther("even").addClass( "highlight" );',
			'$( "ul li" ).eachOther(2).addClass( "highlight" );',
		],
		'$( "ul li" ).even().addClass( "highlight" );'
	),
	new Question(
		'Which glossary term is used to describe executing a block of code only if a specified condition is true?',
		['loop', 'if statement', 'logical operators', 'else if statement'],
		'if statement'
	),

	new Question(
		'What is one useful feature of Bootstrap?',
		[
			'It makes adjusting a page for different window widths much easier',
			'It runs a virtual DOM that makes pages update much faster',
			'It makes our server run much more smoothly',
			'It makes JavaScript logic much simpler',
		],
		'It makes adjusting a page for different window widths much easier'
	),
	new Question(
		"Your friend wants to use string interpolation to output a welcome message to their user. They have defined the user's name in a variable called name. Which of the following is the proper way for your friend to do this?",
		[
			'`Hello, welcome to our page $[name].`',
			'`Hello, welcome to our page {name}.`',
			'`Hello, welcome to our page ${name}.`',
			'`Hello, welcome to our page $name.`',
		],
		'`Hello, welcome to our page ${name}.`'
	),
	new Question(
		'What do we call the operation that allows us to execute one block of code among many, based on multiple conditions?',
		['loop', 'logical operators', 'else if statement', 'if statement'],
		'else if statement'
	),
	new Question(
		'Which term describes the syntax used to check both if a user is logged in AND if they have admin rights?',
		[
			'if statement',
			'logical operators',
			'else if statement',
			'None of the above',
		],
		'logical operators'
	),
	new Question(
		'What is the term for the coding construct that repeatedly executes a block of code as long as a certain condition is met?',
		['if statement', 'loop', 'else if statement', 'logical operators'],
		'loop'
	),
	new Question(
		'How do you declare an object literal?',
		['myObj = {};', 'const myObj = {};', 'const myObj;', 'myObj {};'],
		'const myObj = {};'
	),

	new Question(
		'If you are not concerned with the index number of an element a good loop to choose would be a ______?',
		['for...of loop', 'forEach', 'do...while', 'for loop'],
		'for...of loop'
	),
	new Question(
		'What are the important benefits/features of loops?',
		['Efficiency', 'Automation', 'All of these', 'Repetition'],
		'All of these'
	),
	new Question(
		'What are the components of a for loop?',
		['Iterator', 'Condition', 'All of these', 'Initializer'],
		'All of these'
	),
	new Question(
		'How do you add a new element to the end of an array?',
		[
			'array.pop(element)',
			'array.push(element)',
			'array.unshift(element)',
			'array.shift(element)',
		],
		'array.push(element)'
	),
	new Question(
		'How do you declare a function?',
		['func myFunc;', 'function myFunc;', 'f myFunc;', 'fun myFunc;'],
		'function myFunc;'
	),
	new Question(
		'When can you omit parentheses for an arrow function?',
		[
			'If the function has no parameters',
			'If function has only one parameter',
			'Always, it’s not needed with arrow functions',
			'Never',
		],
		'If function has only one parameter'
	),
];

