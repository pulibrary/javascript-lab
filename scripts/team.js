const photoGrid = document.querySelector('#photo-grid');

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

for (let i = 0; i < teamMembers.length; i++) {
    let member = teamMembers[i];
    let memberDiv = createDiv(member);
    photoGrid.appendChild(memberDiv);
}
  