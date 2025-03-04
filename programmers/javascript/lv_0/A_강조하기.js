// Programmers
// 문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(myString) {
  return myString.toLowerCase().replace(/a/g, "A");
}

//다른사람풀이

function solution(myString) {
  return [...myString]
    .map((e) => (e == "a" || e == "A" ? "A" : e.toLowerCase()))
    .join("");
}
