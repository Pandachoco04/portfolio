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

// Highlight the navigation item for the section currently in view.
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
  capstone: {
    title: "School Announcement Information App",
    html: `<p><strong>Purpose:</strong> Centralize school announcements so users can find important information in one place.</p>
      <p><strong>Project status:</strong> Capstone project. Update this section to accurately describe the current implementation.</p>
      <p><strong>Add before publishing:</strong></p><ul><li>Your personal responsibilities and contributions</li><li>Languages, frameworks, database, and tools actually used</li><li>Features completed and features still in progress</li><li>Screenshots or a demo link, if approved for public sharing</li><li>Authorized security checks performed, if relevant</li></ul>
      <p>Do not publish private school data, credentials, or vulnerabilities that have not been approved for disclosure.</p>`
  },
  labs: {
    title: "Network & Security Labs",
    html: `<p><strong>Purpose:</strong> Document hands-on practice with operating systems, networking, and cybersecurity fundamentals.</p>
      <p><strong>Suggested evidence:</strong></p><ul><li>Commands used, such as ping, nslookup, and ipconfig/ip addr</li><li>Sanitized terminal screenshots and actual outputs</li><li>What the results mean and what you learned</li><li>Steps taken to reproduce and troubleshoot the issue</li></ul>
      <p>Only list labs you have actually completed. Keep testing within systems you own or have explicit permission to assess.</p>`
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
