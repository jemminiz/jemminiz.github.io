<template>
    <div class="resume-container fade-in">
        <header class="header">
            <h1>Jonathan Emminizer</h1>
            <p>Software Developer | Web Enthusiast | Tech Lover</p>
        </header>
        <section class="competencies">
            <h2>What I'm Good At</h2>
            <ul>
                <h3>Backend Development</h3>
                <p>Built a budgeting app with a MongoDB backend, starting from a Rust-based mock backend.</p>
                <h3>Software Engineering</h3>
                <p>Helped maintain a VEX Robotics template used worldwide, and contributed to a scouting app used by my high school robotics team, increasing efficiency and allowing for more data to be accurately kept track of.</p>
                <h3>API Design and Development</h3>
                <p>Designed APIs to support dynamic budgeting features, including categories, tags, and drag-and-drop card interactions.</p>
                <h3>Database Management</h3>
                <p>Experience with MongoDB, SQL, and data modeling for efficient data retrieval and storage.</p>
                <h3>Version Control (Git)</h3>
                <p>Used Git, Github, and Gitlab for version control, enabling collaboration and project history tracking.</p>
                <h3>Agile Methodologies</h3>
                <p>Applied agile principles by iteratively developing and refining features in a personal budgeting app, prioritizing functionality based on testing and user needs.</p>
            </ul>
        </section>
        <section class="languages">
            <h2>Languages I Know</h2>
            <ul>
                <h3>C++</h3>
                <p>Most familiar with C++, working with it for multiple years to maintain a VEX Robotics template used worldwide, and contributing to the robot code of my high school robotics team.</p>
                <h3>Java</h3>
                <p>Familiar with Java through academic coursework and personal projects, including object-oriented programming and data structures.</p>
                <h3>Python</h3>
                <p>Experience with Python for scripting, automation, and data analysis tasks, as well as academic projects.</p>
                <h3>JavaScript</h3>
                <p>Experience with JavaScript for web development, including building interactive front-end features and integrating with backend services.</p>
                <h3>TypeScript</h3>
                <p>Used TypeScript extensively in developing a personal budgeting app, leveraging its type safety and modern features to build a robust and maintainable codebase.</p>
                <h3>Rust</h3>
                <p>Familiar with Rust through personal projects, including building a mock backend for a budgeting app to understand systems programming and performance optimization.</p>
                <h3>HTML/CSS</h3>
                <p>Proficient in HTML and CSS for structuring and styling web pages, with experience in responsive design and modern web standards.</p>
            </ul>
        </section>
    </div>
</template>

<style scoped>
.resume-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Change from center to flex-start */
    padding: 20px;
    color: white;
    min-height: 100vh;
    opacity: 0;
    /* Start hidden */
    animation: fadeIn 1s ease-in-out forwards;
    /* Fade-in animation */
}

.header {
    width: 100%;
    text-align: center;
}

.header h1,
.header p {
  text-align: center;
}

.competencies, .languages {
    width: 100%;
    max-width: 800px;
    margin-bottom: 40px;
    text-align: left;
}

.competencies h2,
.languages h2 {
  margin-left: 0;
}
.competencies h3,
.languages h3 {
  margin-left: 16px;
}
.competencies p,
.languages p {
  margin-left: 32px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>

<style>
body {
    background: linear-gradient(135deg, #6a11cb, #2575fc);
}
</style>