document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar")
  const sidebarToggle = document.getElementById("sidebar-toggle")

  // Toggle sidebar on mobile
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open")
  })

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target)
    const isClickOnToggle = sidebarToggle.contains(event.target)

    if (!isClickInsideSidebar && !isClickOnToggle && window.innerWidth <= 768) {
      sidebar.classList.remove("open")
    }
  })

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      sidebar.classList.remove("open")
    }
  })

  // Add dark mode toggle functionality
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")

  // You can add a dark mode toggle button if needed
  // const darkModeToggle = document.getElementById('dark-mode-toggle');
  // darkModeToggle.addEventListener('click', function() {
  //   document.body.classList.toggle('dark-mode');
  // });
})

