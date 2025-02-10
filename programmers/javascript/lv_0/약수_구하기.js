// Programmers
// 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      answer.push(i);
    }
  }
  return answer;
}

//다른사람풀이
function solution(n) {
  return Array(n)
    .fill(0) // n의 개수만큼 배열 생성
    .map((v, index) => v + index + 1) // map문 사용하여 [1, ~ , n] 배열로 변환
    .filter((v) => n % v === 0); // filter 함수를 사용하여 n을 v로 조건 나눴을때 나머지가 0인(약수)값만 반환
}
