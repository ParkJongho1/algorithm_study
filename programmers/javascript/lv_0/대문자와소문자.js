// Programmers
// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(my_string) {
  return my_string
    .split("")
    .map((n) => (n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()))
    .join("");
}
