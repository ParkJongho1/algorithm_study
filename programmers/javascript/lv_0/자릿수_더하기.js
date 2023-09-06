// Programmers
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
// One a day! 0단계부터 하루에 하나이상!!!

function solution(n) {
   var answer = 0;
   var s = String(n);
   for (var i = 0; i < s.length; i++) {
      answer += Number(s[i]);
   }
   return answer;
}
