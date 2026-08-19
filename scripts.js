document.addEventListener("DOMContentLoaded", () => {
  // 1. Interactive Shopping Cart Counter
  let cartCount = 0;
  const cartCountElement = document.getElementById("cart-count");
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      cartCount++;
      cartCountElement.textContent = cartCount;

      // Temporary visual feedback on the button
      const originalText = button.textContent;
      button.textContent = "Added!";
      button.classList.add("added");

      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove("added");
      }, 1200);
    });
  });

  // 2. Smooth Scrolling for Navigation & CTA Button
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Account for sticky header height
        const headerOffset = 70;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // 3. Contact Form Submission (No Backend Required)
  const contactForm = document.getElementById("contact-form");
  const formSuccess = document.getElementById("form-success");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent page reload

      // Hide form and display friendly confirmation
      contactForm.style.display = "none";
      formSuccess.style.display = "block";

      // Reset form fields
      contactForm.reset();
    });
  }
});