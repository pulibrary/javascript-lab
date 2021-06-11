const photoGrid = document.querySelector('#photo-grid');

// Creates and returns the div containing a member's photo, name, and role
function createDiv(member) {
    const memberDiv = document.createElement("div");
    memberDiv.className = "team-member";

    const photo = document.createElement("img");
    photo.src = `../images/${member.photoFileName}`;
    photo.alt = `${member.name}`;
    photo.className = "photo";
    photo.title = `${member.name}`;

    const name = document.createElement("h2");
    name.textContent = member.name;
    name.className = "name";
    name.title = `${member.name}`;

    const role = document.createElement("p");
    role.textContent = member.role;
    role.className = "role";

    memberDiv.appendChild(photo);
    memberDiv.appendChild(name);
    memberDiv.appendChild(role);

    console.log(memberDiv);
    return memberDiv;
}

// Iterates over array of all team members, creating divs for each of them and adding them to the photo grid
for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    const memberDiv = createDiv(member);
    photoGrid.appendChild(memberDiv);
}
  