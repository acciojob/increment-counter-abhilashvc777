//your JS code here. If required.
const body = document.querySelector("body")
const p = document.createElement("p")
const button = document.createElement("button")
p.setAttribute("id","counter")
button.setAttribute("id","incrementBtn")
body.appendChild(p)
body.appendChild(button)
let count = 0;
p.textContent = count
button.textContent = "Click"
button.style.padding="10px 40px"
button.style.fontSize="1em"
p.style.fontSize="1.3em"
button.addEventListener("click", ()=>{
	alert(count)
	count++
	p.textContent=count
})