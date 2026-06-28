const addNote = document.getElementById("add-note");
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



function saveTOLocalStorage(obj){
    try {
        console.log("saveTOLocalStorage called");
        let oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        console.log("existing tasks count:", oldTasks.length);
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
        console.log("✓ saved successfully. total tasks now:", oldTasks.length);
        console.log("verification - get from storage:", localStorage.getItem("tasks"));
    } catch (err) {
        console.error("✗ localStorage error:", err.message, err);
    }
}



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

    if(imageUrl === ""){
        alert("Image URL is required.");
        return;
    }

    if(fullName === ""){
        alert("Full Name is required.");
        return;
    }

    if(homeTown === ""){
        alert("Home Town is required.");
        return;
    }

    if(purpose === ""){
        alert("Purpose is required.");
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

});