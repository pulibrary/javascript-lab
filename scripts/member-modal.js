const modal = document.getElementById("modal");
const modalLabel = document.getElementById("modal-label");
const modalImg = document.querySelector(".modal-content img");
const modalTitle = document.getElementById("modal-title");
const modalSubtitle = document.getElementById("modal-subtitle");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementsByClassName("close")[0];

function updateModal(member) {    
    modalLabel.textContent = member.name;
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