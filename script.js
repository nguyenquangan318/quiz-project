category = {
  id: 1,
  categoryName: "Đời sống",
  categoryEmoji: "🏠",
};

question = {
  questionId: 1,
  content:
    "Which is the part of the computer system that one can physically touch?",
  answers: [
    {
      answer: "data",
    },
    {
      answer: "operating systems",
    },
    {
      answer: "hardware",
      isCorrected: true, // Đánh dấu câu trả lời đúng
    },
    {
      answer: "software",
    },
  ],
};

test = {
  id: 1,
  testName: "Thách thức sự hiểu biết của bạn",
  categoryId: 1,
  image: "https://www.w3schools.com/html/html5.gif",
  lastTimeResult: 17, //Số câu đúng lần chơi gần nhất,
  //chưa chơi lần nào có giá trị là -1
  playTime: 15, //Thời gian làm bài
  playAmount: 5, //Số lần làm bài
  questions: [1, 2, 3, 4], // Mảng id các câu hỏirf
};
