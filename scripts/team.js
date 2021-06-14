const grid = document.querySelector('#grid'); // The grid of team member cards (i.e. photos, names, roles)

// Creates and returns the div containing a member's photo, name, and role (i.e. the card)
function createDiv(member) {
    const memberDiv = document.createElement("div");
    memberDiv.className = "col";
    memberDiv.setAttribute("data-bs-toggle", "modal");
    memberDiv.setAttribute("data-bs-target", "#modal");
    memberDiv.setAttribute("data-bs-name", member.name);

    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    const photo = document.createElement("img");
    photo.src = `../images/${member.photoFileName}`;
    photo.alt = `${member.name}`;
    photo.className = "photo card-img-top";
    photo.title = `${member.name}`;

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    const name = document.createElement("h2");
    name.textContent = member.name;
    name.className = "name card-title fw-bold h4";
    name.title = `${member.name}`;

    const role = document.createElement("h3");
    role.textContent = member.role;
    role.className = "role card-subtitle mb-2 text-muted h5";

    cardBodyDiv.appendChild(name);
    cardBodyDiv.appendChild(role);
    cardDiv.appendChild(photo);
    cardDiv.appendChild(cardBodyDiv);
    memberDiv.appendChild(cardDiv);

    console.log(memberDiv);
    return memberDiv;
}

// Iterates over array of all team members, creating cards for each of them and adding them to the grid
for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    const memberDiv = createDiv(member);
    grid.appendChild(memberDiv);
}
  