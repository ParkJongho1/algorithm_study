// Programmers
// 가문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(my_string) {
  return [...my_string].reduce(
    (acc, cur) => (Number(cur) ? +acc + +cur : acc),
    0
  );
}
