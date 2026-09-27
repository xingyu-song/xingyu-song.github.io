document.querySelector("#year").textContent = String(new Date().getFullYear());

const copyButton = document.querySelector("#copy-email");
const copyStatus = document.querySelector("#copy-status");

if (navigator.clipboard?.writeText) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(`${copyButton.dataset.user}@${copyButton.dataset.domain}`);
      copyStatus.textContent = "Email address copied.";
    } catch {
      copyStatus.textContent = "Copy unavailable. Select the address above and replace [at] with @.";
    }
  });
}
