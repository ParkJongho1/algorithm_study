// Programmers
// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(num_str) {
  return [...num_str].map(Number).reduce((a, b) => a + b, 0);
}

//다른사람풀이
function solution(num_str) {
  return [...num_str].reduce((a, c) => a + +c, 0);
}
