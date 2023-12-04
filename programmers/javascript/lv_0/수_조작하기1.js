// Programmers
/* 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며,
 control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다. */
// One a day! 0단계부터 하루에 하나이상!!!

function solution(n, control) {
  return [...control].reduce((acc, cur) => {
    switch (cur) {
      case "w":
        return acc + 1;
      case "s":
        return acc - 1;
      case "d":
        return acc + 10;
      case "a":
        return acc - 10;
      default:
        return acc;
    }
  }, n);
}
