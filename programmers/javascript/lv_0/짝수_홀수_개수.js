// Programmers
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(num_list) {
   var answer = [];
   let a = 0; // 짝수
   let b = 0; // 홀수
   for (let i = 0; i < num_list.length; i++) {
      num_list[i] % 2 === 0 ? a++ : b++;
      answer = [a, b];
   }
   return answer;
}
