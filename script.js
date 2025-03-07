document.addEventListener('DOMContentLoaded', () => {
    // Burger Menu Toggle
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Parliament Members Data
    const members = [
        { name: "Amura Kumara Dissanayake", role: "President", party: "NPP" },
        { name: "Dr. Harini Amarasuriya", role: "Prime Minister", party: "NPP" },
        { name: "Sajith Premadasa", role: "Leader of the Opposition", party: "SJB" },
        { name: "Dilith Jayaweera", role: "MJP Leader", party: "MJP" }
    ];

    const membersContainer = document.getElementById('members');
    const searchInput = document.getElementById('search');

    function displayMembers(filteredMembers) {
        membersContainer.innerHTML = "";
        filteredMembers.forEach(member => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<h2>${member.name}</h2><p>${member.role}</p><span>${member.party}</span>`;
            membersContainer.appendChild(card);
        });
    }

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredMembers = members.filter(member => 
            member.name.toLowerCase().includes(searchTerm)
        );
        displayMembers(filteredMembers);
    });

    displayMembers(members);
});
