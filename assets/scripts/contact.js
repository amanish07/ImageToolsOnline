// NAVIGATION TOGGLE
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.onclick = () => {
  navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
};

// CONTACT FORM
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  status.textContent = "Sending message...";

  const data = new FormData(form);

  try {
    const res = await fetch("https://formspree.io/f/mqedkzoe", {
      method: "POST",
      body: data,
      headers: {
        "Accept": "application/json"
      }
    });

    const result = await res.json();

    if (res.ok) {
      form.reset();
      status.textContent = "Thank you for contacting us. We will reply you soon.";

      setTimeout(() => {
        status.textContent = "";
      }, 5000);
    } else {
      status.textContent = result.error || "Form submission failed. Please check inputs.";
    }

  } catch (error) {
    status.textContent = "Network error. Please try again later.";
  }
});
