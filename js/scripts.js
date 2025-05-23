document.addEventListener("DOMContentLoaded", () => {
  // Navigation functionality
  const navRef = document.getElementById("mainNav")
  const menuButton = document.getElementById("menuButton")
  const closeButton = document.querySelector(".nav-close-btn")
  const menuIcon = menuButton.querySelector("i")
  let isMenuVisible = true

  // Toggle navbar function
  const toggleNavBar = () => {
    navRef.classList.toggle("responsive_nav")
    isMenuVisible = !isMenuVisible
    menuIcon.style.display = isMenuVisible ? "block" : "none"
  }

  // Close navbar function
  const closeNavBar = () => {
    navRef.classList.remove("responsive_nav")
    isMenuVisible = true
    menuIcon.style.display = "block"
  }

  // Event listeners for navigation
  menuButton.addEventListener("click", toggleNavBar)
  closeButton.addEventListener("click", toggleNavBar)

  // Close navbar when clicking on any nav link
  const navLinks = navRef.querySelectorAll("a")
  navLinks.forEach((link) => {
    link.addEventListener("click", closeNavBar)
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerOffset = 80 // Height of fixed header
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Intersection Observer for animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all sections for animation
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section)
  })

  // Add scroll event listener for header
  let lastScroll = 0
  const header = document.querySelector("header")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      header.classList.remove("scroll-up")
      return
    }

    if (
      currentScroll > lastScroll &&
      !header.classList.contains("scroll-down")
    ) {
      // Scroll Down
      header.classList.remove("scroll-up")
      header.classList.add("scroll-down")
    } else if (
      currentScroll < lastScroll &&
      header.classList.contains("scroll-down")
    ) {
      // Scroll Up
      header.classList.remove("scroll-down")
      header.classList.add("scroll-up")
    }
    lastScroll = currentScroll
  })
})
