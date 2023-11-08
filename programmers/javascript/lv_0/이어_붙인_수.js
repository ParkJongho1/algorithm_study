// Programmers
// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(num_list) {
   const a = num_list.filter((el) => el % 2 === 1);
   const b = num_list.filter((el) => el % 2 === 0);

   return Number(a.join("")) + Number(b.join(""));
}
