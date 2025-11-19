function clickAbout() {
  window.open("https://volweb2.utk.edu/~evo3/emilyvo/aboutme", "_blank");
}
function clickResume() {
  window.open("https://volweb2.utk.edu/~evo3/emilyvo/resume", "_blank");
}
function clickPort() {
  window.open("https://volweb2.utk.edu/~evo3/emilyvo/portfolio", "_blank");
}
function clickEmail() {
  window.open("https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhbwdzGQLrxWtnRZqKDFQQRjflrvJfwcRRvwDFWLRlMbsJjNsgBrbwVhGvbZnpRMBXXZsw", "_blank");
}
function clickLinked() {
  window.open("https://www.linkedin.com/in/emily-vo-52b7a2249/", "_blank");
}
function clickGithub() {
  window.open("https://github.com/emilyvo3", "_blank");
}
function clickInsta() {
  window.open("https://www.instagram.com/emilyhuhh/", "_blank");
}

const backgroundVideo = document.getElementById('backgroundVideo');
const soundButton = document.getElementById('sound-button');


soundButton.addEventListener('click', function () {
  if (backgroundVideo.muted) {
    backgroundVideo.muted = false;
    soundButton.src = '../assets/img/unmute.png';
  } else {
    backgroundVideo.muted = true;
    soundButton.src = '../assets/img/mute.png';
  }
});

/* ===== Portfolio logic ===== */
const listEl = document.getElementById('project-list');
const detailEl = document.getElementById('project-detail');
const backBtn = document.getElementById('back-to-list');

const titleEl = document.getElementById('detail-title');
const typeEl = document.getElementById('detail-type');
const roleEl = document.getElementById('detail-role');
const stackEl = document.getElementById('detail-stack');
const overviewEl = document.getElementById('detail-overview');
const featuresEl = document.getElementById('detail-features');
const linksEl = document.getElementById('detail-links');
const mediaEl = document.getElementById('detail-media');
const portfolioTitle = document.getElementById('portfolioTitle');

// Lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src, altText) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = altText || 'Enlarged project image';
  lightbox.classList.remove('hidden');
}

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.add('hidden');
  lightboxImg.src = '';
}

// Close button
if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

// Click on backdrop to close
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
      closeLightbox();
    }
  });
}

// ESC key closes lightbox
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});


/* Blank-slate data (fill these out as you build each page) */
const PROJECTS = {
  "3d-obstacle": {
    title: "3D Obstacle Game",
    type: "Small Project",
    role: "Developer",
    stack: "Unity / C#",
    overview: "Followed along Brackey's tutorial from Youtube to create a simple 3D obstacle game where the player controls a moving cube that must avoid obstacles and reach the finish line.",
    features: ["Player Movement", "Obstacle Generation", "Win/Lose Conditions"],
    links: [],
    media: [
      "img/obstacle-1.png", "img/obstacle-2.png", "img/obstacle-3.png"
    ]
  },
  "daily-quotes": {
    title: "Daily Quote Notifications",
    type: "Small Project",
    role: "Developer",
    stack: "Python / Node / OS Notifier",
    overview: "Hard-coded list of quotes that are sent as daily notifications to the user's desktop using OS notifier libraries.",
    features: ["Daily Notifications", "Random Quote Selection"],
    links: [],
    media: [
      "img/quote-1.png", "img/quote-2.png"
    ]
  },
  "color-picker": {
    title: "Color Picker",
    type: "Small Project",
    role: "Developer",
    stack: "HTML/CSS/JS",
    overview: "Detect mouse cursor to pick colors from the user's screen and display the color code in hex code.",
    features: ["Color Detection", "Hex Code Display"],
    links: [],
    media: [
      "img/color-1.png", "img/color-2.png"
    ]
  },
  "volverse": {
    title: "Volverse",
    type: "Major Project",
    role: "Full-stack Developer",
    stack: "Android / Kotlin / Firebase",
    overview: "Partnered in designing and developing an Android app to streamline tutor scheduling at UT Vol Study. Improved efficiency of the tutor scheduling process, providing a user-friendly app that enhanced academic support for students.",
    features: ["Tutor Scheduling"],
    links: [],
    media: [
      "img/volverse-1.png", "img/volverse-2.png", "img/volverse-3.png"
    ]
  },
  "work-hard-play-hard": {
    title: "Work Hard Play Hard",
    type: "Major Project",
    role: "Developer",
    stack: "React / Node / Godot",
    overview: "A productivity website with gamification features to help users stay motivated while completing tasks. Users can create tasks, earn rewards, and level up as they complete their to-do lists, as well as play mini-games during breaks.",
    features: ["Gamification", "Tasks", "Rewards"],
    links: [],
    media: [
      "img/game-1.png", "img/game-2.png", "img/game-3.png", "img/game-4.png"
    ]
  },
  "credit-card-fraud": {
    title: "Credit Card Fraud Detection",
    type: "Major Project",
    role: "Data Scientist",
    stack: "Python / scikit-learn)",
    overview: "Contributed with a team of student developers for classification tasks in the outcome of credit card fraud transactions using Python, Scikit-learn, Pandas, NumPy, Seaborn, and TensorFlow.",
    features: ["Classification", "Modeling", "Evaluation"],
    links: [],
    media: [
      "img/credit-card.png"
    ]
  },
  "mental-health-text": {
    title: "Mental Health Text-Intervention",
    type: "Major Project",
    role: "Web Developer",
    stack: "CMS / HTML / CSS",
    overview: "Developed web content for UTK’s Center for Behavioral Health Research, focusing on an anxiety text-intervention program. Created informative and engaging pages to support the center's mission of promoting mental well-being through technology-based interventions through text messaging.",
    features: [],
    links: [
      { label: "Website Info Page", url: "https://volweb2.utk.edu/~masonlab/info/" },
      { label: "Webstie Resources Page", url: "https://volweb2.utk.edu/~masonlab/resources/"}
    ],
    media: [
      "img/anx-1.png", "img/anx-2.png"
    ]
  },
  "genai": {
    title: "GenAI for Future Retail",
    type: "Major Project",
    role: "Mobile App Designer/Developer",
    stack: "React Native / AWS",
    overview: "Collaborated on a React Native mobile app with integrated AWS for voice and chatbot features to assist shoppers with real-time inventory, optimized store navigation, and mock online ordering. This was a Senior Capstone project sponsored by Capgemini.",
    features: ["Voice Assistance", "Chatbot Integration", "Inventory Management"],
    links: [],
    media: [
      "img/genai-1.png", "img/genai-2.png", "img/genai-3.png", "img/genai-4.png"
    ]
  },
  "partnerhq": {
    title: "PartnerHQ",
    type: "Major Project",
    role: "Salesforce Dev",
    stack: "Salesforce LWC / Apex",
    overview: "Collaborated with leadership and development teams to design and launch a partner-facing website. Developed custom Salesforce Lightning Web Components (LWC) and Apex classes to enhance user experience and streamline client interactions on the portal.",
    features: ["Custom LWC Components", "Apex Backend Logic", "User Experience Enhancements"],
    links: [],
    media: [
      
    ]
  }
};

function showList() {
  document.getElementById('project-detail').classList.add('hidden');
  document.getElementById('project-list').classList.remove('hidden');
  portfolioTitle.textContent = 'Portfolio';
  titleEl.style.display = '';          // show inner h2 again if you want it
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showDetail(id) {
  const p = PROJECTS[id] || {
    title: "Project",
    type: "Project",
    role: "Your Role",
    stack: "Tech stack",
    overview: "Write a short overview here.",
    features: []
  };

  portfolioTitle.textContent = p.title;
  titleEl.textContent = p.title;
  titleEl.style.display = 'none'; 
  typeEl.textContent = p.type;
  roleEl.textContent = p.role;
  stackEl.textContent = p.stack;
  overviewEl.textContent = p.overview;

  // features
  featuresEl.innerHTML = "";
  (p.features || []).forEach(f => {
    const li = document.createElement('li');
    li.textContent = f;
    featuresEl.appendChild(li);
  });

  // links
  linksEl.innerHTML = "";
  (p.links || []).forEach((l, idx) => {
    const a = document.createElement('a');
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = l.label;
    linksEl.appendChild(a);
    if (idx < p.links.length - 1) {
      linksEl.appendChild(document.createTextNode(" · "));
    }
  });

  // media
mediaEl.innerHTML = "";
(p.media || []).forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = p.title + " screenshot";
  img.style.width = "100%";
  img.style.borderRadius = "8px";

  // clicking a thumbnail opens the lightbox
  img.addEventListener('click', () => {
    openLightbox(src, img.alt);
  });

  mediaEl.appendChild(img);
});


  listEl.classList.add('hidden');
  detailEl.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('project-list').classList.add('hidden');
  document.getElementById('project-detail').classList.remove('hidden');
}

// Attach click listeners to all project boxes
document.querySelectorAll('.project-box').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-project');
    showDetail(id);
  });
});

// Back button
backBtn.addEventListener('click', showList);
