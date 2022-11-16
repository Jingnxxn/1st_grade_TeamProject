let target = document.querySelector("#dynamic");
//배열안에있는 텍스트를 랜덤으로 재배열해서 다시저장
function randomString(){
    let stringArr = ["안동대학교 맛집","안동대학교 맛집"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent="";
    dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },200);
    }else{
        setTimeout(resetTyping, 2500);
    }
}

dynamic(randomString());

console.log(selectString);
console.log(selectStringArr);
