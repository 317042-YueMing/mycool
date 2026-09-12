const projects = [
  {
    number: "01", type: "Graduation Project", status: "Completed / Legacy Project",
    title: "LSTM Movie Review Sentiment Analysis",
    description: "基于中文影评数据完成文本预处理、LSTM 情感分类模型训练，并使用 Flask 封装预测接口，通过 Web 页面展示情感分类结果和置信度。",
    tags: ["Python", "LSTM", "NLP", "Flask", "Machine Learning"],
    note: "Original source archive unavailable.",
  },
  {
    number: "02", type: "School Training Project", status: "Learning Project",
    title: "Local LLM Chatbot Practice",
    description: "在学校实训中学习本地大模型部署和聊天机器人开发流程，接触 Ollama、DeepSeek/Qwen、本地模型 API 和聊天界面开发。",
    tags: ["Python", "Ollama", "LLM", "DeepSeek", "Streamlit"],
    note: "学校实训中的学习实践，持续积累对本地模型与应用连接的理解。",
  },
  {
    number: "03", type: "Personal Project", status: "In Development",
    title: "Mycool AI Engineer Portfolio",
    description: "为求职和长期技术积累开发的个人技术展示网站，使用 Next.js、TypeScript 和 Tailwind CSS 构建。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Git"],
    note: "You’re here — 当前正在持续开发的个人项目。",
  },
];
const labs = ["Intelligent Speech Synthesis", "Digital Image Processing", "Machine Learning", "STM32 Embedded Development", "6-Axis Robotic Arm Control", "Conveyor Object Detection & Sorting"];
const skills = [
  { title: "Programming", items: ["Python", "TypeScript", "JavaScript"] },
  { title: "AI / Data", items: ["PyTorch", "OpenCV", "NumPy", "Machine Learning", "NLP"] },
  { title: "Backend / Web", items: ["Flask", "FastAPI", "HTTP API", "Next.js"] },
  { title: "Tools", items: ["Git", "VS Code", "Windows", "basic Linux"] },
];
const navigation = ["Home", "Projects", "Skills", "About", "Contact"];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">跳到主要内容</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a href="#home" className="wordmark" aria-label="Mycool 首页">mycool<span aria-hidden="true">.</span></a>
          <nav aria-label="主导航">
            {navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="home" className="shell hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> A PORTFOLIO IN PROGRESS</p>
            <h1 id="hero-title">刘文安<span>Liu Wen&apos;an</span></h1>
            <p className="hero-role">AI / Python<br className="desktop-break" /> Application Developer<span className="accent">.</span></p>
            <p className="hero-description">人工智能本科生，正在通过真实项目持续学习<br className="desktop-break" /> AI 应用开发、Python 和软件工程。</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">View Projects <span aria-hidden="true">↗</span></a>
              <a href="#contact" className="button button-secondary">Contact Me <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <aside className="focus-card" aria-label="当前学习与开发方向">
            <div className="focus-top"><span className="eyebrow">CURRENT FOCUS</span><span className="mini-mark" aria-hidden="true">[ / ]</span></div>
            <p className="focus-title">从理解原理，<br />到做出应用。</p>
            <p className="focus-description">Learning by building.<br />一次实验，一段代码，一个真实项目。</p>
            <div className="focus-steps">
              <div><span>01</span><p>模型实验<small>Explore & understand</small></p></div>
              <div><span>02</span><p>接口开发<small>Connect & implement</small></p></div>
              <div><span>03</span><p>Web 应用<small>Build & iterate</small></p></div>
            </div>
            <div className="focus-bottom"><span className="status-dot" aria-hidden="true" /> 持续学习 · 持续实践</div>
          </aside>
          <div className="hero-foot"><span>Python / AI Applications / Software Engineering</span><a href="#projects">Explore the work <span aria-hidden="true">↓</span></a></div>
        </section>

        <section id="projects" className="section section-tinted" aria-labelledby="projects-title">
          <div className="shell">
            <div className="section-heading"><div><p className="eyebrow">01 / SELECTED PROJECTS</p><h2 id="projects-title">把学习落在实际项目里<span className="accent">。</span></h2></div><p>毕业设计、课程实训与个人开发。<br />如实记录做过的事，以及正在做的事。</p></div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-top"><span className="project-number">/{project.number}</span><span className={`project-status ${project.number === "03" ? "status-active" : ""}`}>{project.status}</span></div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="tags" aria-label="项目技术栈">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <p className="project-note">{project.note}</p>
                </article>
              ))}
            </div>
            <div className="labs-heading"><h3>Coursework / Labs</h3><p>基础课程设计与实验，用于理解 AI、计算机视觉、嵌入式和机器人控制的基本原理。</p></div>
            <ul className="labs-grid">{labs.map((lab, index) => <li key={lab}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{lab}</li>)}</ul>
          </div>
        </section>

        <section id="skills" className="shell section" aria-labelledby="skills-title">
          <div className="section-heading"><div><p className="eyebrow">02 / TOOLKIT</p><h2 id="skills-title">正在积累的技术能力</h2></div><p>在学习和实践中逐步深入。<br />技术名称不代表专家级熟练度。</p></div>
          <div className="skills-grid">{skills.map((group, index) => <article className="skill-group" key={group.title}><span className="skill-index" aria-hidden="true">0{index + 1}</span><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-title">
          <div className="shell about-grid">
            <div><p className="eyebrow">03 / ABOUT ME</p><h2 id="about-title">保持好奇，<br />认真把事情做出来。</h2></div>
            <div className="about-copy"><p>我是刘文安，一名人工智能专业本科生，关注 Python、AI 应用开发、机器学习与软件工程。</p><p>希望通过实际项目，持续提高从模型实验、接口开发到 Web 应用实现的完整工程能力。比起罗列技术名词，我更希望能讲清楚：问题是什么、如何实现，以及哪些地方还需要改进。</p><ul className="principles"><li>持续学习</li><li>实际开发</li><li>工程思维</li></ul></div>
          </div>
        </section>

        <section id="contact" className="shell section contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">04 / GET IN TOUCH</p>
          <h2 id="contact-title">从一次交流开始<span className="accent">。</span></h2>
          <p className="contact-intro">欢迎就求职机会、项目实践与技术学习联系我。</p>
          <a className="email-link" href="mailto:15735434286@163.com">15735434286@163.com <span aria-hidden="true">↗</span></a>
          <div className="contact-resources"><button type="button" disabled aria-describedby="resources-note">GitHub <span aria-hidden="true">↗</span></button><button type="button" disabled aria-describedby="resources-note">Resume <span aria-hidden="true">↓</span></button><p id="resources-note">GitHub 链接与正式简历确认后开放。</p></div>
        </section>
      </main>
      <footer className="site-footer"><div className="shell footer-inner"><p>© 2026 Liu Wen&apos;an</p><p>Built with Next.js &amp; TypeScript</p><a href="#home">Back to top <span aria-hidden="true">↑</span></a></div></footer>
    </>
  );
}
