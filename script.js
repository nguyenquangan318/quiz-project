user = {
  id: 1,
  fullName: "An Nguyễn",
  email: "nguyenquangan@gmail.com",
  password: "123456",
  role: "user",
};

category = {
  id: 1,
  categoryName: "Đời sống",
  categoryEmoji: "🏠",
};

test = {
  id: 1,
  testName: "Thách thức sự hiểu biết của bạn",
  categoryId: 1,
  image: "https://www.w3schools.com/html/html5.gif", //Không bắt buộc
  playTime: 15, //Thời gian làm bài
  playAmount: 5, //Số lượt đã được chơi
  questions: [
    {
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
    },
  ],
};


