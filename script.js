// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Highlight active navigation item
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Project data - you can replace this with your actual projects
    const projects = [
        {
            title: "FinTrack - Personal Finance Tracker",
            description: "A web application to track personal finances, manage budgets, and visualize spending habits.",
            technologies: ["Spring Boot", "ReactJs", "PostgreSQL"],
            image: "finTrack.jpg",
            link: ""
        },
        {
            title: "E-Commerce Backend",
            description: "A backend system for an e-commerce platform, handling product listings, user authentication, and order management.",
            technologies: ["Spring Boot", "PostgreSQL", "Postman"],
            image: "eCommerce.png",
            link: ""
        },
        {
            title: "Todo Management System",
            description: "A simple web application to manage daily tasks and to-do lists.",
            technologies: ["Spring Boot", "ReactJS", "MySQL"],
            image: "todo.jpg",
            link: ""
        },
        {
            title: "Quote Generator",
            description: "A web application that generates random quotes.",
            technologies: ["JavaScript", "HTML", "CSS"],
            image: "quotes.png",
            link: "https://incredible-kleicha-a05f06.netlify.app/"
        },
        // Add more projects as needed
    ];

    // Dynamically load projects
    const projectsGrid = document.querySelector('.projects-grid');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <h6></h6>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span style="font-style: italic;">${tech} | </span>`).join('')}
                </div>
                <h3></h3>
                <a href="${project.link}" class="btn" target="_blank">View Project</a>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });

    // Skills data - replace with your actual skills
    const skills = [
        { name: "JAVA", level: 90 },
        { name: "Spring Boot", level: 90 },
        { name: "Spring MVC", level: 85 },
        { name: "Spring Security", level: 80 },
        { name: "Hibernate", level: 85 },
        { name: "JPA", level: 85 },
        { name: "JavaFX", level: 75 },
        { name: "ReactJS", level: 85 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 70 },
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "Maven", level: 80 },
        { name: "JUnit", level: 80 },
        { name: "Postman", level: 80 },
        { name: "IntelliJ IDEA", level: 85 },
        { name: "Eclipse", level: 80 },
        { name: "Visual Studio Code", level: 85 },
        { name: "API Gateway", level: 75 },
        { name: "Services Discovery", level: 75 },
        { name: "Design Patterns", level: 80 },
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "Problem Solving", level: 85 },
        { name: "Team Collaboration", level: 90 },
        { name: "Communication", level: 85 },
        // Add more skills as needed
    ];

    // Dynamically load skills
    const skillsContainer = document.querySelector('.skills-container');

    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';

        skillElement.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <div class="skill-bar">
                <div class="skill-level" style="width: ${skill.level}%"></div>
            </div>
        `;

        skillsContainer.appendChild(skillElement);
    });

    const themeToggle = document.createElement('button');
    themeToggle.textContent = '🌓';
    themeToggle.className = 'theme-toggle';
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Add to your script.js
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.animate');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);

    // Animate education items on scroll
    const educationItems = document.querySelectorAll('.education-item');

    const animateEducation = () => {
        educationItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (itemPosition < screenPosition) {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }
        });
    };

    // Initialize items as invisible
    educationItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
    });

    window.addEventListener('scroll', animateEducation);
    window.addEventListener('load', animateEducation);

    const toggleBtn = document.getElementById("theme-toggle");
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

});