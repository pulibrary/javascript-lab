export default class Member {
    constructor(memberInfo) {
        this.name = memberInfo.name;
        this.role = memberInfo.role;
        this.photoFileName = memberInfo.photoFileName;
        this.bio = memberInfo.bio;
        this.grid.insertAdjacentHTML('beforeend', this.createMemberHTML());
    }

    get grid() {
        return document.querySelector('#grid');
    }

    createMemberHTML() {
        return `
            <div class="col" data-bs-toggle="modal" data-bs-target="#modal" data-bs-name="${this.name}">
                <div class="card">
                    <img class="card-img-top" src="../images/${this.photoFileName}" alt="${this.name}">
                    <div class="card-body">
                        <h2 class="name card-title fw-bold h4">${this.name}</h2>
                        <h3 class="card-subtitle mb-2 text-muted h5">${this.role}</h3>
                    </div>
                </div>
            </div>
        `;
    }

    updateModal() {
        const modalLabel = document.getElementById("modal-label");
        const modalImg = document.getElementById("modal-img");
        const modalSubtitle = document.getElementById("modal-subtitle");
        const modalTitle = document.getElementById("modal-title");
        const modalBody = document.getElementById("modal-body");
    
        modalLabel.textContent = this.name;
        modalImg.src = `../images/${this.photoFileName}`;
        modalImg.alt = `${this.name}`;
        modalTitle.textContent = this.name;
        modalSubtitle.textContent = this.role;
        modalBody.textContent = this.bio;
    }
}

