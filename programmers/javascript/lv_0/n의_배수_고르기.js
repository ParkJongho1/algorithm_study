// Programmers
// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

//다른사람풀이
function solution(n, numlist) {
  var answer = [];

  for (let i = 0; i <= numlist.length; i++) {
    if (numlist[i] % n === 0) {
      answer.push(numlist[i]);
    }
  }
  return answer;
}
