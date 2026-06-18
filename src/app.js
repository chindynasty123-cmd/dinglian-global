// Dinglian Website V3 brand experience.
const BASE = '/dinglian-global';
const icons = { aerospace: '✦', semiconductor: '◈', robotics: '◎', automation: '⌁', medical: '✚', default: '⬡' };
const pages = { home: '/', about: '/about', industries: '/industries', solutions: '/solutions', quality: '/quality', base: '/manufacturing-base', contact: '/contact' };
let lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'zh';

const data = {
  zh: {
    langLabel: '繁體中文', otherLang: 'English', quote: '立即詢價', explore: '探索產業',
    nav: ['首頁','關於鼎鏈','產業','解決方案','品質','製造基地','聯絡我們'], routes: ['home','about','industries','solutions','quality','base','contact'],
    wordmark: 'DINGLIAN', positioning: 'Global Precision Manufacturing Partner', heroTitle: '從精密加工到全球製造整合',
    heroSub: '串聯全球需求，整合製造資源，為航太、半導體、機器人與工業設備產業提供可靠的精密製造解決方案。',
    storyTitle: '二十年的製造底蘊，成就全新的全球視野', storyKicker: 'OUR STORY',
    timeline: [
      ['2005','JINTAT INDUSTRIAL FOUNDED','Precision manufacturing begins.'],
      ['2010','BICYCLE INDUSTRY','Supporting precision bicycle components.'],
      ['2015','MACHINE TOOL INDUSTRY','Expanding into industrial manufacturing.'],
      ['2020','INDUSTRIAL AUTOMATION','Supporting advanced automation systems.'],
      ['2023','SEMICONDUCTOR EQUIPMENT','Entering high-precision equipment manufacturing.'],
      ['2025','AEROSPACE & ROBOTICS','Expanding into future industries.'],
      ['2026','DINGLIAN TECHNOLOGY','A new global manufacturing vision.'],
    ],
    trustTitle: 'Why Dinglian', trust: [['20+','Years Manufacturing Experience'],['24/7','Production Support'],['One-Stop','Manufacturing Integration']],
    industryTitle: '服務全球高階產業的精密製造整合', industryIntro: '鼎鏈科技以品牌、專案管理與全球供應鏈整合為核心，將成熟製造底蘊轉化為面向未來產業的可靠合作能力。',
    industryNames: { aerospace:'航太', semiconductor:'半導體', robotics:'機器人', automation:'工業自動化', medical:'醫療' },
    industryDesc: { aerospace:'高可靠度結構件、治具與客製化精密零組件。', semiconductor:'設備零件、精密外殼與高一致性加工需求。', robotics:'關節、結構、精密殼體與客製化模組零件。', automation:'工業設備、線體模組與長期量產協作。', medical:'重視材料文件、追溯與穩定品質的精密部件。' },
    productCategories: ['關節零組件','結構零組件','精密外殼','客製化零件'], futureCases: '未來案例研究', futureText: '此區域預留真實案例照片與專案敘事；不使用 AI 生成圖像，確保品牌內容與實際能力一致。',
    solutionsTitle: '一站式製造解決方案', solutionsIntro: '從加工到後處理、組裝與文件追溯，鼎鏈科技協助客戶整合跨製程需求。', solutions: ['CNC 加工','車銑複合','研磨','鍛造','鑄造','熱處理','表面處理','組裝'],
    qualityTitle: '品質，是全球合作的共同語言', qualityIntro: '以可驗證的流程、量測與追溯管理，支持長期量產與高規格專案。', quality: ['ISO 9001','CMM 三次元檢測','Keyence 量測','材質證明','追溯管理'],
    baseTitle: 'Manufacturing Foundation', baseName: 'JINTAT INDUSTRIAL', baseSubtitle: 'Manufacturing Foundation', baseExperience: 'Over 20 Years of Precision Manufacturing Experience',
    baseCapabilities: ['24/7 Production Support','ISO 9001 Quality Management','CMM Inspection Capability','Keyence Measurement System'], baseStatement: 'Dinglian is the future. Jintat is the foundation.', baseBtn: 'Explore Manufacturing Base →',
    contactTitle: '啟動您的全球製造專案', contactIntro: '上傳圖面、規格或專案需求，鼎鏈科技將以品牌窗口整合製造資源並回覆。', fields: ['姓名','公司','Email','電話','訊息','檔案上傳'], submit:'送出需求', upload:'支援 PDF、STEP、DWG、ZIP',
    final: 'Dinglian Technology represents the future. Jintat Industrial represents the manufacturing foundation.'
  },
  en: {
    langLabel: 'English', otherLang: '繁體中文', quote: 'Get a Quote', explore: 'Explore Industries',
    nav: ['Home','About','Industries','Solutions','Quality','Manufacturing Base','Contact'], routes: ['home','about','industries','solutions','quality','base','contact'],
    wordmark: 'DINGLIAN', positioning: 'Global Precision Manufacturing Partner', heroTitle: 'From Precision Machining to Global Manufacturing Integration',
    heroSub: 'Connecting global demand with integrated manufacturing resources for reliable precision manufacturing solutions across aerospace, semiconductor, robotics, and industrial equipment markets.',
    storyTitle: 'Twenty Years of Manufacturing Foundation, A New Global Vision', storyKicker: 'OUR STORY',
    timeline: [
      ['2005','JINTAT INDUSTRIAL FOUNDED','Precision manufacturing begins.'],
      ['2010','BICYCLE INDUSTRY','Supporting precision bicycle components.'],
      ['2015','MACHINE TOOL INDUSTRY','Expanding into industrial manufacturing.'],
      ['2020','INDUSTRIAL AUTOMATION','Supporting advanced automation systems.'],
      ['2023','SEMICONDUCTOR EQUIPMENT','Entering high-precision equipment manufacturing.'],
      ['2025','AEROSPACE & ROBOTICS','Expanding into future industries.'],
      ['2026','DINGLIAN TECHNOLOGY','A new global manufacturing vision.'],
    ],
    trustTitle: 'Why Dinglian', trust: [['20+','Years Manufacturing Experience'],['24/7','Production Support'],['One-Stop','Manufacturing Integration']],
    industryTitle: 'Precision Manufacturing Integration for Advanced Global Industries', industryIntro: 'Dinglian Technology focuses on brand, project management, and global supply-chain integration—transforming a proven manufacturing foundation into future-ready partnership capacity.',
    industryNames: { aerospace:'Aerospace', semiconductor:'Semiconductor', robotics:'Robotics', automation:'Industrial Automation', medical:'Medical' },
    industryDesc: { aerospace:'High-reliability structures, fixtures, and custom precision components.', semiconductor:'Equipment parts, precision housings, and repeatable high-consistency requirements.', robotics:'Joint components, structural parts, precision housings, and custom modules.', automation:'Industrial equipment, line modules, and long-term production collaboration.', medical:'Precision parts where material documentation, traceability, and stable quality matter.' },
    productCategories: ['Joint Components','Structural Components','Precision Housings','Custom Parts'], futureCases: 'Future Case Studies', futureText: 'Reserved for real project photography and case narratives. No AI-generated images are used, keeping brand content aligned with real capabilities.',
    solutionsTitle: 'One-Stop Manufacturing Solutions', solutionsIntro: 'From machining to post-processing, assembly, and documentation, Dinglian integrates cross-process manufacturing needs.', solutions: ['CNC Machining','Turning & Milling','Grinding','Forging','Casting','Heat Treatment','Surface Treatment','Assembly'],
    qualityTitle: 'Quality Is the Shared Language of Global Partnership', qualityIntro: 'Verifiable processes, measurement systems, and traceability support long-term production and high-spec projects.', quality: ['ISO 9001','CMM Inspection','Keyence Measurement','Material Certification','Traceability'],
    baseTitle: 'Manufacturing Foundation', baseName: 'JINTAT INDUSTRIAL', baseSubtitle: 'Manufacturing Foundation', baseExperience: 'Over 20 Years of Precision Manufacturing Experience',
    baseCapabilities: ['24/7 Production Support','ISO 9001 Quality Management','CMM Inspection Capability','Keyence Measurement System'], baseStatement: 'Dinglian is the future. Jintat is the foundation.', baseBtn: 'Explore Manufacturing Base →',
    contactTitle: 'Start Your Global Manufacturing Project', contactIntro: 'Upload drawings, specifications, or project requirements. Dinglian will coordinate manufacturing resources through a premium brand gateway.', fields: ['Name','Company','Email','Phone','Message','File Upload'], submit:'Submit Request', upload:'Supports PDF, STEP, DWG, ZIP',
    final: 'Dinglian Technology represents the future. Jintat Industrial represents the manufacturing foundation.'
  }
};

const withBase = (path) => `${BASE}${path}`;
const asset = (path) => withBase(path);
const href = (page) => `${withBase(pages[page] || '/')}?lang=${lang}`;
const icon = (key) => `<span class="glyph">${icons[key] || icons.default}</span>`;
function currentPath() { let pathname = location.pathname; if (pathname === BASE) return '/'; if (pathname.startsWith(`${BASE}/`)) pathname = pathname.slice(BASE.length); return pathname || '/'; }
function path() { const parts = currentPath().split('/').filter(Boolean); if (!parts.length) return { page: 'home' }; if (parts[0] === 'industries') return { page: 'industry', industry: parts[1] || 'robotics', category: parts[2] }; return { page: parts[0] === 'manufacturing-base' ? 'base' : parts[0] }; }

function header(t) { return `<header class="site-header"><a class="brand" href="${href('home')}"><img src="${asset('/dinglian-logo.png')}" alt="Dinglian Technology logo"><span>${t.positioning}</span></a><nav>${t.nav.map((n,i)=>`<a href="${href(t.routes[i])}">${n}</a>`).join('')}<a class="quote" href="${href('contact')}">${t.quote}</a><button id="lang">${t.langLabel} | ${t.otherLang}</button></nav></header>`; }
function hero(t) { return `<section class="hero"><div class="grid-glow"></div><div class="hero-inner"><img class="hero-logo" src="${asset('/dinglian-logo.png')}" alt="Dinglian Technology logo"><div class="hero-wordmark">${t.wordmark}</div><p class="hero-positioning">${t.positioning}</p><h1>${t.heroTitle}</h1><p class="hero-sub">${t.heroSub}</p><div class="actions"><a class="primary" href="${href('contact')}">${t.quote}</a><a href="${href('industries')}">${t.explore}</a></div></div></section>`; }
function story(t) { return `<section class="section story"><p class="eyebrow">${t.storyKicker}</p><h2>${t.storyTitle}</h2><div class="journey">${t.timeline.map(([year,title,body],i)=>`<article class="journey-card" style="--i:${i}"><span>${year}</span><h3>${title}</h3><p>${body}</p></article>`).join('')}</div></section>`; }
function trust(t) { return `<section class="section trust"><p class="eyebrow">GLOBAL TRUST</p><h2>${t.trustTitle}</h2><div class="trust-grid">${t.trust.map(([value,label])=>`<div class="trust-stat"><strong>${value}</strong><span>${label}</span></div>`).join('')}</div></section>`; }
function industries(t, compact=false) { return `<section class="section"><p class="eyebrow">INDUSTRIES</p><h2>${t.industryTitle}</h2><p class="lead">${t.industryIntro}</p><div class="cards">${Object.keys(t.industryNames).map(k=>`<a class="card" href="${withBase(`/industries/${k}`)}?lang=${lang}">${icon(k)}<h3>${t.industryNames[k]}</h3><p>${t.industryDesc[k]}</p><b>→</b></a>`).join('')}</div>${compact?`<a class="text-link" href="${href('industries')}">${t.explore} →</a>`:''}</section>`; }
function iconPage(title, intro, items, compact=false) { return `<section class="${compact?'section compact':'section page-hero'}"><p class="eyebrow">SYSTEM</p><h1>${title}</h1><p class="lead">${intro}</p><div class="icon-grid">${items.map((item)=>`<div class="icon-item">${icon()}<span>${item}</span></div>`).join('')}</div></section>`; }
function base(t) { return `<section class="section base"><div class="base-panel"><div class="base-logo"><img src="${asset('/jintat-logo.png')}" alt="Jintat Industrial logo"></div><div class="base-copy"><p class="eyebrow">${t.baseTitle}</p><h2>${t.baseName}</h2><h3>${t.baseSubtitle}</h3><p>${t.baseExperience}</p><ul>${t.baseCapabilities.map(item=>`<li>${item}</li>`).join('')}</ul><strong>${t.baseStatement}</strong></div><a class="base-action" href="https://reurl.cc/Ablp6E" target="_blank" rel="noreferrer">${t.baseBtn}</a></div></section>`; }
function contact(t) { return `<section class="section contact"><p class="eyebrow">CONTACT</p><h1>${t.contactTitle}</h1><p class="lead">${t.contactIntro}</p><form>${t.fields.slice(0,4).map(f=>`<label>${f}<input type="${f==='Email'?'email':'text'}"></label>`).join('')}<label>${t.fields[4]}<textarea rows="5"></textarea></label><label>${t.fields[5]}<input type="file" accept=".pdf,.step,.stp,.dwg,.zip"><small>${t.upload}</small></label><button type="button">${t.submit}</button></form></section>`; }

function render() {
  const t = data[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  const current = path();
  let body = '';
  if (current.page === 'home') body = `${hero(t)}${story(t)}${industries(t,true)}${trust(t)}${iconPage(t.solutionsTitle,t.solutionsIntro,t.solutions,true)}${base(t)}`;
  else if (current.page === 'about') body = `<section class="page-hero"><p class="eyebrow">${t.positioning}</p><h1>${t.storyTitle}</h1><p>${t.industryIntro}</p></section>${story(t)}${trust(t)}<section class="section split"><div><h2>Dinglian</h2><p>${t.final}</p></div><div><h2>Jintat</h2><p>${t.baseStatement}</p></div></section>`;
  else if (current.page === 'industries') body = industries(t);
  else if (current.page === 'solutions') body = iconPage(t.solutionsTitle,t.solutionsIntro,t.solutions);
  else if (current.page === 'quality') body = iconPage(t.qualityTitle,t.qualityIntro,t.quality);
  else if (current.page === 'base') body = base(t);
  else if (current.page === 'contact') body = contact(t);
  else if (current.page === 'industry') { const name = t.industryNames[current.industry] || t.industryNames.robotics; body = `<section class="page-hero"><p class="eyebrow">INDUSTRY</p><h1>${current.category ? current.category.replaceAll('-',' ') : name}</h1><p>${t.industryDesc[current.industry] || t.industryDesc.robotics}</p></section><section class="section"><h2>${name}</h2><p class="lead">${t.industryIntro}</p><div class="cards small">${t.productCategories.map(cat=>`<a class="card" href="${withBase(`/industries/${current.industry}/${cat.toLowerCase().replaceAll(' ','-')}`)}?lang=${lang}">${icon()}<h3>${cat}</h3><p>${t.futureText}</p></a>`).join('')}</div></section><section class="section case"><h2>${t.futureCases}</h2><p>${t.futureText}</p></section>`; }
  document.getElementById('root').innerHTML = header(t) + `<main>${body}</main>` + `<footer><img src="${asset('/dinglian-logo.png')}" alt="Dinglian Technology logo"><p>${t.final}</p><div>${t.nav.map((n,i)=>`<a href="${href(t.routes[i])}">${n}</a>`).join('')}</div></footer>`;
  document.getElementById('lang').onclick = () => { lang = lang === 'zh' ? 'en' : 'zh'; history.replaceState(null, '', `${location.pathname}?lang=${lang}`); render(); };
}
render();
