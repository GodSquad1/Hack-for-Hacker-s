// Navigation active state
const currentPage = window.location.pathname.split("/").pop() || "index.html"
const navLinks = document.querySelectorAll(".nav-link")

navLinks.forEach((link) => {
  const href = link.getAttribute("href")
  if (href === currentPage || (currentPage === "" && href === "index.html")) {
    link.classList.add("active")
  } else {
    link.classList.remove("active")
  }
})

// Navbar scroll effect
let lastScroll = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all cards and sections
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".stat-card, .feature-card")
  elements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })
})

// Search functionality
const searchInput = document.querySelector(".search-input")
if (searchInput) {
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const query = searchInput.value
      if (query.trim()) {
        console.log("[v0] Search query:", query)
        window.location.href = `explore.html?q=${encodeURIComponent(query)}`
      }
    }
  })
}

