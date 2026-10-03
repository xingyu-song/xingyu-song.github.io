const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

const closeNav = () => {
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
};

if (navToggle && nav) {
  document.documentElement.classList.add("nav-ready");
  navToggle.hidden = false;
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) closeNav();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeNav();
      navToggle.focus();
    }
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

const publicationToggle = document.querySelector(".publication-toggle");
const publicationList = document.querySelector("#publication-list");
if (publicationToggle && publicationList) {
  publicationToggle.hidden = false;
  publicationToggle.addEventListener("click", () => {
    publicationList.hidden = !publicationList.hidden;
    const expanded = !publicationList.hidden;
    publicationToggle.setAttribute("aria-expanded", String(expanded));
    publicationToggle.firstChild.textContent = expanded ? "Hide publications " : "Show publications ";
    publicationToggle.querySelector("span").textContent = expanded ? "−" : "+";
  });
}

const copyText = async (text) => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Some browsers deny clipboard access; try the selection fallback.
    }
  }
  const field = document.createElement("textarea");
  const focusedElement = document.activeElement;
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.left = "-9999px";
  document.body.append(field);
  field.select();
  const copied = document.execCommand("copy");
  field.remove();
  focusedElement?.focus();
  if (!copied) throw new Error("Copy failed");
};

const copyStatus = document.querySelector(".copy-status");
let statusTimeout;
document.querySelectorAll(".contact-copy").forEach((button) => {
  button.hidden = false;
  button.addEventListener("click", async () => {
    const email = `${button.dataset.user}@${button.dataset.domain}`;
    try {
      await copyText(email);
      copyStatus.textContent = "Email address copied.";
    } catch {
      copyStatus.textContent = `Could not copy. Email: ${email}`;
    }
    window.clearTimeout(statusTimeout);
    statusTimeout = window.setTimeout(() => { copyStatus.textContent = ""; }, 5000);
  });
});
