const modal = document.getElementById("modal");
const modalLabel = document.getElementById("modal-label");
const modalImg = document.querySelector(".modal-content img");
const modalTitle = document.getElementById("modal-title");
const modalSubtitle = document.getElementById("modal-subtitle");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementsByClassName("close")[0];

// Updates the modal's contents based on the member that was clicked */
function updateModal(member) {    
    modalLabel.textContent = member.name;
    modalImg.src = `../images/${member.photoFileName}`;
    modalImg.alt = `${member.name}`;
    modalTitle.textContent = member.name;
    modalSubtitle.textContent = member.role;
    modalBody.textContent = member.bio;
}

// When the user clicks on a team member's name/photo, open and update the modal 
photoGrid.addEventListener('click', event => {
    if (event.target.className === "photo" || event.target.className === "name") {
        const member = teamMembers.find(element => element.name === event.target.title);
        updateModal(member);
        modal.style.display = "block";
    }
});

// When the user clicks on Close (x), close the modal
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close the modal
window.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});