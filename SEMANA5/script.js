const app = document.getElementById("app")
let homens = 0
let mulheres = 0

const container = document.createElement("div")
container.style.width = "300px"
container.style.margin = "30px auto"
container.style.fontFamily = "Arial, sans-serif"
container.style.textAlign = "center"
container.style.border = "1px solid #ccc"
container.style.borderRadius = "8px"
container.style.padding = "15px"
container.style.boxShadow = "0 0 8px rgba(0,0,0,0.2)"

const topRow = document.createElement("div")
topRow.style.display = "flex"
topRow.style.justifyContent = "space-between"
topRow.style.alignItems = "center"
topRow.style.marginBottom = "10px"

const labelTotal = document.createElement("div")
labelTotal.textContent = "Total"
labelTotal.style.fontSize = "20px"
labelTotal.style.fontWeight = "bold"

const totalSpan = document.createElement("div")
totalSpan.textContent = homens + mulheres
totalSpan.style.fontSize = "20px"
totalSpan.style.fontWeight = "bold"
totalSpan.style.marginRight = "auto"
totalSpan.style.marginLeft = "10px"

const refreshButton = document.createElement("button")
refreshButton.textContent = "↻"
refreshButton.style.fontSize = "18px"
refreshButton.style.border = "none"
refreshButton.style.backgroundColor = "transparent"
refreshButton.style.cursor = "pointer"
refreshButton.addEventListener("click", () => {
  homens = 0
  mulheres = 0
  atualizarValores()
})

topRow.appendChild(labelTotal)
topRow.appendChild(totalSpan)
topRow.appendChild(refreshButton)

const rowHomens = document.createElement("div")
rowHomens.style.display = "flex"
rowHomens.style.alignItems = "center"
rowHomens.style.justifyContent = "center"
rowHomens.style.margin = "10px 0"

const iconHomem = document.createElement("div")
iconHomem.textContent = "👨"
iconHomem.style.fontSize = "40px"
iconHomem.style.marginRight = "10px"

const addHomem = document.createElement("button")
addHomem.textContent = "+"
addHomem.style.fontSize = "20px"
addHomem.style.width = "40px"
addHomem.style.height = "40px"
addHomem.style.marginRight = "5px"
addHomem.style.cursor = "pointer"
addHomem.addEventListener("click", () => {
  homens++
  atualizarValores()
})

const removeHomem = document.createElement("button")
removeHomem.textContent = "-"
removeHomem.style.fontSize = "20px"
removeHomem.style.width = "40px"
removeHomem.style.height = "40px"
removeHomem.style.marginRight = "5px"
removeHomem.style.cursor = "pointer"
removeHomem.addEventListener("click", () => {
  if (homens > 0) {
    homens--
    atualizarValores()
  }
})

const labelHomens = document.createElement("div")
labelHomens.style.display = "flex"
labelHomens.style.flexDirection = "column"
labelHomens.style.alignItems = "center"

const homensText = document.createElement("div")
homensText.textContent = "Homens"
homensText.style.fontWeight = "bold"
homensText.style.marginBottom = "5px"

const homensCount = document.createElement("div")
homensCount.textContent = homens
homensCount.style.fontSize = "18px"
homensCount.style.marginTop = "5px"

labelHomens.appendChild(homensText)
labelHomens.appendChild(homensCount)

rowHomens.appendChild(iconHomem)
rowHomens.appendChild(addHomem)
rowHomens.appendChild(removeHomem)
rowHomens.appendChild(labelHomens)

const rowMulheres = document.createElement("div")
rowMulheres.style.display = "flex"
rowMulheres.style.alignItems = "center"
rowMulheres.style.justifyContent = "center"
rowMulheres.style.margin = "10px 0"

const iconMulher = document.createElement("div")
iconMulher.textContent = "👩"
iconMulher.style.fontSize = "40px"
iconMulher.style.marginRight = "10px"

const addMulher = document.createElement("button")
addMulher.textContent = "+"
addMulher.style.fontSize = "20px"
addMulher.style.width = "40px"
addMulher.style.height = "40px"
addMulher.style.marginRight = "5px"
addMulher.style.cursor = "pointer"
addMulher.addEventListener("click", () => {
  mulheres++
  atualizarValores()
})

const removeMulher = document.createElement("button")
removeMulher.textContent = "-"
removeMulher.style.fontSize = "20px"
removeMulher.style.width = "40px"
removeMulher.style.height = "40px"
removeMulher.style.marginRight = "5px"
removeMulher.style.cursor = "pointer"
removeMulher.addEventListener("click", () => {
  if (mulheres > 0) {
    mulheres--
    atualizarValores()
  }
})

const labelMulheres = document.createElement("div")
labelMulheres.style.display = "flex"
labelMulheres.style.flexDirection = "column"
labelMulheres.style.alignItems = "center"

const mulheresText = document.createElement("div")
mulheresText.textContent = "Mulheres"
mulheresText.style.fontWeight = "bold"
mulheresText.style.marginBottom = "5px"

const mulheresCount = document.createElement("div")
mulheresCount.textContent = mulheres
mulheresCount.style.fontSize = "18px"
mulheresCount.style.marginTop = "5px"

labelMulheres.appendChild(mulheresText)
labelMulheres.appendChild(mulheresCount)

rowMulheres.appendChild(iconMulher)
rowMulheres.appendChild(addMulher)
rowMulheres.appendChild(removeMulher)
rowMulheres.appendChild(labelMulheres)

function atualizarValores() {
  totalSpan.textContent = homens + mulheres
  homensCount.textContent = homens
  mulheresCount.textContent = mulheres
}

container.appendChild(topRow)
container.appendChild(rowHomens)
container.appendChild(rowMulheres)
app.appendChild(container)
