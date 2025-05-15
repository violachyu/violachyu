import"./modulepreload-polyfill-B5Qt9EMX.js";import{r as n}from"./resumeData-CiSRScbQ.js";function i(t){if(document.querySelectorAll(".section").forEach(e=>{e.style.display="none",e.classList.remove("active")}),document.querySelector(".section1").style.display="none",document.querySelector(".section1").classList.remove("active"),t==="Home")document.querySelector(".section1").style.display="block",setTimeout(()=>{document.querySelector(".section1").classList.add("active")},50);else{const e=document.getElementById(t);e.style.display="block",setTimeout(()=>{e.classList.add("active")},50)}document.querySelectorAll(".nav a").forEach(e=>{e.classList.remove("active"),e.getAttribute("href")===`#${t}`&&e.classList.add("active")})}function c(){const t=document.createElement("button");t.className="print-button",t.innerHTML='<i class="fa fa-print"></i>',t.addEventListener("click",()=>{document.querySelectorAll(".section, .section1").forEach(e=>{e.style.display="block",e.style.opacity="1",e.style.transform="none"}),setTimeout(()=>{window.print();const e=document.querySelector(".nav a.active");e&&i(e.getAttribute("href").substring(1))},100)}),document.body.appendChild(t)}function s(){document.querySelectorAll(".education-item, .experience-item, .skill-category").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-5px)",e.style.boxShadow="0 5px 15px rgba(0, 0, 0, 0.3)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.boxShadow="none"})})}function l(){const t=document.querySelector(".education-list");t.innerHTML=n.education.map(e=>`
        <div class="education-item">
            <h3>${e.degree}</h3>
            <h4>${e.institution}</h4>
            <p class="period">${e.period}</p>
            <p class="details">${e.details}</p>
        </div>
    `).join("")}function r(){const t=document.querySelector(".experience-list");t.innerHTML=n.experience.map(e=>`
        <div class="experience-item">
            <h3>${e.title}</h3>
            <h4>${e.company}</h4>
            <p class="period">${e.period}</p>
            <ul class="responsibilities">
                ${e.responsibilities.map(o=>`<li>・${o}</li>`).join("")}
            </ul>
        </div>
    `).join("")}function a(){const t=document.querySelector(".skills-list");t.innerHTML=n.skills.map(e=>`
        <div class="skill-category">
            <h3>${e.category}</h3>
            <div class="skill-items">
                ${e.items.map(o=>`<span class="skill-item">${o}</span>`).join("")}
            </div>
        </div>
    `).join("")}function u(){document.querySelector(".name").innerHTML=n.name,document.querySelector(".role").innerHTML=n.role,document.querySelector(".about").innerHTML=n.about,document.querySelector(".contact-info-phone").textContent=n.phone,document.querySelector(".contact-info-email").textContent=n.email,document.querySelector(".contact-info-location").textContent=n.location;const t=document.querySelectorAll(".fa-linkedin-square"),e=document.querySelectorAll(".fa-github");t.forEach(o=>{o.parentElement.href=n.linkedin}),e.forEach(o=>{o.parentElement.href=n.github}),l(),r(),a()}document.addEventListener("DOMContentLoaded",()=>{u(),document.querySelectorAll(".nav a").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const o=t.getAttribute("href").substring(1);i(o)})}),c(),s(),i("Home")});
