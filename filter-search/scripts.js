
const users = [
    {
        name: "Rover",
        pic: "https://picsum.photos/id/1011/400/600",
        bio: "A mysterious traveler in Wuthering Waves."
    },
    {
        name: "Jinhsi",
        pic: "https://picsum.photos/id/1025/400/600",
        bio: "The graceful Magistrate of Jinzhou."
    },
    {
        name: "Changli",
        pic: "https://picsum.photos/id/1005/400/600",
        bio: "A brilliant strategist with a fiery spirit."
    },
    {
        name: "Camellya",
        pic: "https://picsum.photos/id/1015/400/600",
        bio: "An unpredictable fighter who thrives in battle."
    },
    {
        name: "Shorekeeper",
        pic: "https://picsum.photos/id/1016/400/600",
        bio: "The guardian of the Black Shores."
    },
    {
        name: "Yinlin",
        pic: "https://picsum.photos/id/1027/400/600",
        bio: "A skilled investigator with electric abilities."
    },
    {
        name: "Encore",
        pic: "https://picsum.photos/id/1035/400/600",
        bio: "A cheerful girl with explosive power."
    }
];


function showUsers(arr) {
    arr.forEach((user) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.setAttribute("src", user.pic);
        img.classList.add("bg-img");

        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = user.pic;
        blurredLayer.classList.add("blurred-layer");

        const content = document.createElement("div");
        content.classList.add("content");

        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const para = document.createElement("p");
        para.textContent = user.bio;

        content.appendChild(heading);
        content.appendChild(para);


        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);


        document.querySelector(".cards").appendChild(card);
    });
}

showUsers(users);

const inp = document.querySelector(".inp");

inp.addEventListener("input", () => {
    const newUsers = users.filter((user) => {
        return user.name.startsWith(inp.value);
    });
    if (newUsers.length !== 0) {
        document.querySelector(".cards").innerHTML = "";

        showUsers(newUsers);
    } else {
        document.querySelector(".cards").innerHTML = "";
        document.querySelector(".note").style.display = "initial";
    }
    console.log(newUsers);
});



// show all users
//filter from input
// show krna filter

