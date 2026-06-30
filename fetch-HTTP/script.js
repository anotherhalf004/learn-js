fetch("https://randomuser.me/api/?results=3")
    .then((raw) => raw.json())
    .then((data) => {
        data.results.forEach(function (user) {
            const card = document.createElement("div");
            card.className = "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-3xl shadow-2xl p-8 w-80 border border-slate-700";

            const img = document.createElement("img");
            img.src = user.picture.large;
            img.alt = "User Avatar";
            img.className = "w-28 h-28 rounded-full mx-auto mb-5 ring-2 ring-slate-600";

            const name = document.createElement("h2");
            name.className = "text-3xl font-semibold text-center text-white tracking-tight";
            name.textContent = user.name.first + " " + user.name.last;

            const username = document.createElement("p");
            username.className = "text-center text-slate-300 mb-3";
            username.textContent = user.email;

            const bio = document.createElement("p");
            bio.className = "text-center text-slate-200 mb-6 max-w-prose mx-auto";
            bio.textContent = "Full-stack developer and tech enthusiast";

            const details = document.createElement("div");
            details.className = "space-y-3 text-slate-300 text-sm";

            const location = document.createElement("p");
            location.className = "text-center text-slate-400";
            location.textContent = `${user.location.city}, ${user.location.country}`;

            const phone = document.createElement("p");
            phone.className = "text-center text-slate-400";
            phone.textContent = user.phone;

            details.appendChild(location);
            details.appendChild(phone);

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(username);
            card.appendChild(bio);
            card.appendChild(details);

            // Add to page
            document.querySelector(".container").appendChild(card);
        });
    })

    .catch((err) => {
        console.log(err);
    });
