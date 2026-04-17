const screens = [
  {
    name: "Welcome",
    className: "app-screen app-screen-welcome",
    content: `
      <div class="app-status"><span>9:41</span><span class="status-icons">||| ))) ?</span></div>
      <div class="app-center-content">
        <div class="app-logo">AiTutor</div>
        <div class="app-auth-actions">
          <button class="app-pill app-pill-light">Log In</button>
          <button class="app-pill app-pill-outline">Register</button>
        </div>
      </div>
    `
  },
  {
    name: "Log In",
    className: "app-screen app-screen-auth",
    content: `
      <div class="app-status"><span>9:41</span><span class="status-icons">||| ))) ?</span></div>
      <div class="app-shell-card">
        <h3>Log In</h3>
        <p>Please login to continue</p>
        <label>Email or Username</label>
        <div class="app-input">lailajerome123@gmail.com</div>
        <label>Password</label>
        <div class="app-input">********</div>
        <div class="app-link-row">Forgot Password?</div>
        <button class="app-main-btn">Log In</button>
        <div class="app-muted">Or login with</div>
        <div class="app-row-btns">
          <button class="app-chip">Google</button>
          <button class="app-chip">Phone</button>
        </div>
      </div>
    `
  },
  {
    name: "Sign Up",
    className: "app-screen app-screen-auth",
    content: `
      <div class="app-status"><span>9:41</span><span class="status-icons">||| ))) ?</span></div>
      <div class="app-progress"><span class="active"></span><span></span></div>
      <div class="app-shell-card">
        <h3>Account & Contact Info</h3>
        <p>Create your login and verify your phone number.</p>
        <label>Full Name</label>
        <div class="app-input">Laila Jerome</div>
        <label>Email</label>
        <div class="app-input">lailajerome123@gmail.com</div>
        <label>Create Password</label>
        <div class="app-input">********</div>
        <label>Confirm Password</label>
        <div class="app-input">********</div>
        <label>Phone Number</label>
        <div class="app-input">+91 7356335201</div>
        <button class="app-main-btn">Get OTP</button>
      </div>
    `
  },
  {
    name: "OTP",
    className: "app-screen app-screen-auth",
    content: `
      <div class="app-status"><span>9:41</span><span class="status-icons">||| ))) ?</span></div>
      <div class="app-progress"><span class="active"></span><span></span></div>
      <div class="app-shell-card">
        <h3>OTP Verification</h3>
        <p>Enter the OTP sent to +91 7356335201</p>
        <div class="otp-row">
          <div class="otp-box">8</div>
          <div class="otp-box">3</div>
          <div class="otp-box">0</div>
          <div class="otp-box"></div>
          <div class="otp-box"></div>
          <div class="otp-box"></div>
        </div>
        <div class="app-muted">Didn't receive code? <b>Resend Code</b></div>
        <button class="app-main-btn">Confirm</button>
      </div>
    `
  },
  {
    name: "Success",
    className: "app-screen app-screen-success",
    content: `
      <div class="app-status"><span>9:41</span><span class="status-icons">||| ))) ?</span></div>
      <div class="app-success-card">
        <div class="check-circle">?</div>
        <h3>Welcome to AI Tutor!</h3>
        <p>Your account has been created.</p>
      </div>
    `
  },
  {
    name: "Home",
    className: "app-screen app-screen-home",
    content: `
      <div class="app-status"><span>9:41</span><span class="status-icons">||| ))) ?</span></div>
      <div class="app-top-row">
        <div><small>Good Morning,</small><strong>Laila</strong></div>
        <div class="app-mini-icons"><span>?</span><span>?</span></div>
      </div>
      <div class="promo-card">
        <strong>Premium Plan</strong>
        <span>Expires on 21st Aug 2025</span>
        <button>Manage Subscription</button>
      </div>
      <h4>Explore Your Curriculum</h4>
      <div class="grade-card">Grade 10 (CBSE)</div>
      <h4>Subjects</h4>
      <div class="subject-grid">
        <div class="subject-item">Mathematics</div>
        <div class="subject-item">Physics</div>
      </div>
    `
  },
  {
    name: "Topics",
    className: "app-screen app-screen-home",
    content: `
      <div class="app-status"><span>9:41</span><span class="status-icons">||| ))) ?</span></div>
      <div class="app-title">Mathematics <span>Grade 10</span></div>
      <div class="app-search">Search Topics in Mathematics</div>
      <h4>Topics (24)</h4>
      <div class="topic-card"><strong>Linear Equations</strong><p>Master solving equations and graphing straight lines.</p></div>
      <div class="topic-card"><strong>Algebraic Expressions</strong><p>Understand how to simplify and evaluate expressions.</p></div>
      <div class="topic-card"><strong>Geometry Basics</strong><p>Explore shapes, angles, and dimensions.</p></div>
    `
  },
  {
    name: "Lesson",
    className: "app-screen app-screen-home",
    content: `
      <div class="app-status"><span>9:41</span><span class="status-icons">||| ))) ?</span></div>
      <div class="lesson-hero">
        <strong>Linear Equations</strong>
        <div class="lesson-bar"><span></span></div>
      </div>
      <div class="tab-row"><span class="active">Concept</span><span>Practise</span><span>Media</span><span>Quiz</span></div>
      <div class="lesson-text">
        <h4>What is a Linear Equation?</h4>
        <p>A linear equation is an algebraic equation where each term is either a constant or the product of a constant and a single variable.</p>
        <h4>Standard Form</h4>
        <p>ax + b = c</p>
      </div>
    `
  },
  {
    name: "Media & Quiz",
    className: "app-screen app-screen-home",
    content: `
      <div class="app-status"><span>9:41</span><span class="status-icons">||| ))) ?</span></div>
      <div class="lesson-hero">
        <strong>Linear Equations</strong>
        <div class="lesson-bar"><span></span></div>
      </div>
      <div class="tab-row"><span>Concept</span><span>Practise</span><span class="active">Media</span><span>Quiz</span></div>
      <div class="media-card">Introduction to Linear Equations</div>
      <div class="quiz-card">
        <p><strong>Checkpoint Quiz</strong></p>
        <p>What is the slope of line y = -2x + 5?</p>
        <div class="quiz-option correct">A. -2</div>
        <div class="quiz-option">B. 2</div>
        <div class="quiz-option wrong">C. 5</div>
      </div>
    `
  },
  {
    name: "AI Chat",
    className: "app-screen app-screen-chat",
    content: `
      <div class="app-status"><span>9:41</span><span class="status-icons">||| ))) ?</span></div>
      <div class="chat-avatar"><img src="images/tutor-portrait.png" alt="AI tutor portrait" onerror="this.onerror=null;this.src='tutor-portrait.png';" /></div>
      <div class="chat-header">Let's talk! Answer in your own words or type it out...</div>
      <div class="chat-bubble bot">Hey Laila! What's up today? Got anything exciting you want to explore?</div>
      <div class="chat-bubble user">I was wondering how to solve word problems in algebra.</div>
      <div class="chat-bubble bot">Great question. Break them into small steps, define variables, then build equations.</div>
    `
  },
  {
    name: "Profile",
    className: "app-screen app-screen-home",
    content: `
      <div class="app-status"><span>9:41</span><span class="status-icons">||| ))) ?</span></div>
      <div class="app-title">My Profile</div>
      <div class="profile-card">
        <div class="profile-pic">
          <img src="images/tutor-portrait.png" alt="Laila Jerome profile photo" onerror="this.onerror=null;this.src='tutor-portrait.png';" />
        </div>
        <strong>Laila Jerome</strong>
        <p>lailajerome123@gmail.com</p>
        <p>+91 7356335201</p>
      </div>
      <div class="grade-card">Grade 10 (CBSE)</div>
      <h4>Account Settings</h4>
      <div class="setting-item">Settings</div>
      <div class="setting-item">About Us</div>
      <div class="setting-item">Change Password</div>
      <div class="setting-item">Help & Support</div>
    `
  }
];

const screenEl = document.querySelector("[data-screen]");
const dotsWrap = document.querySelector(".screen-dots");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".main-nav");
let currentIndex = 0;
let timer;

function renderDots() {
  dotsWrap.innerHTML = "";
  screens.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = index === currentIndex ? "active" : "";
    dot.setAttribute("aria-label", `Go to ${screens[index].name}`);
    dot.addEventListener("click", () => {
      currentIndex = index;
      renderScreen();
      restartAutoPlay();
    });
    dotsWrap.appendChild(dot);
  });
}

function renderScreen() {
  const screen = screens[currentIndex];
  screenEl.className = `screen ${screen.className}`;
  screenEl.innerHTML = `${screen.content}`;
  renderDots();
}

function move(step) {
  currentIndex = (currentIndex + step + screens.length) % screens.length;
  renderScreen();
}

function startAutoPlay() {
  timer = setInterval(() => move(1), 3600);
}

function restartAutoPlay() {
  clearInterval(timer);
  startAutoPlay();
}

prevBtn.addEventListener("click", () => {
  move(-1);
  restartAutoPlay();
});

nextBtn.addEventListener("click", () => {
  move(1);
  restartAutoPlay();
});

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

renderScreen();
startAutoPlay();

const waNumber = "919995550353";
const waPanel = document.querySelector("[data-wa-panel]");
const waOpenBtn = document.querySelector("[data-wa-open]");
const waCloseBtn = document.querySelector("[data-wa-close]");
const waTopBtn = document.querySelector("[data-wa-top]");
const waStartLink = document.querySelector("[data-wa-start]");
const waOptions = Array.from(document.querySelectorAll("[data-wa-msg]"));

function buildWaLink(message) {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}

if (waOpenBtn && waPanel && waCloseBtn && waStartLink) {
  waOpenBtn.addEventListener("click", () => {
    waPanel.hidden = false;
  });

  waCloseBtn.addEventListener("click", () => {
    waPanel.hidden = true;
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      waPanel.hidden = true;
    }
  });

  waOptions.forEach((option) => {
    option.addEventListener("click", () => {
      waOptions.forEach((btn) => btn.classList.remove("active"));
      option.classList.add("active");
      const message = option.dataset.waMsg || "Hi AiTutor, I need more details.";
      waStartLink.href = buildWaLink(message);
    });
  });
}

if (waTopBtn) {
  waTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("in-view"));
}
