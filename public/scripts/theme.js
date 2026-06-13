;(function () {
  function updateIcons() {
    var isDark = document.documentElement.classList.contains('dark')
    document.querySelectorAll('#theme-icon-dark, .theme-icon-dark').forEach(function (el) {
      el.classList.toggle('hidden', isDark)
    })
    document.querySelectorAll('#theme-icon-light, .theme-icon-light').forEach(function (el) {
      el.classList.toggle('hidden', !isDark)
    })
    document.querySelectorAll('.theme-label-dark').forEach(function (el) {
      el.classList.toggle('hidden', isDark)
    })
    document.querySelectorAll('.theme-label-light').forEach(function (el) {
      el.classList.toggle('hidden', !isDark)
    })
  }

  function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    var isDark = document.documentElement.classList.contains('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    updateIcons()
  }

  updateIcons()

  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme)
  document.getElementById('theme-toggle-mobile')?.addEventListener('click', toggleTheme)

  var menuBtn = document.getElementById('mobile-menu-btn')
  var mobileMenu = document.getElementById('mobile-menu')
  menuBtn?.addEventListener('click', function () {
    mobileMenu?.classList.toggle('hidden')
  })

  mobileMenu?.querySelectorAll('a, button').forEach(function (el) {
    el.addEventListener('click', function () {
      mobileMenu?.classList.add('hidden')
    })
  })
})()
