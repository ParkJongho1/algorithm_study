// Programmers
// 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(strlist) {
   var answer = [];
   for (var i = 0; i < strlist.length; i++) {
      answer[i] = strlist[i].length;
   }
   return answer;
}
