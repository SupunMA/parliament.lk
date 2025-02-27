// Burger Menu Toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Parliament Members Data
const members = [
    { name: "Ranil Wickremesinghe", role: "President", party: "UNP" },
    { name: "Dinesh Gunawardena", role: "Prime Minister", party: "SLPP" },
    { name: "Sajith Premadasa", role: "Leader of the Opposition", party: "SJB" },
    { name: "Mahinda Rajapaksa", role: "Former PM", party: "SLPP" },
    { name: "Anura Kumara Dissanayake", role: "JVP Leader", party: "NPP" }
];

const membersContainer = document.getElementById('members');
const searchInput = document.getElementById('search');

function displayMembers(filteredMembers) {
    membersContainer.innerHTML = "";
    filteredMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h2>${member.name}</h2>
                          <p><i class="fas fa-user-tie"></i> ${member.role}</p>
                          <span><i class="fas fa-flag"></i> ${member.party}</span>`;
        membersContainer.appendChild(card);
    });
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMembers = members.filter(member => 
        member.name.toLowerCase().includes(searchTerm) ||
        member.role.toLowerCase().includes(searchTerm) ||
        member.party.toLowerCase().includes(searchTerm)
    );
    displayMembers(filteredMembers);
});

displayMembers(members);
