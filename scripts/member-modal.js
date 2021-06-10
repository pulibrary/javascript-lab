const modal = document.getElementById("modal");
const modalImg = document.querySelector(".modal-content img");
const modalTitle = document.querySelector(".modal-content h1");
const modalSubtitle = document.querySelector(".modal-content h3");
const modalBody = document.querySelector(".modal-content p");
const closeBtn = document.getElementsByClassName("close")[0];

function updateModal(member) {    
    modalImg.src = `../images/${member.photoFileName}`;
    modalImg.alt = `${member.name}`;
    modalTitle.textContent = member.name;
    modalSubtitle.textContent = member.role;
    modalBody.textContent = member.bio;
}

photoGrid.onclick = function(event) {
    if (event.target.className === "photo" || event.target.className === "name") {
        let member = teamMembers.find(element => element.name === event.target.title);
        updateModal(member);
        modal.style.display = "block";
    }
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}