let form = document.querySelector(".user-form");
let pic = document.querySelector("#pic");
let username = document.querySelector("#name");
let role = document.querySelector("#occupation");
let bio = document.querySelector("#bio");


const userManager = {
    users: [],
    init : function(){
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm : function(evt) {
        evt.preventDefault();
        this.addUser();

        form.reset();
    },
    addUser : function () {
        this.users.push({
            pic : pic.value,
            username : username.value,
            role : role.value,
            bio : bio.value
        });
        this.renderUi();
    },
    renderUi: function () {
        const userList = document.querySelector(".user-list");
        userList.innerHTML = "";

        this.users.forEach(function(user) {
            const userCard = document.createElement("div");
            userCard.className = "user-card";

            const img = document.createElement("img");
            img.src = user.pic;
            img.alt = user.username;

            const userInfo = document.createElement("div");
            userInfo.className = "user-info";

            const h3 = document.createElement("h3");
            h3.textContent = user.username;

            const occupation = document.createElement("p");
            occupation.className = "occupation";
            occupation.textContent = user.role;

            const bio = document.createElement("p");
            bio.className = "bio";
            bio.textContent = user.bio;

            userInfo.appendChild(h3);
            userInfo.appendChild(occupation);
            userInfo.appendChild(bio);

            userCard.appendChild(img);
            userCard.appendChild(userInfo);

            userList.appendChild(userCard);
        });
    },
    removeUser : function () {},

};

userManager.init();