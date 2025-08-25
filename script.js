document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.textContent = "Show Cooking Tip";
  btn.style.cssText =
    "margin:20px; padding:10px 16px; border:none; background:#16a34a; color:#fff; border-radius:8px; cursor:pointer;";
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    alert("Tip: Always squeeze excess water from grated lauki before cooking!");
  });
});