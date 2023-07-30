// Programmers
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(num) {
   var answer = "";
   num % 2 === 0 ? (answer = "Even") : (answer = "Odd");
   return answer;
}
