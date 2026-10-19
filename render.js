// Builds the page from content.js. You shouldn't need to edit this.
(function () {
  const P = PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  document.title = `${P.name} | Portfolio`;
  $("brand").textContent = P.name;
  $("hero-eyebrow").textContent = P.eyebrow;
  $("hero-name").textContent = P.name;
  $("hero-tagline").textContent = P.tagline;
  $("resume-btn").href = P.resumeFile;
  $("footer").textContent = `© ${new Date().getFullYear()} ${P.name}`;

  const cover = (p) =>
    p.cover
      ? `<img class="thumb" src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy">`
      : `<div class="thumb placeholder">add a photo</div>`;
  const tags = (t) => `<div class="tags">${(t || []).map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>`;

  $("project-grid").innerHTML = P.projects
    .map(
      (p, i) => `
      <button class="card" data-i="${i}">
        ${cover(p)}
        <div class="card-body">
          <h3>${esc(p.title)}</h3>
          <div class="card-meta">${esc(p.when)}</div>
          <p>${esc(p.summary)}</p>
          ${tags(p.tags)}
        </div>
      </button>`
    )
    .join("");

  const dialog = $("project-dialog");
  $("project-grid").addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const p = P.projects[card.dataset.i];
    $("dialog-body").innerHTML = `
      ${p.cover ? `<img src="${esc(p.cover)}" alt="${esc(p.title)}" style="width:100%;max-height:360px;object-fit:cover">` : ""}
      <div class="dialog-inner">
        <h3>${esc(p.title)}</h3>
        <div class="card-meta">${esc(p.when)}${p.role ? " · " + esc(p.role) : ""}</div>
        <p>${esc(p.summary)}</p>
        ${tags(p.tags)}
        ${p.details?.length ? `<h4>What I did</h4><ul>${p.details.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
        ${p.photos?.length ? `<h4>Photos</h4><div class="gallery">${p.photos
          .map((ph) => `<figure><img src="${esc(ph.src)}" alt="${esc(ph.caption)}" loading="lazy"><figcaption>${esc(ph.caption)}</figcaption></figure>`)
          .join("")}</div>` : ""}
        ${p.link ? `<p style="margin-top:24px"><a class="btn" href="${esc(p.link)}" target="_blank" rel="noopener">View full report →</a></p>` : ""}
      </div>`;
    dialog.showModal();
    dialog.scrollTop = 0;
  });
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });

  $("experience-list").innerHTML = P.experience
    .map(
      (x) => `<li>
        <div class="when">${esc(x.when)}</div>
        <h3>${esc(x.title)} · ${esc(x.org)}</h3>
        <ul>${(x.bullets || []).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      </li>`
    )
    .join("");

  $("education-list").innerHTML = P.education
    .map(
      (e) => `<div class="edu">
        <div><h3>${esc(e.school)}</h3><p>${esc(e.degree)}</p>${e.note ? `<p>${esc(e.note)}</p>` : ""}</div>
        <div class="when" style="font:500 13px 'JetBrains Mono',monospace;color:var(--muted)">${esc(e.when)}</div>
      </div>`
    )
    .join("");

  $("skills-list").innerHTML = Object.entries(P.skills)
    .map(([group, items]) => `<div><h3>${esc(group)}</h3>${tags(items)}</div>`)
    .join("");

  $("contact-links").innerHTML = P.contact
    .map((c) => `<li><a class="btn" href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.label)}</a></li>`)
    .join("");
})();
