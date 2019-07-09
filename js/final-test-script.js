//Credit Card
// const creditCard = {money: 10000, pin: "1111", inputPinCount: 3, cardStatus: "active", getCash: function (pin, moneyAmount) {
//     if (this.cardStatus === "disabled") {
//         return "Ваша карта заблокирована, обратитесь в банк для ее разблокировки";
//     }
//
//     if (pin !== this.pin) {
//         this.inputPinCount--;
//         if (this.inputPinCount > 0) {
//             return "Неправильный пин-код! Попробуйте пожалуйста снова!";
//         } else {
//             this.cardStatus = "disabled";
//             return "Неправильный пин-код! Вы исчерпали количество попыток. Ваша карта заблокирована, обратитесь в банк для ее разблокировки";
//         }
//     }
//
//     if (pin === this.pin) {
//         if (moneyAmount <= this.money) {
//             this.money -= moneyAmount;
//             this.inputPinCount = 3;
//             return `Получите Ваши - ${moneyAmount}`;
//         } else {
//             this.inputPinCount = 3;
//             return "К сожалению, на вашем счету недостаточно средств";
//         }
//     }
// }};
//
// const getCashBtn = document.getElementById("get-cash"),
//       pinInput = document.getElementById("pin-code"),
//       sumInput = document.getElementById("money-sum"),
//       cashRequestResult = document.getElementById("cash-request-result");
//
// getCashBtn.onclick = () => {
//     let output = creditCard.getCash(pinInput.value, sumInput.value);
//
//     cashRequestResult.innerText = output;
// };

//Spam
// function isSpam(userInput, spamWord, spamWordCount) {
//     let spamCount = userInput.split(spamWord);
//     console.log(spamCount);
//     if (spamCount.length-1 >= spamWordCount) {
//         return "SPAM!!!";
//     } else  {
//         return "Not spam))"
//     }
// }
//
// const comment = document.getElementById("comment"),
//       spamWord = document.getElementById("spam-word"),
//       sendCommentBtn = document.getElementById("send-comment"),
//       spamCheckResult = document.getElementById("spam-check-result");
//
// sendCommentBtn.onclick = () => {
//     let output = isSpam(comment.value, spamWord.value, 3);
//
//     spamCheckResult.innerText = output;
// };