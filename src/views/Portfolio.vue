<template>
  <div class="portfolio-page fade-in">
    <header class="header">
      <h1>Jonathan Emminizer</h1>
      <p>Backend Developer | Software Engineer</p>
    </header>
    <section class="about-me">
      <h2>About Me</h2>
      <p>
        Hey! I'm Jonathan, a backend developer from Virginia getting a Bachelor's degree in Computer Science at The University of Maryland. I'm very passionate about robotics, physics, and all things tech. I have experience in backend development, software engineering, and API design. I love working on projects that challenge me and allow me to learn new languages. In my free time, I work on personal projects, play video games, and work on robotics. I also enjoy spending time with my family and friends, and I love to travel. I'm always looking for new opportunities to grow and learn, so feel free to reach out if you want to connect or collaborate on a project!
      </p>
    </section>
    <section class="competencies">
      <h2>What I'm Good At</h2>
      <ul>
        <li>Backend Development</li>
        <li>Software Engineering</li>
        <li>API Design and Development</li>
        <li>Database Management</li>
        <li>Version Control (Git)</li>
        <li>Agile Methodologies</li>
      </ul>
    </section>
    <section class="languages">
      <h2>Languages I Know</h2>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>Java</li>
        <li>C++</li>
        <li>HTML/CSS</li>
        </ul>
    </section>
    <section class="projects">
      <h2>My Projects</h2>
      <div class="project-list">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <h3>
            <a :href="project.url" target="_blank" rel="noopener noreferrer">
              {{ project.title }}
            </a>
          </h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </section>
    <section class="contact">
      <h2>Contact Me</h2>
      <div class="contact-buttons">
        <button @click="openLink('mailto:jonathan.emminizer@yahoo.com')">Email Me</button>
        <button @click="openLink('https://linkedin.com/in/jemminiz')">LinkedIn</button>
        <button @click="openLink('https://github.com/jemminiz')">GitHub</button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Portfolio',
  setup() {
    const projects = [
        { id: 1, title: 'Zeno', description: 'A budget and account aggregation app', url: 'https://github.com/jemminiz/Zeno' },
        { id: 2, title: 'EZ-Template', description: 'Helped maintain a VEX Robotics template used worldwide', url: 'https://github.com/EZ-Robotics/EZ-Template' },
        { id: 3, title: 'SPOT', description: 'A Scouting Network used by FRC Team 4472 SuperNOVA, created by 3061 HuskieRobotics', url: 'https://example.com/project-three' },
        { id: 4, title: 'Project Four', description: 'Description of project four.', url: 'https://example.com/project-four' },
        { id: 5, title: 'Project Five', description: 'Description of project five.', url: 'https://example.com/project-five' },
        { id: 6, title: 'Project Six', description: 'Description of project six.', url: 'https://example.com/project-six' },
        { id: 7, title: 'Project Seven', description: 'Description of project seven.', url: 'https://example.com/project-seven' },
        { id: 8, title: 'Project Eight', description: 'Description of project eight.', url: 'https://example.com/project-eight' },
        { id: 9, title: 'Project Nine', description: 'Description of project nine.', url: 'https://example.com/project-nine' },
        { id: 10, title: 'Project Ten', description: 'Description of project ten.', url: 'https://example.com/project-ten' },
    ];

    const openLink = (url: string) => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    return { projects, openLink };
  },
});
</script>

<style scoped>
.portfolio-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  min-height: 100vh;
  opacity: 0; /* Start hidden */
  animation: fadeIn 1s ease-in-out forwards; /* Fade-in animation */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 48px;
  margin-bottom: 10px;
}

.header p {
  font-size: 18px;
}

.about-me {
  width: 100%;
  max-width: 800px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3); /* Added border below about me section */
  padding-bottom: 20px; /* Added spacing below the border */
  margin-bottom: 20px; /* Added spacing between about me and projects */
}

.about-me h2 {
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
}

.about-me p {
  font-size: 18px;
  line-height: 1.6;
}

.competencies {
  width: 100%;
  max-width: 800px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3); /* Added border below competencies section */
  padding-bottom: 20px; /* Added spacing below the border */
  margin-bottom: 20px; /* Added spacing between competencies and projects */
}

.competencies h2 {
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
}

.languages {
  width: 100%;
  max-width: 800px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3); /* Added border below languages section */
  padding-bottom: 20px; /* Added spacing below the border */
  margin-bottom: 20px; /* Added spacing between languages and projects */
}

.languages h2 {
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
}

.projects {
  width: 100%;
  max-width: 800px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3); /* Added border below project list */
  padding-bottom: 20px; /* Added spacing below the border */
  margin-bottom: 20px; /* Added spacing between projects and contact section */
}

.projects h2 {
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.project-card {
  background-color: white;
  color: #2575fc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.project-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.project-card h3 a {
  color: #2575fc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.project-card h3 a:hover {
  color: #6a11cb;
}

.project-card p {
  font-size: 16px;
}

.contact {
  position: sticky;
  bottom: 20px; /* Positioned slightly above the bottom of the screen */
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  text-align: center;
  padding: 15px 20px; /* Adjusted padding for a compact look */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 20px; /* Rounded corners */
  max-width: 90%; /* Limit the width */
  width: 400px; /* Fixed width for consistency */
  z-index: 1000; /* Ensure it stays above other elements */
}

.contact h2 {
  font-size: 18px; /* Smaller font size for compact design */
  margin: 0px 0 10px; /* Reduced margin above the heading */
}

.contact-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.contact-buttons button {
  background-color: white;
  color: #2575fc;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.contact-buttons button:hover {
  background-color: #6a11cb;
  color: white;
}
</style>
