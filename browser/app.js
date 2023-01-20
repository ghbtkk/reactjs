/*
const title = document.getElementById("title");
//js와 html을 이어줄 document.getElementById 필요

title.innerText = "Got U";
//Grab me를 Got U로 변경

console.log(title.id);
console.log(title.className);
//콘솔에 출력되나 확인
*/

const title = document.querySelector("div.hello:first-child h1");
//css 형태로 콘솔에 반환
//만약 조건에 해당하는 게 많으면 가장 처음만 반환
//querySelectorAll은 조건에 해당하는 모든 것 반환
//console.log(title);

function handleTitleClick() {
  title.style.color = "blue";
}
function handleMouseEnter() {
  title.innerText = "Mouse is here";
}
function handleMouseLeave() {
  title.innerText = "Mouse is gone";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier");
}
function handleWindowOffline() {
  alert("no Wifi");
}
function handleWindowOnline() {
  alert("Wifi");
}
title.addEventListener("click", handleTitleClick);
//title.onclick = "handleTitleClick";
//user가 title을 click할 때 handleTitleClick 실행
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

/*
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/
