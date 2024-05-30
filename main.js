const bodyEl= document.body

///////N1//////////////////
const divEl=document.createElement('div')
const pEl=document.createElement('p')
const text=document.createTextNode('Welcome!')
const btn=document.createElement('button')
const btntext=document.createTextNode('Click')

btn.appendChild(btntext)
pEl.appendChild(text)
divEl.appendChild(pEl)
bodyEl.append(divEl, btn)

btn.setAttribute('id', 'click')
divEl.setAttribute('id', "welcome")

btn.onclick=function(){
    divEl.remove()
}




///////N2//////////////////
const divEl2=document.createElement('div')
divEl2.setAttribute('id', 'card')
const h2El=document.createElement('h2')
const text1=document.createTextNode('Gandalf')
const a=document.createElement('a')
a.setAttribute('href',"#")
const txtForA=document.createTextNode("Go to profile")

a.appendChild(txtForA)
h2El.appendChild(text1)
divEl2.append(h2El, a)
bodyEl.appendChild(divEl2)

///////N3//////////////////
const divEl3=document.createElement('div')
const p1El=document.createElement('p')
const textN1=document.createTextNode('რუსულ კანონს რა?')
const btnDiv= document.createElement('div')
const btn1=document.createElement('button')
const btntext1=document.createTextNode('კი')
const btn2=document.createElement('button')
const btntext2=document.createTextNode('არა')

btn1.appendChild(btntext1)
btn2.appendChild(btntext2)
p1El.appendChild(textN1)
divEl3.append(p1El)
btnDiv.append(btn1, btn2)
bodyEl.append(divEl3, btnDiv)

btnDiv.classList.add('custombBtn')
divEl3.classList.add('customQuest')

btn1.addEventListener("click", function(e){
    e.target.style.background ="red";
    btn2.disabled=true;
})

btn2.addEventListener("click", function(e){
    e.target.style.background ="green";
    btn1.disabled=true;
})

const divEl4=document.createElement('div')
const p2El=document.createElement('p')
const textN2=document.createTextNode('რუსეთს რა?')
const btnDiv2= document.createElement('div')
const btnN1=document.createElement('button')
const btntextN1=document.createTextNode('კი')
const btnN2=document.createElement('button')
const btntextN2=document.createTextNode('არა')

btnN1.appendChild(btntextN1)
btnN2.appendChild(btntextN2)
p2El.appendChild(textN2)
divEl4.append(p2El)
btnDiv2.append(btnN1, btnN2)
bodyEl.append(divEl4, btnDiv2)

btnDiv2.classList.add('custombBtn')
divEl4.classList.add('customQuest')

btnN1.addEventListener("click", function(e){
    e.target.style.background ="red";
    btnN2.disabled = true;
})

btnN2.addEventListener("click", function(e){
    e.target.style.background ="green";
    btnN1.disabled = true;
})

//////ბონუს დავალება/////
let pointBtn=document.createElement("button")
let btnNumber=0
pointBtn.append(btnNumber)
bodyEl.append(pointBtn)

function addpoint(e) {
  if (e.target.style.background === 'green') {
    btnNumber++;
    pointBtn.textContent = btnNumber;
  }
}

btn1.addEventListener('click', addpoint);
btn2.addEventListener('click', addpoint);
btnN1.addEventListener('click', addpoint);
btnN2.addEventListener('click', addpoint);



console.log(bodyEl)
