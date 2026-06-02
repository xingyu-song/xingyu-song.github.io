const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open") ?? false;
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const getEmail = (element) => `${element.dataset.user}@${element.dataset.domain}`;

const copyText = async (text) => {
  const browserNavigator = window.navigator || {};

  if (browserNavigator.clipboard?.writeText) {
    await browserNavigator.clipboard.writeText(text);
    return;
  }

  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.left = "-9999px";
  document.body.append(field);
  field.select();
  const copied = document.execCommand("copy");
  field.remove();

  if (!copied) {
    throw new Error("Copy failed");
  }
};

document.querySelectorAll(".email-copy, .contact-copy").forEach((button) => {
  const status = button.querySelector("small");
  const originalText = button.textContent.trim();
  const setButtonText = (text) => {
    if (button.classList.contains("email-copy")) {
      button.textContent = text;
    }
  };

  button.addEventListener("click", async () => {
    const email = getEmail(button);
    const showStatus = (text) => {
      if (status) status.textContent = text;
      setButtonText(text);
    };

    try {
      await copyText(email);
      showStatus("Copied");
    } catch {
      showStatus("Copy blocked");
    }

    window.setTimeout(() => {
      showStatus("Copy");
      setButtonText(originalText);
    }, 1800);
  });
});
