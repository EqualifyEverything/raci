import './style.css'
import { areas, people, roleDefinitions } from './data.js'

const container = document.getElementById('raci-container');
const legendContainer = document.getElementById('legend-grid');
const viewToggle = document.getElementById('view-toggle');
const personFilter = document.getElementById('person-filter');

let currentView = 'grid';
let currentPersonFilter = 'all';

function getFilteredAreas() {
  if (currentPersonFilter === 'all') return areas;
  return areas.filter(area =>
    area.r.includes(currentPersonFilter) ||
    area.a.includes(currentPersonFilter) ||
    area.c.includes(currentPersonFilter) ||
    area.i.includes(currentPersonFilter)
  );
}

function render() {
  if (currentView === 'grid') renderGrid();
  else renderTable();
}

function renderGrid() {
  container.className = 'view-grid';
  const filtered = getFilteredAreas();

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted);">No areas found for this person.</div>`;
    return;
  }

  container.innerHTML = filtered.map(area => `
    <article class="raci-card">
      <h3>${area.label} ${area.tbd ? '<span style="font-size: 0.7rem; vertical-align: middle; background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; margin-left: 8px; opacity: 0.7;">DETAILED ASSIGNMENTS PENDING</span>' : ''}</h3>
      
      ${renderRoleGroup('Responsible', area.r, 'r')}
      ${renderRoleGroup('Accountable', area.a, 'a')}
      ${renderRoleGroup('Consulted', area.c, 'c')}
      ${renderRoleGroup('Informed', area.i, 'i')}
    </article>
  `).join('');
}

function renderRoleGroup(label, personIds, roleKey) {
  if (!personIds || personIds.length === 0) return '';

  const names = personIds.map(id => {
    const person = people.find(p => p.id === id);
    const isFiltered = currentPersonFilter !== 'all' && currentPersonFilter === id;
    return `<span class="name-tag ${isFiltered ? 'highlight' : ''}">${person ? person.name : id}</span>`;
  }).join('');

  return `
    <div class="role-group">
      <div class="role-label">
        <i style="background: var(--accent-${roleKey})"></i>
        ${label}
      </div>
      <div class="names-list">${names}</div>
    </div>
  `;
}

function renderTable() {
  container.className = 'view-table';
  const filteredAreas = getFilteredAreas();

  // Show all people in table, but maybe highlight the filtered one
  const headers = ['Area', ...people.map(p => p.name)];

  const rows = filteredAreas.map(area => {
    const cells = people.map(person => {
      let role = '';
      if (area.r.includes(person.id)) role = 'R';
      else if (area.a.includes(person.id)) role = 'A';
      else if (area.c.includes(person.id)) role = 'C';
      else if (area.i.includes(person.id)) role = 'I';

      if (!role) return '<td></td>';

      const isFiltered = currentPersonFilter !== 'all' && currentPersonFilter === person.id;

      return `
        <td>
          <span class="raci-badge ${isFiltered ? 'glow' : ''}" style="background: var(--accent-${role.toLowerCase()})" title="${roleDefinitions[role].title}">
            ${role}
          </span>
        </td>
      `;
    });

    return `
      <tr>
        <td style="font-weight: 600; color: white;">${area.label}</td>
        ${cells.join('')}
      </tr>
    `;
  });

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          ${headers.map(h => {
    const person = people.find(p => p.name === h);
    const isFiltered = person && currentPersonFilter === person.id;
    return `<th class="${isFiltered ? 'header-highlight' : ''}">${h}</th>`;
  }).join('')}
        </tr>
      </thead>
      <tbody>
        ${rows.join('')}
      </tbody>
    </table>
  `;
}

function renderLegend() {
  legendContainer.innerHTML = Object.entries(roleDefinitions).map(([key, def]) => `
    <div class="legend-item">
      <h4><div class="circle" style="background: ${def.color}"></div> ${def.title} (${key})</h4>
      <p>${def.description}</p>
    </div>
  `).join('');
}

function populatePersonFilter() {
  people.forEach(person => {
    const option = document.createElement('option');
    option.value = person.id;
    option.textContent = person.name;
    personFilter.appendChild(option);
  });
}

// Event Listeners
viewToggle.addEventListener('click', (e) => {
  if (e.target.classList.contains('tab-btn')) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    currentView = e.target.dataset.view;
    render();
  }
});

personFilter.addEventListener('change', (e) => {
  currentPersonFilter = e.target.value;
  render();
});

// Init
populatePersonFilter();
render();
renderLegend();
