//Programming Answers
let programmingQuestions = [
    'What is the difference between a compiler and an interpreter?',
    'What is the purpose of a variable in programming?',
    'What is the difference between a static and dynamic programming language?',
    'What is recursion in programming?',
    'What is the difference between pass-by-value and pass-by-reference?',
    'What is an algorithm?',
    'What is the difference between a stack and a queue?',
    'What is object-oriented programming (OOP)?',
    'What is the difference between a function and a method?',
    'What is the purpose of exception handling in programming?',
    "What is a loop in programming?",
    "What is the purpose of a conditional statement?",
    "What is a data type?",
    "What is the difference between '==' and '===' in programming?",
    "What is a function parameter?",
    "What is the purpose of a return statement in a function?",
    "What is a global variable?",
    "What is a local variable?",
    "What is an array in programming?",
    "What is a string in programming?",
    "What is the difference between a while loop and a for loop?",
    "What is a comment in programming?",
    "What is the purpose of a break statement in a loop?",
    "What is the difference between a class and an object?",
    "What is a constructor in programming?"
];


let programmingAnswers = [
    [
        "Compiler executes code line by line; interpreter translates the entire code at once.",
        "Compiler is used only in Python; interpreter is used only in C++.",
        "Compiler and interpreter are the same thing.",
        "Compiler translates the entire code at once; interpreter translates line by line.", // Correct
    ],

    [
        "To store and manipulate data.", // Correct
        "To execute loops and conditions.",
        "To define functions.",
        "To create graphical user interfaces."
    ],

    [
        "Static languages are faster than dynamic languages.",
        "Static checks types at compile time; dynamic checks at runtime.", // Correct
        "Dynamic languages use more memory than static languages.",
        "Static languages cannot use variables."
    ],

    [
        "A loop that runs infinitely.",
        "A way to define variables.",
        "A function calling itself.", // Correct
        "A method to compile code."
    ],

    [
        "Pass-by-value uses a copy; pass-by-reference uses the original.", // Correct
        "Pass-by-value is faster than pass-by-reference.",
        "Pass-by-reference is used only in Python.",
        "Pass-by-value modifies the original value."
    ],

    [
        "A step-by-step problem-solving procedure.", // Correct
        "A programming language.",
        "A type of data structure.",
        "A tool for debugging code."
    ],

    [
        "Stack is FIFO; queue is LIFO.",
        "Stack is LIFO; queue is FIFO.", // Correct
        "Stack and queue are the same.",
        "Stack is used only in databases."
    ],

    [
        "A paradigm based on objects and classes.", // Correct
        "A way to write faster code.",
        "A type of compiler.",
        "A method for debugging."
    ],

    [
        "A function is faster than a method.",
        "A method cannot return values.",
        "A function is used only in OOP.",
        "A method is associated with an object; a function is not.", // Correct
    ],

    [
        "To speed up code execution.",
        "To define variables.",
        "To manage errors gracefully.", // Correct
        "To create loops."
    ],

     ["A loop repeats a block of code until a condition is met.", "A loop is used to define variables.", "A loop is a type of data structure.", "A loop is used only in object-oriented programming."],
   ["To execute code based on a condition.", "To define variables.", "To create loops.", "To compile code."],
   ["A classification of data that determines its possible values and operations.", "A type of loop.", "A type of function.", "A type of compiler."],
   ["'==' checks value equality; '===' checks value and type equality.", "'==' is used in Python; '===' is used in JavaScript.", "'==' checks type equality; '===' checks value equality.", "There is no difference between '==' and '==='."],
   ["A variable passed into a function.", "A value returned by a function.", "A type of loop.", "A type of data structure."],
   ["To return a value from a function.", "To define a variable.", "To create a loop.", "To compile code."],
   ["A variable accessible throughout the entire program.", "A variable accessible only within a function.", "A variable used only in loops.", "A variable used only in object-oriented programming."],
   ["A variable accessible only within a specific block or function.", "A variable accessible throughout the entire program.", "A variable used only in loops.", "A variable used only in object-oriented programming."],
   ["A collection of elements stored in a single variable.", "A type of loop.", "A type of function.", "A type of compiler."],
   ["A sequence of characters.", "A type of loop.", "A type of function.", "A type of data structure."],
   ["A while loop repeats until a condition is false; a for loop repeats a specific number of times.", "A while loop is faster than a for loop.", "A for loop is used only in Python.", "There is no difference between a while loop and a for loop."],
   ["A note in the code that is ignored by the compiler or interpreter.", "A type of loop.", "A type of function.", "A type of data structure."],
   ["To exit a loop immediately.", "To define a variable.", "To create a function.", "To compile code."],
   ["A class is a blueprint; an object is an instance of a class.", "A class is used only in Python; an object is used only in JavaScript.", "A class is a type of loop; an object is a type of function.", "There is no difference between a class and an object."],
   ["A special method used to initialize objects.", "A type of loop.", "A type of function.", "A type of data structure."]

];

let programmingCorrectAnswersIndex = [3,0,1,2,0,0,1,0,3,2,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2];



localStorage.setItem("ProgrammingQuestions",JSON.stringify(programmingQuestions));
localStorage.setItem("ProgrammingAnswers",JSON.stringify(programmingAnswers));
localStorage.setItem("programmingCorrectAnswesrIndex",JSON.stringify(programmingCorrectAnswersIndex));



//Circket Questions
let cricketQuestions = [
    "What is the length of a cricket pitch?",
    "Who is known as the 'God of Cricket'?",
    "What is the maximum number of overs in a One Day International (ODI) match?",
    "How many players are there in a cricket team?",
    "What is a hat-trick in cricket?",
    "Who has scored the most international centuries in cricket?",
    "What does LBW stand for in cricket?",
    "Which country won the first-ever Cricket World Cup in 1975?",
    "What is the term for a bowler taking 10 wickets in a single Test match innings?",
    "What is the role of a wicketkeeper in cricket?",
    "Who holds the record for the highest individual score in Test cricket?",
    "What is the Duckworth-Lewis-Stern (DLS) method used for?",
    "What does a 'Golden Duck' mean in cricket?",
    "Which bowler has taken the most wickets in Test cricket?",
    "Who was the first cricketer to score 200 runs in an ODI match?",
    "What does the term 'Powerplay' mean in limited-overs cricket?",
    "Which format of cricket is the shortest: Test, ODI, or T20?",
    "What is the term for a batsman scoring 100 runs in an innings?",
    "Who has captained the Indian cricket team in the most Test matches?",
    "Which Australian cricketer is known as 'The Don'?",
    "What is the name of the cricket stadium in Melbourne, Australia?",
    "What is the nickname of the England vs Australia Test series?",
    "Which country hosted the 2019 Cricket World Cup?",
    "What is the highest individual score in an ODI match?",
    "Who is the fastest bowler to take 500 Test wickets?"
];

//Circket Answers
let cricketAnswers = [
    ["22.56 meters", "20.12 meters", "18 meters", "21.34 meters"], // Correct: 20.12 meters
    ["Brian Lara", "Virat Kohli", "Sachin Tendulkar", "Ricky Ponting"], // Correct: Sachin Tendulkar
    ["60 overs", "50 overs", "40 overs", "20 overs"], // Correct: 50 overs
    ["10 players", "12 players", "11 players", "9 players"], // Correct: 11 players
    ["Scoring 100 runs in an innings", "Taking 3 wickets in 3 consecutive balls", "Taking 5 wickets in an innings", "Scoring 50 runs in an innings"], // Correct: Taking 3 wickets in 3 consecutive balls
    ["Virat Kohli", "Steve Smith", "Jacques Kallis", "Sachin Tendulkar"], // Correct: Sachin Tendulkar
    ["Leg Batting Wide", "Leg Before Wicket", "Low Ball Width", "Long Ball Wicket"], // Correct: Leg Before Wicket
    ["Australia", "West Indies", "England", "India"], // Correct: West Indies
    ["9 wickets in an innings", "8 wickets in an innings", "6 wickets in an innings", "10 wickets in an innings"], // Correct: 10 wickets in an innings
    ["Acts as a substitute fielder", "Stops byes and stumping", "Bowls fast deliveries", "Scores runs quickly"], // Correct: Stops byes and stumping
    ["Don Bradman", "Sachin Tendulkar", "Brian Lara", "Virender Sehwag"], // Correct: Brian Lara
    ["To measure bowling speed", "To decide who bats first", "To calculate target score in rain-affected matches", "To determine a player's batting average"], // Correct: To calculate target score in rain-affected matches
    ["Getting out in the first over", "Scoring zero runs in an innings", "Getting out on the first ball faced", "Not bowling any deliveries"], // Correct: Getting out on the first ball faced
    ["Shane Warne", "Glenn McGrath", "Muttiah Muralitharan", "Anil Kumble"], // Correct: Muttiah Muralitharan
    ["Rohit Sharma", "Chris Gayle", "Virender Sehwag", "Sachin Tendulkar"], // Correct: Sachin Tendulkar
    ["Only spinners can bowl", "Batsmen can take extra runs", "Restrictions on fielding positions", "Only fast bowlers can bowl"], // Correct: Restrictions on fielding positions
    ["Super Over", "T20", "Test", "ODI"], // Correct: T20
    ["A double century", "A hat-trick", "A half-century", "A century"], // Correct: A century
    ["Kapil Dev", "Sourav Ganguly", "MS Dhoni", "Virat Kohli"], // Correct: MS Dhoni
    ["Steve Waugh", "Don Bradman", "Allan Border", "Ricky Ponting"], // Correct: Don Bradman
    ["Eden Gardens", "Melbourne Cricket Ground", "Lords", "SCG"], // Correct: Melbourne Cricket Ground
    ["The Border-Gavaskar Trophy", "The Ashes", "The World Test Championship", "The Benson & Hedges Series"], // Correct: The Ashes
    ["India", "South Africa", "England", "Australia"], // Correct: England
    ["Martin Guptill - 237", "Chris Gayle - 215", "Rohit Sharma - 264", "Sachin Tendulkar - 200"], // Correct: Rohit Sharma - 264
    ["James Anderson", "Anil Kumble", "Shane Warne", "Muttiah Muralitharan"] // Correct: Muttiah Muralitharan
];

//correct index
let cricketCorrectAnswersIndex = [1, 2, 1, 2, 1, 3, 1, 0, 3, 1, 2, 2, 2, 2, 3, 2, 0, 3, 2, 1, 1, 1, 1, 2, 2];

localStorage.setItem("cricketQuestions",JSON.stringify(cricketQuestions));
localStorage.setItem("cricketAnswers", JSON.stringify(cricketAnswers));
localStorage.setItem("cricketAnswersIndex", JSON.stringify(cricketCorrectAnswersIndex));


//General Knowledge Questions
let generalKnowledgeQuestions = [
    "What is the capital of France?",
    "Who wrote the play 'Romeo and Juliet'?",
    "What is the largest ocean on Earth?",
    "Who was the first President of the United States?",
    "What is the smallest planet in our solar system?",
    "What is the longest river in the world?",
    "How many continents are there on Earth?",
    "Which planet is known as the Red Planet?",
    "What is the national currency of Japan?",
    "Who discovered gravity?",
    "What is the hardest natural substance on Earth?",
    "What is the chemical symbol for gold?",
    "Which country is known as the Land of the Rising Sun?",
    "Who painted the Mona Lisa?",
    "How many players are there in a soccer team?",
    "What is the largest mammal in the world?",
    "What is the main language spoken in Brazil?",
    "Which country gifted the Statue of Liberty to the USA?",
    "What is the fastest land animal?",
    "Who invented the light bulb?",
    "What is the tallest mountain in the world?",
    "Which element is essential for breathing?",
    "What is the square root of 64?",
    "Who was the first man to walk on the moon?",
    "What does the acronym 'WWW' stand for in a website address?"
];

//General Knowledge Answers
let generalKnowledgeAnswers = [
    ["Paris", "London", "Berlin", "Madrid"],  
    ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],  
    ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],  
    ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],  
    ["Mercury", "Mars", "Venus", "Pluto"],  
    ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"],  
    ["7", "5", "6", "8"],  
    ["Mars", "Jupiter", "Saturn", "Neptune"],  
    ["Yen", "Dollar", "Euro", "Peso"],  
    ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],  
    ["Diamond", "Gold", "Iron", "Platinum"],  
    ["Au", "Ag", "Pb", "Fe"],  
    ["Japan", "China", "South Korea", "Thailand"],  
    ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],  
    ["11", "9", "7", "10"],  
    ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],  
    ["Portuguese", "Spanish", "French", "Italian"],  
    ["France", "Germany", "Canada", "Russia"],  
    ["Cheetah", "Lion", "Tiger", "Leopard"],  
    ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"],  
    ["Mount Everest", "K2", "Kangchenjunga", "Mount Kilimanjaro"],  
    ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],  
    ["8", "6", "9", "10"],  
    ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],  
    ["World Wide Web", "Wireless Web Window", "Web World Wide", "Wide Wireless Web"]  
];

//General Knowledge Correct Answer Index
let generalKnowledgeCorrectAnswersIndex = [2, 0, 3, 1, 0, 0, 2, 0, 1, 0, 3, 0, 0, 1, 3, 0, 0, 1, 0, 2, 0, 1, 2, 0, 3];

localStorage.setItem("gkQuestions", JSON.stringify(generalKnowledgeQuestions))
localStorage.setItem("gkAnswers", JSON.stringify(generalKnowledgeAnswers));
localStorage.setItem("gkAnswersIndex", JSON.stringify(generalKnowledgeCorrectAnswersIndex))


//Football Questions
let footballQuestions = [
    "What are the basic rules of football?",
    "How many players are on a football team?",
    "What is the role of a goalkeeper in football?",
    "What is the difference between a direct and an indirect free kick?",
    "What is the offside rule in football?",
    "What is a penalty kick in football?",
    "How long is a standard football match?",
    "What happens if a football match ends in a draw?",
    "What is a hat-trick in football?",
    "What is the difference between a yellow card and a red card?",
    "What is stoppage time in football?",
    "What is the purpose of a corner kick?",
    "What is a throw-in in football?",
    "What is the role of a striker in football?",
    "What does a midfielder do in football?",
    "What is the FIFA World Cup?",
    "What are the dimensions of a standard football field?",
    "What is a formation in football?",
    "What is the difference between a league and a knockout tournament?",
    "What is an own goal in football?",
    "What is the purpose of a captain in a football team?",
    "What is a clean sheet in football?",
    "What is the Golden Boot award in football?",
    "How does the offside trap work in football?",
    "What is the difference between a club and an international football team?"
];

//Football Answers
let footballAnswers = [
    ["Each team must have 15 players on the field", "A goal is worth 2 points", "The game is played with hands", "The team with more goals wins the match"],  
    ["10 players", "15 players", "9 players", "11 players"],  
    ["To score goals", "To defend the goal and prevent scoring", "To assist strikers in scoring", "To only pass the ball"],  
    ["Only indirect free kicks exist", "A direct free kick must always be passed", "A direct free kick can be shot at goal directly", "An indirect free kick can be taken without touching the ball"],  
    ["Offside means standing anywhere on the pitch", "A player is offside if they receive the ball in their own half", "A player is offside if they are ahead of the last defender when the ball is played to them", "Offside applies only to goalkeepers"],  
    ["A penalty kick is taken from the halfway line", "It is awarded when a player dives", "A penalty kick is taken from the penalty spot after a foul inside the box", "Only goalkeepers can take penalty kicks"],  
    ["60 minutes", "75 minutes", "90 minutes", "100 minutes"],  
    ["The game is replayed the next day", "Both teams are declared winners", "It results in a penalty shootout if necessary", "The match is restarted from the first minute"],  
    ["Two goals in a match", "Five goals in a match", "Three goals in a match", "A goal scored from outside the box"],  
    ["A yellow card means the player is sent off immediately", "A red card allows a substitution", "Two yellow cards equal a red card and result in dismissal", "A yellow card means an automatic one-match ban"],  
    ["Stoppage time is when the game stops for a break", "It is an extra break in the match", "Time added at the end of each half for stoppages", "It is only applied in extra time"],  
    ["A corner kick is awarded if the ball crosses the halfway line", "A corner kick is given when the ball goes out of play at the sideline", "It is awarded when the ball crosses the goal line last touched by the attacking team", "It is given when the defending team last touches the ball before it crosses the goal line"],  
    ["A throw-in is taken with one hand", "The player can run with the ball before throwing", "The throw-in is awarded when the ball fully crosses the sideline", "A throw-in can be taken from anywhere"],  
    ["Strikers only defend", "Strikers mainly score goals", "Strikers are the only players allowed to cross the halfway line", "Strikers play in goal"],  
    ["Midfielders only play in the defensive half", "Midfielders focus on scoring goals only", "Midfielders link defense and attack", "Midfielders only take free kicks"],  
    ["The FIFA World Cup is a club tournament", "It is played every year", "It is the most prestigious international football tournament", "Only club teams participate"],  
    ["A football field must be circular", "A standard football field has no fixed dimensions", "The length and width of a football field are regulated", "A football field must be square"],  
    ["Formation refers to the way players celebrate goals", "Formation is a strategy for player positioning", "Formation is only used for defensive play", "Formation means switching goalkeepers"],  
    ["A league has knockout rounds only", "A knockout tournament has a group stage", "A league involves teams playing each other multiple times", "Knockout tournaments mean all teams play each other"],  
    ["An own goal counts for the scoring team", "An own goal is worth two points", "An own goal is when a player accidentally scores for the opponent", "Own goals are disallowed"],  
    ["Captains are the only players allowed to score", "The captain represents the team to referees and motivates teammates", "Captains make all tactical decisions", "The captain can overrule the coach"],  
    ["A clean sheet means a team conceded no goals", "A clean sheet is when a team scores at least three goals", "It refers to winning by three goals or more", "A clean sheet is a special goalkeeper award"],  
    ["The Golden Boot is awarded to the best goalkeeper", "The Golden Boot is given to the best defender", "It is awarded to the top goal scorer of a tournament", "It is given to the team that concedes the least goals"],  
    ["The offside trap means standing in front of the goalkeeper", "It is a defensive strategy to catch attackers offside", "It means all defenders must stay behind the midfield line", "It refers to blocking a penalty kick"],  
    ["Club teams only play in international tournaments", "International teams consist of players from different clubs", "Club teams are national teams", "International teams play in domestic leagues"]  
];


//football correct answers index
let footballCorrectAnswersIndex = [3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 1];

localStorage.setItem("footballQuestions", JSON.stringify(footballQuestions));
localStorage.setItem("footballAnswers", JSON.stringify(footballAnswers));
localStorage.setItem("footballAnswersIndex", JSON.stringify(footballAnswers))