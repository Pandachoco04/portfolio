const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const toast = document.getElementById("toast");
const projectDialog = document.getElementById("projectDialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogContent = document.getElementById("dialogContent");
const dialogClose = document.getElementById("dialogClose");
const dialogDone = document.getElementById("dialogDone");
let toastTimeout;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const observedSections = document.querySelectorAll("main section[id]");
const navAnchors = navLinks ? navLinks.querySelectorAll('a[href^="#"]') : [];

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach(anchor => {
        if (anchor.getAttribute("href") === `#${entry.target.id}`) {
          anchor.classList.add("active");
        } else {
          anchor.classList.remove("active");
        }
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });

  observedSections.forEach(section => sectionObserver.observe(section));
}

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

const emailButton = document.getElementById("copyEmail");
if (emailButton) {
  emailButton.addEventListener("click", async () => {
    const email = "adrianeravancho02@gmail.com";
    const copyStatus = document.getElementById("copyStatus");

    try {
      await navigator.clipboard.writeText(email);
      if (copyStatus) copyStatus.textContent = "Email copied to clipboard.";
      showToast("Email copied!");
    } catch (error) {
      if (copyStatus) copyStatus.textContent = `Copy this email: ${email}`;
      showToast("Clipboard unavailable — email shown below.");
    }
  });
}

const projectNotes = {
  meditrack: {
    title: "MediTrack Patient Information System",
    html: `
      <p><strong>Purpose:</strong> Manage patient data, doctor records, appointment scheduling, and reporting workflows in a single healthcare platform.</p>
      <p><strong>Tools used:</strong> PHP, MySQL, HTML, CSS, JavaScript, XAMPP.</p>
      <p><strong>What it demonstrates:</strong></p>
      <ul>
        <li>Structuring a healthcare workflow around core user tasks</li>
        <li>Cleaning and organizing patient, doctor, and appointment data</li>
        <li>Creating a practical web interface for business operations</li>
      </ul>
    `
  },
  clinic: {
    title: "Greenlane Clinic Website",
    html: `
      <p><strong>Purpose:</strong> Present a trustworthy healthcare brand and encourage appointment bookings.</p>
      <p><strong>Focus:</strong> Calm aesthetic, clear service categories, and strong patient communication.</p>
      <ul>
        <li>Medical service hierarchy and trust-building sections</li>
        <li>Conversion-focused schedule and call-to-action flow</li>
        <li>Clean responsive design for service-based businesses</li>
      </ul>
    `
  },
  wellness: {
    title: "FitLife Studio",
    html: `
      <p><strong>Purpose:</strong> Showcase a fitness or wellness brand through a motivational landing page.</p>
      <p><strong>Focus:</strong> Modern visuals, strong benefits messaging, and guided conversion sections.</p>
      <ul>
        <li>Strong visual identity for personal training or coaching</li>
        <li>Marketing-focused modules for value communication</li>
        <li>Responsive design with clear user flow</li>
      </ul>
    `
  },
  property: {
    title: "Harbor Estates",
    html: `
      <p><strong>Purpose:</strong> Present a premium real-estate concept with appealing listings and trust-building sections.</p>
      <p><strong>Focus:</strong> Highlighting property quality, discoverability, and buyer confidence.</p>
      <ul>
        <li>Showcase layout for home listings and property highlights</li>
        <li>Luxury visual presentation and responsive cards</li>
        <li>Clear calls to action for inquiries and property viewing</li>
      </ul>
    `
  },
  restaurant: {
    title: "Sora Bistro Website",
    html: `
      <p><strong>Purpose:</strong> Build a premium, hospitality-style concept for dining and reservations.</p>
      <p><strong>Focus:</strong> Menus, atmosphere, and customer experience presentation.</p>
      <ul>
        <li>Food and atmosphere storytelling</li>
        <li>Reservation-oriented layout and menu visibility</li>
        <li>Branding centered around quality and experience</li>
      </ul>
    `
  },
  agency: {
    title: "Northstar Studio",
    html: `
      <p><strong>Purpose:</strong> Present a creative agency brand with focus on strategy, design, and growth solutions.</p>
      <p><strong>Focus:</strong> Professional positioning and conversion-friendly service messaging.</p>
      <ul>
        <li>Service portfolio display and credibility structure</li>
        <li>Brand-building layout with modern visuals</li>
        <li>Clear positioning for future sales or outreach</li>
      </ul>
    `
  },
  travel: {
    title: "Willow Haven Retreat",
    html: `
      <p><strong>Purpose:</strong> Showcase a travel retreat experience with immersive destination storytelling.</p>
      <p><strong>Focus:</strong> Calm luxury, itineraries, wellness, and booking inspiration.</p>
      <ul>
        <li>Destination-first layout and travel brand presentation</li>
        <li>Experience-driven sections for packages and activities</li>
        <li>Clean interface for tourism or retreat businesses</li>
      </ul>
    `
  }
};

document.querySelectorAll("[data-project]").forEach(button => {
  button.addEventListener("click", () => {
    const project = projectNotes[button.dataset.project];
    if (!project) return;
    if (dialogTitle) dialogTitle.textContent = project.title;
    if (dialogContent) dialogContent.innerHTML = project.html;
    if (projectDialog && typeof projectDialog.showModal === "function") projectDialog.showModal();
    else showToast("Project notes: " + project.title);
  });
});

function closeDialog() {
  if (projectDialog && projectDialog.open) projectDialog.close();
}

if (dialogClose) dialogClose.addEventListener("click", closeDialog);
if (dialogDone) dialogDone.addEventListener("click", closeDialog);
if (projectDialog) {
  projectDialog.addEventListener("click", event => {
    if (event.target === projectDialog) closeDialog();
  });
}
