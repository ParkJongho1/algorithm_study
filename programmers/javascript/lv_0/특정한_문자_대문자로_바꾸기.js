// Programmers
/* 
   영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, 
   my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
*/
// One a day! 0단계부터 하루에 하나이상!!!

function solution(my_string, alp) {
  return [...my_string].map((a) => (a === alp ? a.toUpperCase() : a)).join("");
}

//다른사람풀이
function solution(my_string, alp) {
  let re = new RegExp(alp, "g");
  return my_string.replace(re, alp.toUpperCase());
}
