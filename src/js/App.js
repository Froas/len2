//const but = document.getElementById("first-id")
//const inp = document.getElementById("one")
// but.addEventListener("click", () => alert(inp.value))

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const divide = document.getElementById("divide")
const multip = document.getElementById("multiplication")
const num = document.getElementById("one")
const num2 = document.getElementById("two")

// /const num3 = +(num.innerHTML) + (+(num2.innerHTML))
plus.addEventListener("click", () => console.log(parseInt(num.value) + parseInt(num2.value)))
minus.addEventListener("click", () => console.log(parseInt(num.value) - parseInt(num2.value)))
divide.addEventListener("click", () => console.log(parseInt(num.value) / parseInt(num2.value)))
multip.addEventListener("click", () => console.log(parseInt(num.value) * parseInt(num2.value)))