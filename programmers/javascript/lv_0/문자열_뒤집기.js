// Programmers
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(my_string) {
   var answer = my_string.split("").reverse().join("");
   return answer;
}
