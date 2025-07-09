document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: "Predictive Maintenance for Industrial Machinery",
            description: "Developed a machine learning model to predict equipment failures using sensor data, reducing downtime by 15%.",
            link: "https://github.com/yourusername/predictive-maintenance",
            featured: true
        },
        {
            title: "Customer Churn Prediction",
            description: "Built a classification model to identify customers at risk of churning, enabling targeted retention strategies.",
            link: "https://github.com/yourusername/churn-prediction",
            featured: true
        },
        {
            title: "Natural Language Processing for Sentiment Analysis",
            description: "Implemented a deep learning model (LSTM) for sentiment analysis on customer reviews.",
            link: "https://github.com/yourusername/sentiment-analysis",
            featured: false
        },
        {
            title: "Image Classification with Convolutional Neural Networks",
            description: "Trained a CNN to classify images of different categories with high accuracy.",
            link: "https://github.com/yourusername/image-classification",
            featured: true
        },
        {
            title: "Recommendation System for E-commerce",
            description: "Designed and implemented a collaborative filtering recommendation system for an online retail platform.",
            link: "https://github.com/yourusername/recommendation-system",
            featured: false
        },
        {
            title: "Time Series Forecasting for Stock Prices",
            description: "Used ARIMA and Prophet models to forecast stock prices, analyzing historical data patterns.",
            link: "https://github.com/yourusername/stock-price-forecasting",
            featured: false
        }
    ];

    const projectGrid = document.querySelector('.project-grid');
    const projectListSection = document.getElementById('project-list');

    // Function to create a project card HTML
    function createProjectCard(project) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" class="button">View Project</a>
        `;
        return projectCard;
    }

    // Populate featured projects on index.html
    if (projectGrid) {
        const featuredProjects = projects.filter(project => project.featured);
        featuredProjects.forEach(project => {
            projectGrid.appendChild(createProjectCard(project));
        });
    }

    // Populate all projects on projects.html
    if (projectListSection) {
        const allProjectsContainer = document.createElement('div');
        allProjectsContainer.classList.add('project-grid'); // Re-use grid styling
        projects.forEach(project => {
            allProjectsContainer.appendChild(createProjectCard(project));
        });
        projectListSection.appendChild(allProjectsContainer);
    }
});