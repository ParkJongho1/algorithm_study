// Programmers
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(arr) {
   var answer = 0;
   let sum = arr.reduce((acc, cur) => acc + cur, 0);
   answer = sum / arr.length;
   return answer;
}
