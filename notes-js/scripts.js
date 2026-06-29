const addNote = document.getElementById("add-note");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");


const formContainer = document.querySelector(".form-container");
const closeForm = document.querySelector(".closeForm");
const form = document.querySelector(".form-container form");
const imageUrlInput = document.querySelector(".form-container input[type='text']");
const fullNameInput = document.querySelectorAll(".form-container input[type='text']")[1];
const homeTownInput = document.querySelectorAll(".form-container input[type='text']")[2];
const purposeInput = document.querySelectorAll(".form-container input[type='text']")[3];
const categoryInputs = document.querySelectorAll(".form-container input[name='category']");
const submitBtn = document.querySelector(".form-container .submit-btn");





// code start here


renderStackHTML();

function saveTOLocalStorage(obj){
    try {
        let oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    } catch (err) {
        console.error("✗ localStorage error:", err.message, err);
    }
}


upBtn.addEventListener("click",() => {
    let cardArray = JSON.parse(localStorage.getItem("tasks")) || [];

    if(cardArray.length <=1) return;
    
    const first = cardArray.shift();
    cardArray.push(first);

    localStorage.setItem("tasks",JSON.stringify(cardArray));
    renderStackHTML();
});

downBtn.addEventListener("click",() => {
    let cardArray = JSON.parse(localStorage.getItem("tasks")) || [];

    if(cardArray.length <=1) return;
    
    const last = cardArray.pop();
    cardArray.unshift(last);

    localStorage.setItem("tasks",JSON.stringify(cardArray));
    renderStackHTML();
});

addNote.addEventListener("click",() => {
    formContainer.style.display = "initial";
});


closeForm.addEventListener("click", function() {
    formContainer.style.display = "none";
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("form submit handler triggered");

    const imageUrl = imageUrlInput.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const purpose = purposeInput.value.trim();

    let selected = false;
    categoryInputs.forEach(cat => {
        if (cat.checked) {
            selected = cat.value;
            console.log(selected);
        }
    });

    // const imageUrlRegex = /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg|bmp|avif)(\?.*)?$/i;

    if(imageUrl === ""){
        alert("Image URL is invalid!.");
        return;
    }

    if(fullName === ""){
        alert("Full Name is invalid!.");
        return;
    }

    if(homeTown === ""){
        alert("Home Town is invalid!.");
        return;
    }

    if(purpose === ""){
        alert("Purpose is invalid!.");
        return;
    }   

    if(!selected){
        alert("Please select a category.");
        return;
    }

    saveTOLocalStorage({
        imageUrl,
        fullName,
        homeTown,
        purpose,
        category: selected
    });
    
    form.reset();
    formContainer.style.display = "none";
    renderStackHTML();

});

function renderStackHTML() {
    let cardArray = JSON.parse(localStorage.getItem("tasks")) || [];
    let stackHTML = '';

    cardArray.forEach((card) => {

        stackHTML +=
        `
        <div class="card">
            <img class="avatar" src="${card.imageUrl}" alt="${card.fullName}" />
            <h2>${card.fullName}</h2>
            <div class="info">
                <span>Home town</span>
                <strong>${card.homeTown}</strong>
            </div>
            <div class="info">
                <span>Purpose</span>
                <strong>${card.purpose}</strong>
            </div>
            <div class="buttons">
                <button class="call">Call</button>
                <button class="msg">Message</button>
            </div>
        </div>
        `;

    });

    document.querySelector(".stack").innerHTML = stackHTML;
}


