const photoGrid = document.querySelector('#photo-grid');

// Creates and returns the div containing a member's photo, name, and role
function createDiv(member) {
    const memberDiv = document.createElement("div");
    memberDiv.className = "col";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    const photo = document.createElement("img");
    photo.src = `../images/${member.photoFileName}`;
    photo.alt = `${member.name}`;
    photo.className = "card-img-top";
    photo.title = `${member.name}`;

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    const name = document.createElement("h2");
    name.textContent = member.name;
    name.className = "card-title fw-bold h4";
    name.title = `${member.name}`;

    const role = document.createElement("h3");
    role.textContent = member.role;
    role.className = "card-subtitle mb-2 text-muted h5";

    cardBodyDiv.appendChild(name);
    cardBodyDiv.appendChild(role);
    cardDiv.appendChild(photo);
    cardDiv.appendChild(cardBodyDiv);
    memberDiv.appendChild(cardDiv);

    console.log(memberDiv);
    return memberDiv;
}

// Iterates over array of all team members, creating divs for each of them and adding them to the photo grid
for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    const memberDiv = createDiv(member);
    photoGrid.appendChild(memberDiv);
}
  