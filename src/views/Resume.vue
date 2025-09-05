<template>
    <div class="resume-container fade-in">
        <header class="header">
            <h1>John Doe</h1>
            <p>Software Developer | Web Enthusiast | Tech Lover</p>
        </header>
        <section class="competencies">
            <h2>What I'm Good At</h2>
            <ul>
                <h3>Backend Development</h3>
                <p>Hello there</p>
                <h3>Software Engineering</h3>
                <h3>API Design and Development</h3>
                <h3>Database Management</h3>
                <h3>Version Control (Git)</h3>
                <h3>Agile Methodologies</h3>
            </ul>
        </section>
        <section class="languages">
            <h2>Languages I Know</h2>
            <ul>
                <h3>JavaScript</h3>
                <h3>TypeScript</h3>
                <h3>Python</h3>
                <h3>Java</h3>
                <h3>C++</h3>
                <h3>HTML/CSS</h3>
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