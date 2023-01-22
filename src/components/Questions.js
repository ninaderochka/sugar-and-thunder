export const Questions = {
  questions: [
    {
      question: "What type of counseling are you looking for?",
      choices: ["Individual counseling", "Teen counseling (for my child)"],
      type: "normal",
    },
    {
      question: "What is your relationship status?",
      choices: ["Single", "Married", "Divorced"],
      type: "normal",
    },
    {
      question: "Have you ever been in therapy before?",
      choices: ["Yes", "No"],
      type: "normal",
    },
    {
      question:
        "Are there any specific qualities that you’d like in a counselor?",
      choices: [
        "I prefer a male counselor",
        "I prefer a female counselor",
        "I prefer an older counselor (45+)",
        "I prefer a non-religious counselor",
      ],
      type: "radio",
    },
    {
      question: "Are there any issues you’d like to focus on?",
      choices: [
        "Depression",
        "Stress and Anxiety",
        "Relationship issues",
        "Family conflicts",
        "Trauma and abuse",
        "Eating disorders",
      ],
      type: "radio",
    },
    {
      question: "What brings you here?",
      choices: [""],
      type: "input",
    },
  ],
};