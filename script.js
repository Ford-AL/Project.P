
const words = ["davergay", "portas", "emerald", "dark", "chris"];


const wordsContainer = document.getElementById("wordsContainer");
const basketList = document.getElementById("basketList");
const resultDiv = document.getElementById("result");


words.forEach(word => {
    const wordElement = document.createElement("div");
    wordElement.classList.add("word");
    wordElement.textContent = word;
    wordElement.draggable = true; 
    wordsContainer.appendChild(wordElement);
});


document.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("word")) {
        e.dataTransfer.setData("text/plain", e.target.textContent);
    }
});


document.addEventListener("dragover", (e) => {
    e.preventDefault(); 
});


document.addEventListener("drop", (e) => {
    e.preventDefault();
    const word = e.dataTransfer.getData("text/plain");

    
    const listItem = document.createElement("li");
    listItem.textContent = word;
    basketList.appendChild(listItem);

    
    const wordElement = Array.from(wordsContainer.children).find(el => el.textContent === word);
    if (wordElement) {
        wordsContainer.removeChild(wordElement);
    }

 
    if (basketList.children.length === words.length) {
        resultDiv.textContent = "Поздравляем! Все пидоры в корзинеее !!! все турки уебаны all Turks are stupid gay";
        resultDiv.style.color = "green";
    }
});