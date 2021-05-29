const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click",function(){
	let hexColor ="#";
	for(let i=0;i<6;i++){
		hexColor += hex[getRandomNumber()];
	}
color.textContent = hexColor;
document.body.style.backgroundColor =hexColor;



});
function getRandomNumber(){
	return Math.floor(Math.random()*hex.length);
}
const html = new mojs.Html({
  // selector for HTMLElement
  el: '#js-el',
  // animate translateX from 0 to 200 pixels
  // each delta object can have entire set of tween properties and callbacks
  x: { 0: -200, duration: 1000, delay: 200, easing: 'cubic.out', onComplete () { console.log('x property animation complete') } },
  y: { 0: -200, duration: 2000, onComplete () { console.log('y property animation complete') } },
  // static properties
  left: '50%',
  top:  '50%'
});
 
new MojsPlayer({ add: html });
