// Programmers
// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}
