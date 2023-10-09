console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

// ['as often as you like.', ...]

const lowerCaseAnswers = cards.map((card) => {
  return card.answer.toLowerCase();
});
console.log("lowerCaseAnswers: ", lowerCaseAnswers);

// ["How often can I use <header>? - As often as you like.", ...]

const questionsAndAnswersTogether = cards.map((card) => {
  return card.question + card.answer;
});
console.log("Question and Answer together: ", questionsAndAnswersTogether);

// [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

const questionAndAnswer = cards.map((card) => {
  return (card.question = card.question + ", answer: " + card.answer);
});
console.log("Answer after Question: ", questionAndAnswer);

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
