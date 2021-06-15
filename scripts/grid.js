const grid = document.querySelector('#grid'); // The grid of team member cards

// Iterates over array of all team members, creating cards for each of them and adding them to the grid
for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    const html = createHTML(member);
    grid.insertAdjacentHTML('beforeend', html);
}

// Creates and returns the html for a member's card, containing their photo, name, and role
function createHTML(member) {
    return `
        <div class="col" data-bs-toggle="modal" data-bs-target="#modal" data-bs-name="${member.name}">
            <div class="card">
                <img class="card-img-top" src="../images/${member.photoFileName}" alt="${member.name}">
                <div class="card-body">
                    <h2 class="name card-title fw-bold h4">${member.name}</h2>
                    <h3 class="card-subtitle mb-2 text-muted h5">${member.role}</h3>
                </div>
            </div>
        </div>
    `;
}
