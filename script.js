const projects = [
    {
        name: 'SocialHub',
        description: 'A social media app for sharing posts.',
        technologyUsed: ['HTML', 'CSS','PYTHON'],
        year: 2022
    },
    {
        name: 'E-Commerce Platform',
        description: 'An online shopping website.',
        technologyUsed: ['React', 'Node.js', 'MongoDB'],
        year: 2023
    },
    {
        name: 'Portfolio Website',
        description: 'A personal portfolio website.',
        technologyUsed: ['HTML', 'CSS', 'JavaScript'],
        year: 2024
    }
];

function displayProjects() {
    const container = document.getElementById('projectsContainer');
    
    const projectsHTML = projects.map(project => `
        <div class="project-card">
            <span class="year-badge">${project.year}</span>
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <div>
                ${project.technologyUsed.map(tech => 
                    `<span class="technology-tag">${tech}</span>`
                ).join('')}
            </div>
        </div>
    `).join('');

    container.innerHTML = projectsHTML;
}

// Add Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Load projects on window load
window.onload = displayProjects;
