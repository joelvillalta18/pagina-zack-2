import { socialNetworks, teams } from './data/data.js';

const socialNetworksList = document.getElementById('socialNetworksList');
const teamsList = document.getElementById('teamsList');

socialNetworks.forEach(element => {
  const { id, href, title, content } = element;
  socialNetworksList.innerHTML += `
    <li key="${id}">
      <a
        href="${href}"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
        title="${title}"
      >
        ${content}
      </a>
    </li>
  `;
});

teams.forEach(element => {
  const { id, title, subtitle, description, image, slug } = element;
  teamsList.innerHTML += `
    <li
      class="card"
      key="${id}"
    >
      <img
        src="${image}"
        alt="${title}" class="img img--card" width="256" height="256" />
      <div class="card__body">
        <h3 class="card__title">${title}</h3>
        <h4 class="card__subtitle">${subtitle}</h4>
        <p class="card__text">${description}</p>
        <a href="${slug}" class="button">Proyectos</a>
      </div>
    </li>
  `
})