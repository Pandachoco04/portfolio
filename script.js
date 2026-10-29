const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const toast = document.getElementById("toast");
const projectDialog = document.getElementById("projectDialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogContent = document.getElementById("dialogContent");
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

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

const observedSections = document.querySelectorAll("main section[id]");
const navAnchors = navLinks.querySelectorAll('a[href^="#"]');
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

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("copyEmail").addEventListener("click", async () => {
  const email = "adrianeravancho02@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    document.getElementById("copyStatus").textContent = "Email copied to clipboard.";
    showToast("Email copied!");
  } catch (error) {
    document.getElementById("copyStatus").textContent = `Copy this email: ${email}`;
    showToast("Clipboard unavailable — email shown below.");
  }
});

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
  construction: {
    title: "Stonefield Build",
    html: `
      <p><strong>Purpose:</strong> Provide a construction or service-business concept with trust and professionalism at the center.</p>
      <p><strong>Focus:</strong> Reliability, clear services, and client reassurance.</p>
      <ul>
        <li>Service presentation for trade or local business work</li>
        <li>Practical layout that supports lead generation</li>
        <li>Professional design suited for business credibility</li>
      </ul>
    `
  },
  salon: {
    title: "Veloura Studio",
    html: `
      <p><strong>Purpose:</strong> Build a refined beauty or wellness brand concept with a premium visual identity.</p>
      <p><strong>Focus:</strong> Luxury aesthetic and customer trust cues.</p>
      <ul>
        <li>Wellness and beauty-focused brand storytelling</li>
        <li>Elegant style for service-based businesses</li>
        <li>Responsive layout for beauty and appointments</li>
      </ul>
    `
  },
  travel: {
    title: "Pacific Trails",
    html: `
      <p><strong>Purpose:</strong> Showcase travel experiences, destinations, and lifestyle-driven itineraries.</p>
      <p><strong>Focus:</strong> Immersive visuals and package communication.</p>
      <ul>
        <li>Destination storytelling and travel brand presentation</li>
        <li>Planning-focused layout for packages or experiences</li>
        <li>Clean interface for tourism or travel businesses</li>
      </ul>
    `
  },
  commerce: {
    title: "Nexa Market",
    html: `
      <p><strong>Purpose:</strong> Model a conversion-focused e-commerce storefront with featured categories and product visuals.</p>
      <p><strong>Focus:</strong> Shopping flow, product discovery, and purchasing intent.</p>
      <ul>
        <li>Product-first layout and category grouping</li>
        <li>Modern storefront structure for online sales</li>
        <li>Strong call-to-action areas and user-focused browsing</li>
      </ul>
    `
  }
};

document.querySelectorAll("[data-project]").forEach(button => {
  button.addEventListener("click", () => {
    const project = projectNotes[button.dataset.project];
    if (!project) return;
    dialogTitle.textContent = project.title;
    dialogContent.innerHTML = project.html;
    if (typeof projectDialog.showModal === "function") projectDialog.showModal();
    else showToast("Project notes: " + project.title);
  });
});

function closeDialog() {
  if (projectDialog.open) projectDialog.close();
}

document.getElementById("dialogClose").addEventListener("click", closeDialog);
document.getElementById("dialogDone").addEventListener("click", closeDialog);
projectDialog.addEventListener("click", event => {
  if (event.target === projectDialog) closeDialog();
});
