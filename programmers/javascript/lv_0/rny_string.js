// Programmers
/* 'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, 
    rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요. 
*/
// One a day! 0단계부터 하루에 하나이상!!!

function solution(rny_string) {
  return rny_string.replaceAll("m", "rn");
}

//다른사람풀이

// ex1
function solution(rny_string) {
  var answer = "";
  return [...rny_string].map((e) => (e == "m" ? "rn" : e)).join("");
}

// ex2
function solution(rny_string) {
  let arr = rny_string.split("");
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "m") {
      str += "rn";
    } else {
      str += arr[i];
    }
  }
  return str;
}
