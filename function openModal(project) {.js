function openModal(project) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    const projectDetails = {
        project1: "<h3>Calorie Recognition System</h3><p>This project uses Convolutional Neural Networks (CNN) to analyze food images and provide calorie information, aimed at promoting healthy eating habits.</p>",
        project2: "<h3>Rice Plant Disease Classification</h3><p>Utilizing CNN for classifying rice plant diseases to assist farmers in early detection and treatment, thereby improving crop yield.</p>",
        project3: "<h3>Blog Application</h3><p>A fully functional blog application developed using
