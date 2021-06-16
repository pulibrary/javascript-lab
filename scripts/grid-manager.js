export default class gridManager {
    constructor(teamMembers) {
        this.teamMembers = teamMembers;
        this.bindModalShow();
    }

    get modal() {
        return document.getElementById('modal');
    }

    bindModalShow() {
        // When the user clicks on a team member's card, opens and updates the modal 
        this.modal.addEventListener('show.bs.modal', event => {
            const name = event.relatedTarget.getAttribute('data-bs-name'); // Name of team member that was clicked
            this.teamMembers[name].updateModal(); // Finds member object with that name and updates modal based on it
        })
    }
}