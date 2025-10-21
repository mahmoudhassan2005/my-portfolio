import React, { useState } from "react";
import projects from "../data/projects";

function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section className="projects container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.id} className="project-card" onClick={() => setOpen(p)}>
            <div className="project-thumb" style={{backgroundImage:`url(${p.image})`}} />
            <div className="project-body">
              <h3>{p.title}</h3>
              <p className="muted">{p.short}</p>
            </div>
          </article>
        ))}
      </div>

      {open && (
        <div className="modal" onClick={() => setOpen(null)}>
          <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
            <button className="close" onClick={()=>setOpen(null)}>×</button>
            <div className="modal-grid">
              <img src={open.image} alt={open.title} />
              <div>
                <h3>{open.title}</h3>
                <p>{open.description}</p>
                <div className="modal-actions">
                  {open.github && <a className="btn outline" href={open.linkedin} target="_blank" rel="noreferrer">Linkedin</a>}
                  {open.live && <a className="btn primary" href={open.live} target="_blank" rel="noreferrer">Live</a>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;