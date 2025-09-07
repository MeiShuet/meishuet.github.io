// Data for experiences
const experienceData = {
  exp1: {
    title: "Environmental Monitoring Projects",
    projects: [
      {
        name: "Coastal Water Quality Survey",
        role: "Led field sampling across 5 sites and performed nutrient and DO analysis."
      },
      {
        name: "Industrial Effluent Monitoring",
        role: "Designed monitoring framework and assessed compliance with environmental standards."
      },
      {
        name: "Biodiversity & Habitat Assessment",
        role: "Integrated GIS data to map sensitive habitats near project sites."
      }
    ]
  }
};

// Modal elements
const modal = document.getElementById("experienceModal");
const modalTitle = document.getElementById("modalTitle");
const modalProjects = document.getElementById("modalProjects");
const closeBtn = document.querySelector(".modal .close");

// Open modal when card is clicked
document.querySelectorAll(".experience-card").forEach(card => {
  card.addEventListener("click", () => {
    const expKey = card.getAttribute("data-experience");
    const exp = experienceData[expKey];

    modalTitle.textContent = exp.title;
    modalProjects.innerHTML = exp.projects.map(p => `
      <div class="project">
        <h4>${p.name}</h4>
        <p><strong>My Role:</strong> ${p.role}</p>
      </div>
    `).join("");

    modal.style.display = "block";
  });
});

// Close modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; }
