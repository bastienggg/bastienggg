const fs = require('fs');
const fetch = require('node-fetch');

const username = 'bastienggg';

async function generateReadme() {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
    const repos = await res.json();

    const projects = repos
        .filter(repo => !repo.fork)
        .slice(0, 5)
        .map(repo => `- [${repo.name}](${repo.html_url}) – ${repo.description || "Pas de description"}\n`)
        .join('');

    const content = `![Bannière de Bastien Guitard](./assets/banner.png)

# 👋 Hello, moi c'est **Bastien Guitard** !

🎓 Étudiant en BUT2 **Métiers du Multimédia et de l'Internet** (MMI) à l'IUT du Limousin, passionné par le **développement web**, l'**UI/UX**, et les projets interactifs.

---

## 🚀 À propos

Curieux, créatif, et toujours prêt à apprendre, j'aime créer des expériences web modernes et dynamiques. Je combine design et technique pour donner vie à des projets qui ont du sens.

- 🛠️ Spécialisé en développement web
- 📊 Visualisation de données & UI réactive
- 🎨 Esthétique + Performance = ❤️

---

## 🧠 Compétences techniques

**Langages & Back-end**  
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

**Frameworks & Outils**  
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![ApexCharts](https://img.shields.io/badge/ApexCharts-FF4560?style=for-the-badge&logo=apexcharts&logoColor=white)
![p5.js](https://img.shields.io/badge/p5.js-ED225D?style=for-the-badge&logo=processingfoundation&logoColor=white)

---

## 🔄 Derniers projets publics

${projects}

---

## 📈 Statistiques GitHub

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical)

---

## 📫 Me contacter

- 🔗 [LinkedIn – Bastien Guitard](https://fr.linkedin.com/in/bastien-guitard-30585329b)
- 📧 contact@bastienguitard.fr

---

> Merci pour la visite ! Si tu veux collaborer ou discuter, n'hésite pas à me contacter !`;

    fs.writeFileSync('README.md', content);
}

generateReadme(); 