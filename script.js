const quizData = {
  html: [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Meta Language"],
      answer: "HyperText Markup Language"
    },
    {
      question: "Which tag is used to create a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<url>"],
      answer: "<a>"
    },
    {
      question: "Which element is used to define emphasized text?",
      options: ["<em>", "<i>", "<strong>", "<u>"],
      answer: "<em>"
    },
    {
      question: "Which HTML tag is used for a line break?",
      options: ["<br>", "<lb>", "<break>", "<line>"],
      answer: "<br>"
    },
    {
      question: "How do you insert an image in HTML?",
      options: ["<img src='image.jpg'>", "<image='image.jpg'>", "<pic src='image.jpg'>", "<src img='image.jpg'>"],
      answer: "<img src='image.jpg'>"
    },
    {
      question: "Which tag is used for unordered lists?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: "<ul>"
    },
    {
      question: "Which tag defines a table row?",
      options: ["<tr>", "<td>", "<table>", "<th>"],
      answer: "<tr>"
    },
    {
      question: "Which tag is used to add a heading?",
      options: ["<h1>", "<head>", "<heading>", "<h>"],
      answer: "<h1>"
    },
    {
      question: "How do you add a comment in HTML?",
      options: ["<!-- comment -->", "// comment", "# comment", "/* comment */"],
      answer: "<!-- comment -->"
    },
    {
      question: "Which tag creates a checkbox?",
      options: ["<input type='checkbox'>", "<checkbox>", "<check>", "<input checkbox>"],
      answer: "<input type='checkbox'>"
    }
  ],
  css: [
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheet", "Colorful Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which property changes text color?",
      options: ["color", "font-color", "text-color", "background-color"],
      answer: "color"
    },
    {
      question: "Which property controls the font size?",
      options: ["font-size", "text-size", "size", "font"],
      answer: "font-size"
    },
    {
      question: "Which selector targets all `<p>` tags?",
      options: ["p", "#p", ".p", "*p"],
      answer: "p"
    },
    {
      question: "How do you add a background color?",
      options: ["background-color", "bg-color", "color", "bg"],
      answer: "background-color"
    },
    {
      question: "Which property adds spacing inside an element?",
      options: ["padding", "margin", "spacing", "gap"],
      answer: "padding"
    },
    {
      question: "How do you center text?",
      options: ["text-align: center;", "align: center;", "center: text;", "text-center"],
      answer: "text-align: center;"
    },
    {
      question: "Which value makes an element hidden?",
      options: ["display: none;", "visibility: hidden;", "opacity: 0;", "All of these"],
      answer: "All of these"
    },
    {
      question: "How do you select an element by class?",
      options: [".classname", "#classname", "*classname", "classname"],
      answer: ".classname"
    },
    {
      question: "What unit is used for relative font size?",
      options: ["em", "px", "%", "pt"],
      answer: "em"
    }
  ],
  js: [
    {
      question: "Which symbol is used for comments in JS?",
      options: ["//", "/* */", "#", "<!-- -->"],
      answer: "//"
    },
    {
      question: "Which method adds an item to array end?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: "push()"
    },
    {
      question: "How to declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of these"],
      answer: "All of these"
    },
    {
      question: "Which function shows an alert box?",
      options: ["alert()", "prompt()", "confirm()", "display()"],
      answer: "alert()"
    },
    {
      question: "What is the output of typeof null?",
      options: ["object", "null", "undefined", "string"],
      answer: "object"
    },
    {
      question: "Which keyword is used for condition?",
      options: ["if", "else", "for", "switch"],
      answer: "if"
    },
    {
      question: "What does === mean?",
      options: ["Equal value and type", "Only value", "Only type", "None"],
      answer: "Equal value and type"
    },
    {
      question: "How do you call a function?",
      options: ["functionName()", "call functionName", "function.call", "fnc->"],
      answer: "functionName()"
    },
    {
      question: "What is a JavaScript object?",
      options: ["Key-value pairs", "Single value", "Method only", "Array"],
      answer: "Key-value pairs"
    },
    {
      question: "How do you write 'Hello' to console?",
      options: ["console.log('Hello')", "print('Hello')", "alert('Hello')", "document.log('Hello')"],
      answer: "console.log('Hello')"
    }
  ],
  accessibility: [
    {
      question: "What is the purpose of ARIA?",
      options: ["Accessibility support", "Animations", "Audio", "None"],
      answer: "Accessibility support"
    },
    {
      question: "Which attribute helps screen readers describe images?",
      options: ["alt", "src", "title", "id"],
      answer: "alt"
    },
    {
      question: "Which HTML tag improves navigation?",
      options: ["<nav>", "<section>", "<header>", "<aside>"],
      answer: "<nav>"
    },
    {
      question: "Keyboard navigation helps which users?",
      options: ["Visually impaired", "Motor disabled", "All of these", "None"],
      answer: "All of these"
    },
    {
      question: "What does 'tabindex' do?",
      options: ["Controls focus order", "Adds tabs", "Focus color", "None"],
      answer: "Controls focus order"
    },
    {
      question: "Which ARIA role defines a button?",
      options: ["role='button'", "aria-btn", "button-role", "aria-button"],
      answer: "role='button'"
    },
    {
      question: "What should labels be associated with?",
      options: ["form fields", "tables", "divs", "headers"],
      answer: "form fields"
    },
    {
      question: "Which tag provides a caption to a table?",
      options: ["<caption>", "<label>", "<legend>", "<summary>"],
      answer: "<caption>"
    },
    {
      question: "What tool tests accessibility?",
      options: ["Lighthouse", "Figma", "Bootstrap", "Nodemon"],
      answer: "Lighthouse"
    },
    {
      question: "Which attribute disables an input?",
      options: ["disabled", "readonly", "disable", "block"],
      answer: "disabled"
    }
  ]
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(subject) {
  currentQuiz = quizData[subject];
  currentQuestionIndex = 0;
  score = 0;

  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").style.display = "none";

  showQuestion();
}

function showQuestion() {
  const question = currentQuiz[currentQuestionIndex];
  document.getElementById("question").innerText = question.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  question.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(selectedOption) {
  const correct = currentQuiz[currentQuestionIndex].answer;
  const allButtons = document.querySelectorAll("#options button");

  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correct) {
      btn.style.backgroundColor = "#4CAF50";
    } else if (btn.innerText === selectedOption) {
      btn.style.backgroundColor = "#f44336";
    }
  });

  if (selectedOption === correct) score++;
  setTimeout(() => nextQuestion(), 1000);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  const total = currentQuiz.length;
  const percent = Math.round((score / total) * 100);

  let feedback = "";
  if (percent === 100) {
    feedback = "🎉 Perfect Score! You're a frontend master!";
  } else if (percent >= 80) {
    feedback = "🔥 Great job! Almost perfect!";
  } else if (percent >= 50) {
    feedback = "👍 Good effort. Keep practicing!";
  } else {
    feedback = "📝 Don't worry, try again and you'll improve!";
  }

  document.getElementById("score-text").innerText = `You scored ${score} out of ${total} (${percent}%)`;
  document.getElementById("feedback-text").innerText = feedback;
}

function goHome() {
  document.getElementById("result").style.display = "none";
  document.getElementById("home").style.display = "block";
}

const toggleSwitch = document.getElementById("mode-toggle");

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  }
});

window.onload = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    document.body.classList.add("light");
    toggleSwitch.checked = true;
  }
};