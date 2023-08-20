// Programmers
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(my_string, letter) {
   const answer = my_string.split(letter).join("");
   return answer;
}
