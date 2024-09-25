// skills.json
const skillsData = [
    { "title": "C++", "imageSrc": "../assets/skills/c.svg" },
    { "title": "JavaScript", "imageSrc": "../assets/skills/javascript-js.svg" },
    { "title": "HTML", "imageSrc": "../assets/skills/html.png" },
    { "title": "CSS", "imageSrc": "../assets/skills/css.png" },
    { "title": "React", "imageSrc": "../assets/skills/react.png" },
    { "title": "Tailwind", "imageSrc": "../assets/skills/tailwind-css.svg" },
    { "title": "GitHub", "imageSrc": "../assets/skills/github.svg" },
    { "title": "Node.js", "imageSrc": "../assets/skills/node.png" },
    { "title": "PostgreSQL", "imageSrc": "../assets/skills/graphql.png" },
    { "title": "Figma", "imageSrc": "../assets/skills/figma.png" },
    { "title": "After Effects", "imageSrc": "../assets/skills/adobe-premiere.svg" },
    { "title": "Premiere Pro", "imageSrc": "../assets/skills/after-effects.png" }
];

// history.json
const historyData = [
    {
        "role": "Mentor",
        "organisation": "ITS MUN Club",
        "startDate": "September, 2024",
        "endDate": "Present",
        "experiences": ["Training for Model United Nations competitions."],
        "imageSrc": "../assets/history/itsmun.png"
    },
    {
        "role": "Department Buddy",
        "organisation": "ITS Surabaya",
        "startDate": "August, 2024",
        "endDate": "December, 2024",
        "experiences": ["Assisting international exchange students with academic and daily activities"],
        "imageSrc": "../assets/history/ITSSURABAYA.png"
    },
    {
        "role": "Frontend Developer",
        "organisation": "FLEXOO",
        "startDate": "May, 2024",
        "endDate": "Present",
        "experiences": ["Developing website frontend for potential FLEXOO Softwarehouse clients. Continuing learning new front-end technologies."],
        "imageSrc": "../assets/history/flexoo.png"
    },
    {
        "role": "Media Production Staff",
        "organisation": "Schematics ITS",
        "startDate": "March, 2024",
        "endDate": "Present",
        "experiences": ["Documenting & editing videos for Schematics events"],
        "imageSrc": "../assets/history/schematics.png"
    }
];

// Function to generate skills HTML
function generateSkillsHTML(skills) {
    return skills.map(skill => `
      <div class="skill flex flex-col items-center text-center p-1">
        <div class="skillImageContainer bg-gray-600 rounded-full p-2">
          <img src="${skill.imageSrc}" alt="${skill.title}"  />
        </div>
        <p class="mt-2 text-white text-lg font-mono">${skill.title}</p> <!-- Added font-mono -->
      </div>
    `).join('');
}

// Function to generate history HTML
function generateHistoryHTML(history) {
    return history.map(item => `
      <li class="historyItem flex items-start bg-[#323949] rounded-lg p-4 mb-4">
        <img src="${item.imageSrc}" alt="${item.organisation} Logo"/>
        <div class="historyItemDetails">
          <h3 class="text-white font-mono font-semibold text-lg">${item.role}, ${item.organisation}</h3> <!-- Added font-mono -->
          <p class="text-gray-300 font-mono">${item.startDate} - ${item.endDate}</p> <!-- Added font-mono -->
          <ul class="list-disc list-inside text-gray-200 font-mono"> <!-- Added font-mono -->
            ${item.experiences.map(exp => `<li>${exp}</li>`).join('')}
          </ul>
        </div>
      </li>
    `).join('');
}

// Generate final HTML
const skillsHTML = generateSkillsHTML(skillsData);
const historyHTML = generateHistoryHTML(historyData);

// Insert generated HTML into the DOM
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.skills').innerHTML = skillsHTML;
    document.querySelector('.history').innerHTML = historyHTML;
});



