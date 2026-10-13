// Rabt website — language toggle (English / Arabic), mobile menu, contact form

const AR = {
  "nav.solutions": "الحلول",
  "nav.who": "من نخدم",
  "nav.process": "طريقة عملنا",
  "nav.about": "من نحن",
  "nav.contact": "تواصل معنا",

  "hero.eyebrow": "حلول تقنية وبرمجيات كخدمة (SaaS)",
  "hero.title": "تقنية تربط مؤسستك.",
  "hero.lead": "رابط تبني برمجيات سحابية تساعد الشركات والأعمال والمنظمات غير الربحية على إدارة عملياتها، وفهم بياناتها، والنمو، دون تعقيد.",
  "hero.cta1": "احجز استشارة",
  "hero.cta2": "استكشف الحلول",

  "sol.eyebrow": "الحلول",
  "sol.title": "برمجيات مبنية حول طريقة عملك الفعلية",
  "sol.lead": "منصات جاهزة للاستخدام وحلول مخصصة، تُقدَّم كاشتراكات سحابية آمنة.",
  "sol.c1.t": "العمليات وأتمتة سير العمل",
  "sol.c1.d": "استبدل الجداول والخطوات اليدوية بموافقات آلية وتتبع للمهام وسير عمل للفرق.",
  "sol.c2.t": "سلاسل الإمداد والمشتريات",
  "sol.c2.d": "أدر الموردين وأوامر الشراء والشحنات والمخزون من منصة واحدة مترابطة.",
  "sol.c3.t": "البيانات ولوحات التقارير",
  "sol.c3.d": "اجمع بياناتك في لوحات واضحة ولحظية يستطيع القادة اتخاذ القرار بناءً عليها.",
  "sol.c4.t": "الاستدامة وتقارير ESG",
  "sol.c4.d": "تتبّع الانبعاثات ومؤشرات الاستدامة، بما فيها النطاق 3، وأعدّ التقارير بثقة.",
  "sol.c5.t": "إدارة المنظمات غير الربحية",
  "sol.c5.d": "نظّم المتبرعين والمتطوعين والبرامج والمنح ليركّز فريقك على رسالته.",
  "sol.c6.t": "برمجيات مخصصة وتكامل الأنظمة",
  "sol.c6.d": "اربط الأدوات التي تستخدمها حاليًا، أو ابنِ حلًا مصممًا لاحتياجاتك بالضبط.",

  "who.eyebrow": "من نخدم",
  "who.title": "شريك واحد للرسالة والربح",
  "who.a1.t": "الشركات والمؤسسات الكبرى",
  "who.a1.d": "منصات قابلة للتوسع تربط الإدارات والفروع والشركاء.",
  "who.a2.t": "الأعمال الربحية",
  "who.a2.d": "أدوات بأسعار مناسبة تساعد الأعمال النامية على توفير الوقت وخفض التكاليف.",
  "who.a3.t": "المنظمات غير الربحية",
  "who.a3.d": "برمجيات بسيطة ومناسبة للميزانية تجعل كل دولار يذهب أبعد.",

  "pro.eyebrow": "طريقة عملنا",
  "pro.title": "من أول مكالمة إلى نظام يعمل",
  "pro.s1.t": "الاكتشاف",
  "pro.s1.d": "نتعرّف على أهدافك وعملياتك والتحديات التي تواجهها.",
  "pro.s2.t": "التصميم",
  "pro.s2.d": "نحدد الحل المناسب ونتفق على نطاق العمل.",
  "pro.s3.t": "التنفيذ",
  "pro.s3.d": "نجهّز النظام وندمجه وندرّب فريقك.",
  "pro.s4.t": "الدعم",
  "pro.s4.d": "نبقى معك للتحسين والتوسع.",

  "about.eyebrow": "عن رابط",
  "about.title": "«رابط» تعني الاتصال.",
  "about.p1": "رابط كلمة عربية تعني الصلة والاتصال، وهذا ما نبنيه: روابط بين الناس والعمليات والبيانات.",
  "about.p2": "رابط شركة برمجيات كخدمة (SaaS) مقرّها ولاية أريزونا، تخدم المؤسسات باللغتين العربية والإنجليزية، وتركّز على تقنية عملية تحقق نتائج ملموسة.",
  "about.v1.t": "ثنائية اللغة",
  "about.v1.d": "دعم بالعربية والإنجليزية",
  "about.v2.t": "سحابية",
  "about.v2.d": "وصول من أي مكان دون إدارة خوادم",
  "about.v3.t": "مرنة",
  "about.v3.d": "خطط تنمو معك",
  "about.v4.t": "آمنة من الأساس",
  "about.v4.d": "نتعامل مع بياناتك بعناية",

  "contact.eyebrow": "تواصل",
  "contact.title": "لنبنِ الرابط الخاص بك",
  "contact.lead": "أخبرنا عن مؤسستك وسنتواصل معك لتحديد موعد استشارة مجانية.",
  "form.name": "الاسم الكامل",
  "form.org": "المؤسسة",
  "form.email": "البريد الإلكتروني",
  "form.type": "نوع المؤسسة",
  "form.t1": "شركة / مؤسسة كبرى",
  "form.t2": "عمل ربحي",
  "form.t3": "منظمة غير ربحية",
  "form.t4": "أخرى",
  "form.msg": "كيف يمكننا مساعدتك؟",
  "form.send": "إرسال الرسالة",

  "footer.loc": "تمبي، أريزونا",
  "footer.rights": "جميع الحقوق محفوظة."
};

const nodes = document.querySelectorAll("[data-i18n]");
const EN = {};
nodes.forEach(el => { EN[el.dataset.i18n] = el.innerHTML; });

const toggle = document.querySelector(".lang-toggle");

function setLang(lang) {
  const dict = lang === "ar" ? AR : EN;
  nodes.forEach(el => {
    const val = dict[el.dataset.i18n];
    if (val) el.innerHTML = val;
  });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  toggle.textContent = lang === "ar" ? "English" : "العربية";
  try { localStorage.setItem("rabt-lang", lang); } catch (e) {}
}

toggle.addEventListener("click", () => {
  setLang(document.documentElement.lang === "ar" ? "en" : "ar");
});

let saved = null;
try { saved = localStorage.getItem("rabt-lang"); } catch (e) {}
if (saved === "ar") setLang("ar");

// Mobile menu
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Contact form: opens the visitor's email app with the message filled in.
// Replace with a form service (e.g. Formspree) or a backend later.
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = `Website inquiry from ${f.get("name")} (${f.get("org") || "—"})`;
  const body =
    `Name: ${f.get("name")}\nOrganization: ${f.get("org")}\nEmail: ${f.get("email")}\n` +
    `Type: ${f.get("type")}\n\n${f.get("message")}`;
  window.location.href =
    `mailto:rabtsupplychain@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById("year").textContent = new Date().getFullYear();
