const projects = [
  {
    title: "GreenAI Transformer Benchmark",
    description:
      "Benchmark comparant le temps d'exécution et les émissions CO₂ de calculs d'attention et de multiplication matricielle avec CodeCarbon.",
    tags: ["Python", "PyTorch", "CodeCarbon", "Green IT"],
  },
  {
    title: "Architecture Cloud 3-Tiers sur AWS",
    description:
      "Architecture web sécurisée avec VPC, EC2, RDS, Load Balancer, Auto Scaling, S3 et Bastion Host.",
    tags: ["AWS", "VPC", "EC2", "RDS", "Cloud"],
  },
  {
    title: "Segmentation de Tumeurs Cérébrales",
    description:
      "Projet de deep learning médical basé sur U-Net pour la segmentation d'images IRM du dataset BraTS.",
    tags: ["Deep Learning", "U-Net", "PyTorch", "Medical AI"],
  },
  {
    title: "Blockchain for IoT",
    description:
      "Étude académique sur l'utilisation de la blockchain pour sécuriser les objets connectés et les réseaux IoT.",
    tags: ["Blockchain", "IoT", "Security", "Research"],
  },
];

const skills = [
  "Python",
  "JavaScript",
  "React",
  "HTML/CSS",
  "Git/GitHub",
  "AWS",
  "EC2",
  "RDS",
  "S3",
  "Docker",
  "Kubernetes",
  "PyTorch",
  "Machine Learning",
  "Deep Learning",
  "CodeCarbon",
  "EcoIndex",
  "IoT",
  "Systèmes distribués",
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950 px-6 py-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="#home" className="text-xl font-bold">
            Ahmed<span className="text-cyan-400">.dev</span>
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2"
        >
          <div>
            <p className="mb-5 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Master IoT • Cloud • AI • Green IT
            </p>

            <h1 className="text-4xl font-extrabold md:text-6xl">
              Ahmed Mohamed Yislim
            </h1>

            <h2 className="mt-4 text-xl text-slate-300 md:text-2xl">
              Junior Full-Stack Developer & Master Student in IoT
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              Je conçois des projets académiques et techniques autour du
              développement web, du cloud computing, de l'intelligence
              artificielle, des systèmes distribués et du numérique
              éco-responsable.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-2xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 hover:bg-cyan-400"
              >
                Voir mes projets
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/20 px-6 py-3 font-medium hover:bg-white/10"
              >
                Me contacter
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl">
            <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-cyan-500 text-4xl font-black">
              AY
            </div>

            <h3 className="text-2xl font-bold">Profil technique</h3>

            <p className="mt-4 leading-7 text-slate-300">
              Étudiant motivé par la création de solutions utiles, propres et
              bien documentées, avec un intérêt particulier pour l'impact
              environnemental du numérique.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-slate-900 p-4">
                <p className="text-slate-400">Domaine</p>
                <p className="font-semibold">IoT & Cloud</p>
              </div>

              <div className="rounded-2xl bg-slate-900 p-4">
                <p className="text-slate-400">Focus</p>
                <p className="font-semibold">AI / Green IT</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-y border-white/10 bg-slate-900 px-6 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              About me
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Qui suis-je ?
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300">
              Je suis étudiant en Master IoT, passionné par le développement
              web, le cloud computing, l'intelligence artificielle et le
              numérique éco-responsable. J'aime construire des projets clairs,
              utiles et bien structurés, en combinant programmation,
              architecture cloud, analyse de performance et recherche
              académique.
            </p>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Projets sélectionnés
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
              >
                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="border-y border-white/10 bg-slate-900 px-6 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Skills
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Compétences techniques
            </h2>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-500/10 p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Travaillons ensemble
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              Je suis ouvert aux projets académiques, stages, collaborations
              techniques et opportunités dans le développement, le cloud, l'IoT,
              l'IA et le Green IT.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:deydahsd@gmail.com"
                className="rounded-2xl bg-cyan-500 px-5 py-3 font-medium text-slate-950 hover:bg-cyan-400"
              >
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/mohamed-yislim-4513b9272"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/MohamedYislim"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Ahmed Mohamed Yislim. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
