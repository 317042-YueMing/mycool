import Image from "next/image";
import ImagePreview from "./components/ImagePreview";
import CaseDisclosure from "./components/CaseDisclosure";
import ProjectMedia from "./components/ProjectMedia";
import SiteNavigation from "./components/SiteNavigation";

const github = "https://github.com/317042-YueMing";
const email = "15735434286@163.com";
const loadDriftRecord = {
  summary: "在四足机器人顶部新增金属支架与海康摄像头后，直线行走测试中出现步态漂移。我参与现场复现、现象记录和多轮测试，并与厂家技术人员协作完成排查、调整与验证。由于详细调试参数未完整留存，目前不对具体底层原因和参数修改做未经确认的描述。",
  sections: [
    { heading: "背景", text: "为了扩展机器人现场感知能力，在四足机器人顶部加装金属支架，并在支架上安装海康摄像头。" },
    { heading: "问题", text: "加装完成后，机器人原有负载状态发生变化。在后续直线行走测试中发现，机器人执行直线运动时出现不同程度的步态漂移，实际运动方向与预期轨迹存在偏差。" },
    { heading: "我的参与", text: "参与现场问题复现、现象记录、设备状态检查和多轮行走测试，并将加装前后的表现差异整理后反馈给厂家技术人员。" },
    { heading: "协作方式", text: "现场复现与测试 + 问题反馈 + 厂家技术支持 + 多轮验证。我负责现场复现、测试、记录和反馈；厂家技术人员提供设备侧技术支持和调整建议。" },
    { heading: "排查与调整", text: "与厂家技术人员协作进行排查和调整，并根据现场测试结果反复验证机器人在新增负载条件下的行走状态。" },
    { heading: "事实边界", text: "问题排查和解决并非我独立完成。由于当时没有完整保留调试记录，目前不对具体参数、具体调整项和底层原因做未经确认的描述。" },
    { heading: "结果", text: "问题最终在与厂家技术人员协作调试后得到改善。" },
  ],
} as const;

const narrowPassageRecord = {
  summary: "在狭窄过道进行实际通行测试时，四足机器人的智能避障表现存在不稳定情况。我参与了现场复现、多轮通行测试和现象记录，并与厂家技术人员协作完成排查、调整和重复验证。由于详细调试记录未完整保留，目前不对具体避障算法、参数或底层原因做未经确认的描述。",
  sections: [
    { heading: "背景", text: "四足机器人需要在室内环境中执行移动和避障。在狭窄过道等空间余量较小的场景中，避障效果更容易受到环境和设备状态影响。" },
    { heading: "问题", text: "在狭窄过道进行实际通行测试时，机器人智能避障表现并不稳定。有时可以正常通过，有时会出现避障判断不一致，导致通行过程不够稳定。" },
    { heading: "我的参与", text: "参与狭窄过道场景下的多轮复现与通行测试，记录不同测试中的实际表现，并将问题现象整理后反馈给厂家技术人员。" },
    { heading: "协作方式", text: "现场复现与测试 + 问题记录 + 厂家技术支持 + 调整后重复验证。厂家技术人员提供设备侧技术支持、配置或参数调整建议；我配合现场测试，验证不同调整后的表现。" },
    { heading: "排查与调整", text: "与厂家技术人员协作进行设备侧排查和相关调整，并在每轮调整后重新进行狭窄过道通行测试，观察避障表现是否改善。" },
    { heading: "事实边界", text: "排查和处理由我与厂家技术人员协作完成，并非我独立解决。由于当时没有完整保留调试记录，目前不对具体避障算法、传感器参数、阈值或底层原因做未经确认的描述。" },
    { heading: "结果", text: "问题最终在与厂家技术人员协作调试后得到改善，狭窄过道中的通行表现比初始状态更稳定。" },
  ],
} as const;

const stairsRecord = {
  summary: "在实际上下楼梯测试过程中，四足机器人出现过偏航和阶段性停顿。我参与了现场复现、多轮楼梯通行测试和现象记录，并与厂家技术人员协作完成排查、调整和重复验证。由于详细调试记录未完整保留，目前不对具体控制算法、参数或底层原因做未经确认的描述。",
  sections: [
    { heading: "背景", text: "四足机器人需要在实际环境中完成楼梯通行测试。相比普通平地行走，楼梯场景对运动稳定性和连续性提出了更高要求。" },
    { heading: "问题", text: "在实际上下楼梯测试过程中，机器人出现过行走方向偏离预期路线的情况，同时运行过程中还会出现阶段性停顿，影响楼梯通行的连续性和稳定性。" },
    { heading: "我的参与", text: "参与楼梯场景下的多轮复现和通行测试，记录偏航与停顿现象，并将不同测试中的表现整理后反馈给厂家技术人员。" },
    { heading: "协作方式", text: "现场复现与测试 + 问题记录 + 厂家技术支持 + 调整后重复验证。厂家技术人员提供设备侧技术支持、配置或参数调整建议；我配合现场测试、复现问题并验证不同调整后的表现。" },
    { heading: "排查与调整", text: "与厂家技术人员协作进行设备侧排查和相关调整，并在每轮调整后重新进行上下楼梯测试，观察机器人行走方向和运行连续性是否改善。" },
    { heading: "事实边界", text: "排查和处理由我与厂家技术人员协作完成，并非我独立解决。由于当时没有完整保留调试记录，目前不对具体控制算法、姿态参数、楼梯识别逻辑或底层原因做未经确认的描述。" },
    { heading: "结果", text: "问题最终在与厂家技术人员协作调试后得到改善，上下楼梯过程中的方向稳定性和运行连续性相比初始状态有所改善。" },
  ],
} as const;

const cases = [
  { id: "load-drift", number: "01", title: "加装上装设备后出现步态漂移", problem: "机器人增加负载后，运动方向与步态稳定性出现偏差。" },
  { id: "narrow-passage", number: "02", title: "狭窄过道中的智能避障不稳定", problem: "四足机器人在狭窄过道中的智能避障表现不稳定。" },
  { id: "stairs", number: "03", title: "上下楼梯过程中的偏航与停顿", problem: "上下楼梯时出现不走直线、运行中停顿等现象。" },
] as const;

const robotics = [
  { src: "/media/robotics/robotics-sensor-config-01.jpg", width: 1279, height: 1706, alt: "四足机器人顶部感知模组配置" },
  { src: "/media/robotics/robotics-standing-overview-01.jpg", width: 1706, height: 1279, alt: "四足机器人侧面站立状态" },
  { src: "/media/robotics/robotics-sensor-rig-01.jpg", width: 1279, height: 1706, alt: "四足机器人与顶部感知模组" },
  { src: "/media/robotics/robotics-hardware-inspection-01.jpg", width: 1919, height: 1080, alt: "四足机器人硬件检查状态" },
] as const;

const vision = [
  { src: "/media/vision/vision-platform-live-public.jpg", width: 1920, height: 900, alt: "实时 AI 视觉巡检平台运行界面" },
  { src: "/media/vision/vision-field-debug-01.jpg", width: 1706, height: 1279, alt: "AI 视觉巡检项目现场调试环境" },
  { src: "/media/vision/vision-platform-stream-error-01.jpg", width: 2283, height: 1190, alt: "实时巡检平台视频流联调失败状态记录" },
] as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">跳到主要内容</a>
      <header className="site-header shell">
        <a href="#intro" className="wordmark" aria-label="Mycool 首页">Mycool</a>
        <SiteNavigation />
      </header>
      <main id="main-content" tabIndex={-1}>
        <section className="identity shell" id="intro" aria-labelledby="identity-title">
          <div className="nameplate"><h1 id="identity-title">刘文安</h1><p lang="en">Liu Wen’an</p></div>
          <div className="identity-foot">
            <div className="identity-copy"><p className="identity-role">AI 视觉与机器人应用开发。</p><p>做过实时视频 AI 检测、摄像机与热成像接入，也参与四足机器人现场联调。</p><p className="identity-direction">求职方向：计算机视觉 / AI 应用 / Python 工程</p></div>
            <div className="text-links"><a href="#work">查看项目</a><a href={github}>GitHub</a><a href="/resume.pdf" download>简历</a><a href={`mailto:${email}`}>邮箱</a></div>
          </div>
        </section>

        <section id="work" className="work shell" aria-labelledby="work-title">
          <div className="section-caption"><h2 id="work-title">精选作品</h2><p className="mono">01 — 03</p></div>
          <div className="work-gallery">
            <article className="vision-project" id="vision" aria-labelledby="vision-title">
              <div className="vision-heading"><p className="mono">01 / AI 视觉 · 粮仓 / 工业巡检</p><h3 id="vision-title">实时 AI 视觉巡检系统</h3></div>
              <div className="vision-intro"><p>围绕实时视频流构建 AI 巡检链路，将摄像机取流、安全检测、热成像、云台控制和 Web 平台接入同一套工程流程。</p><p className="vision-status">已完成核心链路<br /><span>持续产品化与现场优化</span></p></div>
              <figure className="vision-media">
                <ImagePreview capture={vision[0]} title={vision[0].alt} description="实时巡检平台运行记录" label={`放大查看：${vision[0].alt}`} className="vision-photo">
                  <Image {...vision[0]} alt={vision[0].alt} sizes="(max-width: 700px) 100vw, 94vw" />
                  <span className="photo-action">放大查看 ↗</span>
                </ImagePreview>
              </figure>
              <div className="vision-flow" aria-label="AI 视觉巡检工程链">
                <ol><li>摄像机实时取流</li><li>RTSP / MediaMTX / WebRTC</li><li>AI 安全检测</li><li>热成像基础能力</li><li>PTZ / 预置点</li><li>Web 巡检平台</li></ol>
                <p>浏览器实时预览；检测未佩戴安全帽、未穿反光衣与吸烟行为。</p>
              </div>
              <div className="vision-support">
                <details><summary>现场调试 <span aria-hidden="true">＋</span></summary>
                  <ImagePreview capture={vision[1]} title="现场调试" description="AI 视觉巡检项目现场调试环境" label={`放大查看：${vision[1].alt}`} className="vision-photo">
                    <Image {...vision[1]} alt={vision[1].alt} sizes="(max-width: 700px) 100vw, 420px" />
                    <span className="photo-action">放大查看 ↗</span>
                  </ImagePreview>
                </details>
                <details><summary>视频流联调记录 <span aria-hidden="true">＋</span></summary>
                  <p>实际联调过程中曾出现视频流未找到的情况，该截图作为排障过程记录保留。</p>
                  <ImagePreview capture={vision[2]} title="视频流联调记录" description="实际联调过程中曾出现视频流未找到的情况，该截图作为排障过程记录保留。" label={`放大查看：${vision[2].alt}`} className="vision-photo">
                    <Image {...vision[2]} alt={vision[2].alt} sizes="(max-width: 700px) 100vw, 520px" />
                    <span className="photo-action">放大查看 ↗</span>
                  </ImagePreview>
                </details>
              </div>
              <details className="vision-contribution"><summary>我的参与与项目阶段 <span aria-hidden="true">＋</span></summary>
                <div className="contribution-body"><div><h4>参与范围</h4><ul><li>摄像机 SDK 与实时视频链路接入。</li><li>AI 安全检测模型整理、训练 / 迁移和实时推理接入。</li><li>Web 巡检平台联调、PTZ 云台控制与热成像基础链路。</li><li>产品化工程整理和自动化回归测试。</li></ul></div><div><h4>能力说明</h4><p>海康摄像机接入；热成像温度矩阵与异常热源基础链路，不作为已完成的成熟 AI 模型展示；云台八方向控制；实时巡检、事件查看、设备状态与语音告警。</p><h4>阶段边界</h4><p>核心链路已完成，真实场景精度优化、异常热源业务联动、最终产品化收口，以及后续记录 / 地图 / 完整巡检闭环仍在推进。以上为我的参与范围，不代表整个系统由我独立完成，也不表示已正式商用或大规模部署。</p></div></div>
              </details>
            </article>

            <article className="robot-project" aria-labelledby="robot-title">
              <div className="robot-gallery">
                <figure className="robot-main-photo">
                  <ImagePreview capture={robotics[0]} title={robotics[0].alt} description="相关设备 / 联调现场素材" label={`放大查看：${robotics[0].alt}`} className="robot-photo">
                    <Image {...robotics[0]} alt={robotics[0].alt} sizes="(max-width: 700px) 100vw, 370px" />
                    <span className="photo-action">放大查看 ↗</span>
                  </ImagePreview>
                </figure>
                <div className="robot-side">
                  <div className="robot-caption">
                    <p className="mono">02 / 机器人工程 · 2026.06 — 2026.09</p>
                    <h3 id="robot-title">四足机器人<br />二次开发与联调</h3>
                    <div className="robot-company"><p>安徽国科赛安科技有限公司</p><p>机器人二次开发工程师</p></div>
                    <p className="robot-description">参与软件二次开发、设备联调与四足机器人稳定性问题排查。</p>
                  </div>
                </div>
              </div>
              <div className="robot-issues">
                <ul className="cover-index">{cases.map((entry) => <li key={entry.id}><CaseDisclosure number={entry.number} title={entry.title} problem={entry.problem} record={entry.id === "load-drift" ? loadDriftRecord : entry.id === "narrow-passage" ? narrowPassageRecord : stairsRecord} recordHref={`#${entry.id}`} variant="cover" /></li>)}</ul>
                <a href="#cases" className="cover-link mono">浏览工程记录 <span aria-hidden="true">↗</span></a>
              </div>
            </article>

            <article className="mycool-project" aria-labelledby="mycool-title">
              <ProjectMedia />
              <div className="mycool-copy"><p className="mono">03 / 个人项目 · 当前开发中</p><h3 id="mycool-title">Mycool</h3><p>持续开发中的个人技术站 / 工程实践项目。</p><div className="project-details mono"><p>Next.js / React / TypeScript / Tailwind CSS</p><p className="capture-note">V2 页面记录 · Refero 重构前</p></div></div>
            </article>

          </div>
        </section>

        <section id="cases" className="cases-section shell" aria-labelledby="cases-title">
          <div className="section-caption"><h2 id="cases-title">工程记录</h2><p>三则现场测试与厂家协作记录。</p></div>
          <details className="related-media">
            <summary>相关设备 / 联调现场素材 <span aria-hidden="true">＋</span></summary>
            <p>设备照片，仅作联调背景参考，不对应某一次故障现场。</p>
            <div className="related-gallery">{[...robotics.slice(2), robotics[1]].map((photo) => (
              <figure key={photo.src}>
                <ImagePreview capture={photo} title={photo.alt} description="相关设备 / 联调现场素材，不对应某一次故障现场。" label={`放大查看：${photo.alt}`} className="robot-photo">
                  <Image {...photo} alt={photo.alt} sizes="(max-width: 700px) 42vw, 24vw" />
                  <span className="photo-action">放大查看 ↗</span>
                </ImagePreview>
                <figcaption>{photo.alt}</figcaption>
              </figure>
            ))}</div>
          </details>
          <div className="case-gallery">{cases.map((entry) => (
            <article id={entry.id} key={entry.id} className="case-entry" aria-label={entry.title}>
              <CaseDisclosure number={entry.number} title={entry.title} problem={entry.problem} record={entry.id === "load-drift" ? loadDriftRecord : entry.id === "narrow-passage" ? narrowPassageRecord : stairsRecord} recordHref={`#${entry.id}`} />
            </article>
          ))}</div>
        </section>

        <section id="stack" className="stack-section shell" aria-labelledby="stack-title">
          <h2 id="stack-title">技术栈</h2>
          <dl className="stack-index">
            <div tabIndex={0} role="group" aria-labelledby="stack-data"><dt id="stack-data">视觉与推理</dt><dd><p>Python / PyTorch / Ultralytics YOLO / OpenCV</p><p>安全检测模型训练 / 迁移与实时推理接入。</p></dd></div>
            <div tabIndex={0} role="group" aria-labelledby="stack-device"><dt id="stack-device">视频与设备</dt><dd><p>HCNetSDK / RTSP / MediaMTX / WebRTC</p><p>摄像机接入、浏览器实时视频与设备控制。</p></dd></div>
            <div tabIndex={0} role="group" aria-labelledby="stack-building"><dt id="stack-building">接口与界面</dt><dd><p>FastAPI / Flask / Next.js / React / TypeScript / JavaScript / Tailwind CSS</p><p>巡检平台接入、影评接口与个人网站。</p></dd></div>
            <div tabIndex={0} role="group" aria-labelledby="stack-tools"><dt id="stack-tools">工程与验证</dt><dd><p>Pytest / Git</p><p>自动化回归测试与版本管理。</p></dd></div>
          </dl>
        </section>

        <section id="academic" className="academic-section shell" aria-labelledby="academic-title">
          <div className="section-caption"><h2 id="academic-title">学校 / 毕业设计项目</h2><p className="mono">04 / Academic</p></div>
          <article className="academic-project" aria-labelledby="lstm-title"><div><h3 id="lstm-title">基于 LSTM 的中文影评情感分析系统</h3><p>毕业设计 · 中文影评情感分类与 Web 结果展示。</p></div><div><p className="mono">Python / LSTM / Flask / NLP</p><p className="archive-boundary">源码已遗失，保留毕业设计与答辩材料。</p><details className="archive-details"><summary><span className="archive-closed-label">展开项目记录</span><span className="archive-open-label">收起项目记录</span><span className="archive-toggle" aria-hidden="true">＋</span></summary><ol><li>中文影评数据预处理。</li><li>LSTM 情感分类模型训练。</li><li>Flask 封装预测接口。</li><li>Web 页面展示分类结果与置信度。</li><li>源码存档已遗失，保留毕业设计和答辩材料。</li></ol></details></div></article>
        </section>

        <section id="contact" className="contact shell" aria-labelledby="contact-title">
          <h2 id="contact-title">联系方式</h2>
          <div className="contact-links"><a href={`mailto:${email}`}><span>邮箱</span><span>{email} ↗</span></a><a href={github}><span>GitHub</span><span>317042-YueMing ↗</span></a><a href="/resume.pdf" download><span>简历</span><span>下载 PDF ↓</span></a></div>
        </section>
      </main>
      <footer className="site-footer shell"><p>© 2026 刘文安 / Mycool</p><a href="#intro">回到顶部 ↑</a></footer>
    </>
  );
}
