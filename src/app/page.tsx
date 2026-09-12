const navigation = [
  ["home", "首页"], ["experience", "工作经历"], ["projects", "项目经历"],
  ["skills", "技能与工具"], ["coursework", "课程实践"], ["about", "关于我"], ["contact", "联系方式"],
];
const skills = [
  { title: "编程语言", tags: ["Python", "TypeScript", "JavaScript"], description: "主要用于 AI 实验、Web 应用和个人项目开发。" },
  { title: "AI / 机器学习", tags: ["PyTorch", "OpenCV", "NLP", "LSTM", "Machine Learning"], description: "通过毕业设计和课程实践接触模型训练、文本处理与计算机视觉基础。" },
  { title: "Web / API", tags: ["Next.js", "Flask", "FastAPI", "REST API"], description: "用于构建 AI 应用界面、后端服务和模型接口，并持续学习相关工程实践。" },
  { title: "工程工具", tags: ["Git", "VS Code", "Windows", "Linux 基础", "AI Agent 辅助开发"], description: "目前正在建立规范的 Git、Agent、测试和项目开发工作流。" },
];
const labs = ["智能语音合成", "数字图像处理", "机器学习", "STM32 嵌入式开发", "六轴机械臂控制", "模拟传送带货物识别与分拣"];
function Tags({ items }: { items: string[] }) {
  return <ul className="tags" aria-label="相关技术">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}
function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="section-label"><span>{number}</span>{children}</p>;
}
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">跳到主要内容</a>
      <header className="site-header"><div className="shell header-inner">
        <a href="#home" className="wordmark" aria-label="Mycool 首页">mycool<span>.</span><span className="wordmark-caption">刘文安的技术作品集</span></a>
        <nav aria-label="主导航">{navigation.map(([id,label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      </div></header>
      <main id="main-content">
        <section id="home" className="hero shell" aria-labelledby="hero-title">
          <div className="hero-overline"><p>刘文安 <span>/ AI · Python · 软件开发</span></p><span className="edition">MYCOOL / 2026</span></div>
          <div className="hero-body">
            <div className="hero-copy"><h1 id="hero-title"><span>把 AI 想法，</span><span>做成真正</span><span className="hero-last">能运行的东西<span className="accent">。</span></span></h1>
              <p className="hero-role">AI / Python 应用开发方向</p>
              <p className="hero-description">人工智能专业本科生，有机器人二次开发实际工作经历。<br className="desktop-break" />正在通过真实项目持续提升 AI 应用开发、Python 与软件工程能力。</p>
              <div className="hero-actions"><a href="#projects" className="button primary">查看我的项目 <span aria-hidden="true">↗</span></a><a href="#contact" className="button secondary">联系我 <span aria-hidden="true">→</span></a></div>
            </div>
            <aside className="hero-aside" aria-label="实践方向"><div className="system-mark" aria-hidden="true"><span>[</span><i /><span>]</span></div><p className="aside-label">从想法到实现</p><ol><li><span>01</span>模型与数据</li><li><span>02</span>软件与接口</li><li><span>03</span>设备与应用</li></ol><p className="aside-note">在真实问题中，<br />建立完整的工程视角。</p></aside>
          </div>
          <div className="hero-bottom"><p><span className="status-dot" />正在寻找 AI / Python / 软件开发相关机会</p><a href="#experience">了解我的实践经历 <span aria-hidden="true">↓</span></a></div>
        </section>
        <section id="experience" className="section experience-section" aria-labelledby="experience-title"><div className="shell">
          <SectionLabel number="01">工作经历</SectionLabel>
          <div className="experience-grid"><div className="experience-heading"><p className="date">2026.06 — 2026.09</p><h2 id="experience-title">机器人二次开发工程师</h2><p className="company">安徽国科赛安科技有限公司</p><span className="small-label">真实设备 · 实际工程环境</span></div>
          <div className="experience-detail"><p className="experience-lead">让软件在实际设备上运行，<br />也在现场理解工程问题。</p><ul className="responsibilities"><li>参与机器人相关软件二次开发、设备联调与问题排查。</li><li>参与四足机器人功能与运行稳定性调试。</li><li>结合实际设备进行软件、接口和机器人运行问题定位。</li><li>在实际工程环境中接触 Python、设备接口、调试与测试流程。</li></ul><Tags items={["Python", "机器人二次开发", "设备联调", "问题定位", "调试与测试"]} /></div></div>
        </div></section>
        <section id="projects" className="shell section" aria-labelledby="projects-title">
          <SectionLabel number="02">项目经历</SectionLabel><div className="section-heading"><h2 id="projects-title">做过的项目，正在走的路。</h2><p>毕业设计、个人开发与学校实训。<br />每一项，都有明确的实践边界。</p></div>
          <article className="featured-project"><div className="project-meta"><span className="project-index">01 / 毕业设计</span><span className="status">已完成 / 历史项目</span></div>
            <div className="featured-grid"><div><h3>基于 LSTM 的<br />影评情感分析系统</h3><p className="project-description">完成中文影评数据预处理、LSTM 情感分类模型训练，使用 Flask 封装预测接口，并通过 Web 页面展示情感分类结果和置信度。</p><Tags items={["Python", "LSTM", "NLP", "Flask", "Machine Learning"]} /></div>
            <div className="pipeline" aria-label="项目实现流程"><p className="pipeline-label">从文本到预测结果</p><ol><li><span>输入</span><strong>中文影评</strong><small>文本预处理</small></li><li><span>模型</span><strong>LSTM 情感分类</strong><small>模型训练与预测</small></li><li><span>应用</span><strong>Flask → Web</strong><small>分类结果与置信度</small></li></ol></div></div>
            <p className="archive-note"><span aria-hidden="true">↳</span> 原项目源码存档目前已遗失，保留毕业设计与答辩材料。</p>
          </article>
          <article className="project-row"><span className="row-number">02</span><div><div className="row-meta"><span>个人项目</span><span className="status active">持续开发中</span></div><h3>Mycool AI Engineer Portfolio</h3><p>面向个人求职和长期技术积累开发的技术作品集网站，用于展示真实项目、工程实践和学习过程。</p><p className="project-note">本网站本身，就是正在持续维护的真实工程项目。</p></div><div className="row-stack"><Tags items={["Next.js", "TypeScript", "Tailwind CSS", "Git"]} /><span className="site-indicator"><span className="status-dot" />你正在浏览这个项目</span></div></article>
          <article className="project-row"><span className="row-number">03</span><div><div className="row-meta"><span>学校实训</span><span className="status">学习项目</span></div><h3>本地大模型聊天机器人实践</h3><p>在学校实训中学习本地大模型部署和聊天机器人开发流程，接触 Ollama、DeepSeek/Qwen、本地模型 API 与聊天界面开发。</p></div><div className="row-stack"><Tags items={["Python", "Ollama", "LLM", "DeepSeek", "Streamlit"]} /></div></article>
        </section>
        <section id="skills" className="section skills-section" aria-labelledby="skills-title"><div className="shell"><SectionLabel number="03">技能与工具</SectionLabel><div className="section-heading"><h2 id="skills-title">技术不只是名字，<br />也是解决问题的方式。</h2><p>在项目中使用，在实践中理解。<br />仍在学习，也持续建立更扎实的基础。</p></div><div className="skills-grid">{skills.map((skill,index)=><article className="skill-group" key={skill.title}><span className="skill-index">0{index+1}</span><div><h3>{skill.title}</h3><p>{skill.description}</p><Tags items={skill.tags} /></div></article>)}</div></div></section>
        <section id="coursework" className="shell section coursework-section" aria-labelledby="coursework-title"><div className="coursework-heading"><div><SectionLabel number="04">课程实践</SectionLabel><h2 id="coursework-title">从基础实验开始。</h2></div><p>本科阶段完成的基础课程设计与实验，用于学习人工智能、计算机视觉、嵌入式系统和机器人控制的基本原理。</p></div><ul className="labs-list">{labs.map((lab,index)=><li key={lab}><span>0{index+1}</span>{lab}</li>)}</ul></section>
        <section id="about" className="section about-section" aria-labelledby="about-title"><div className="shell about-grid"><div><SectionLabel number="05">关于我</SectionLabel><h2 id="about-title">关注连接，<br />也关注实现。</h2></div><div className="about-copy"><p>我是刘文安，一名人工智能专业本科生。</p><p>相比单纯罗列技术名词，我更关注把模型、接口、软件和实际设备组合成可以工作的系统。毕业设计让我接触模型与应用的连接，机器人二次开发经历让我开始理解软件在实际设备上的运行与调试。</p><p>目前正在持续学习 AI 应用开发、Python、Web 工程与软件开发流程。这个网站也会随着新的实践，一起更新。</p><div className="about-signature">刘文安 <span>Liu Wen&apos;an</span></div></div></div></section>
        <section id="contact" className="shell section contact-section" aria-labelledby="contact-title"><SectionLabel number="06">联系方式</SectionLabel><div className="contact-grid"><div><h2 id="contact-title">聊聊下一个<br />可以一起解决的问题<span className="accent">。</span></h2><p>欢迎交流 AI / Python / 软件开发相关岗位与项目实践。</p></div><div className="contact-details"><span className="email-label">邮件联系</span><a className="email-link" href="mailto:15735434286@163.com">15735434286@163.com <span aria-hidden="true">↗</span></a><div className="contact-resources"><button disabled type="button" aria-describedby="resources-note">GitHub <span aria-hidden="true">↗</span></button><button disabled type="button" aria-describedby="resources-note">简历下载 <span aria-hidden="true">↓</span></button></div><p id="resources-note">真实链接与正式简历确认后开放。</p></div></div></section>
      </main>
      <footer className="site-footer"><div className="shell footer-inner"><p>© 2026 刘文安 · Mycool</p><p>使用 Next.js 与 TypeScript 构建</p><a href="#home">回到顶部 ↑</a></div></footer>
    </>
  );
}
