import heroImage from './assets/hero.png'
import './App.css'

type Project = {
  name: string
  description: string
  href: string
  tags: string[]
}

const projects: Project[] = [
  {
    name: 'forklift',
    description:
      'Practical infrastructure lifting tools for teams that need repeatable delivery without heavyweight platform overhead.',
    href: 'https://github.com/opencomputinggarage/forklift',
    tags: ['Infrastructure', 'Automation'],
  },
  {
    name: 'cargo-scanner',
    description:
      'A compact scanner project for improving visibility across software cargo, dependencies, and supply-chain surfaces.',
    href: 'https://github.com/opencomputinggarage/cargo-scanner',
    tags: ['Security', 'Inventory'],
  },
  {
    name: 'containers',
    description:
      'Container-focused experiments and utilities for reproducible open computing environments.',
    href: 'https://github.com/opencomputinggarage/containers',
    tags: ['Containers', 'Runtime'],
  },
  {
    name: 'snowflake-exporter',
    description:
      'Exporter work for making Snowflake operations easier to observe from standard monitoring systems.',
    href: 'https://github.com/opencomputinggarage/snowflake-exporter',
    tags: ['Observability', 'Snowflake'],
  },
]

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src={heroImage}
          alt="A compact open infrastructure workshop with compute nodes, server racks, and engineering diagrams."
        />
        <div className="hero__shade" />
        <header className="site-header">
          <a className="brand" href="https://github.com/opencomputinggarage">
            <span className="brand__mark" aria-hidden="true">
              OCG
            </span>
            <span>Open Computing Garage</span>
          </a>
          <nav className="nav" aria-label="Primary navigation">
            <a href="#mission">Mission</a>
            <a href="#projects">Projects</a>
            <a href="#principles">Principles</a>
            <a href="https://github.com/opencomputinggarage">GitHub</a>
          </nav>
        </header>

        <div className="hero__content">
          <p className="eyebrow">Open infrastructure, practical tooling</p>
          <h1 id="hero-title">Open Computing Garage</h1>
          <p className="mission-line">
            Lowering the barrier so robust infrastructure can be built without
            massive capital.
          </p>
          <p className="hero__copy">
            A public workbench for cloud-native tooling, automation, containers,
            observability, and operational building blocks that small teams can
            inspect, run, and extend.
          </p>
          <div className="hero__actions" aria-label="Primary actions">
            <a className="button button--primary" href="#mission">
              Read mission
            </a>
            <a
              className="button button--secondary"
              href="https://github.com/opencomputinggarage"
            >
              Open GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="intro" id="mission" aria-label="Organization mission">
        <div>
          <p className="section-kicker">Mission</p>
          <h2>
            Lowering the barrier so robust infrastructure can be built without
            massive capital.
          </h2>
        </div>
        <div className="mission-stack">
          <p>
            Open Computing Garage treats infrastructure as a craft that should
            be reachable: clear enough to learn, cheap enough to try, and sturdy
            enough to run real systems.
          </p>
          <p>
            The organization focuses on open source components that reduce the
            cost of getting started while preserving the engineering discipline
            needed for production work.
          </p>
        </div>
      </section>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="section-kicker">Public repositories</p>
          <h2 id="projects-title">Tools shaped by the mission</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <a className="project-card" href={project.href} key={project.name}>
              <span className="project-card__name">{project.name}</span>
              <p>{project.description}</p>
              <span className="tag-row">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section
        className="principles"
        id="principles"
        aria-labelledby="principles-title"
      >
        <div className="section-heading">
          <p className="section-kicker">Principles</p>
          <h2 id="principles-title">Garage rules</h2>
        </div>
        <div className="principle-list">
          <article>
            <span>01</span>
            <h3>Make the first step affordable</h3>
            <p>
              Keep prototypes and early operations within reach before large
              platform investment is justified.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Keep the system understandable</h3>
            <p>
              Favor visible contracts, plain automation, and feedback loops that
              help operators reason under pressure.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Build parts others can reuse</h3>
            <p>
              Publish focused components that can be picked up independently,
              audited, and improved in public.
            </p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <span>Open Computing Garage</span>
        <a href="https://github.com/opencomputinggarage">
          github.com/opencomputinggarage
        </a>
      </footer>
    </main>
  )
}

export default App
