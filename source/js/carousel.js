document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('fs-carousel-wrap')
    const navBar = document.getElementById('fs-nav-bar')
    const target = document.getElementById('recent-posts')

    if (target && target.parentNode) {
        // ÏÈ²åÈëµ¼º½À¸£¬ÔÙ²åÈëÂÖ²¥
        const sectionHeader = document.getElementById('fs-section-header')
        if (sectionHeader) target.parentNode.insertBefore(sectionHeader, target)
        if (navBar) target.parentNode.insertBefore(navBar, target)
        if (carousel) target.parentNode.insertBefore(carousel, target)
    }

    // ÂÖ²¥Âß¼­
    const track = document.querySelector('.fs-carousel-track')
    const items = document.querySelectorAll('.fs-carousel-item')
    const prev = document.querySelector('.fs-carousel-prev')
    const next = document.querySelector('.fs-carousel-next')
    if (!track || items.length === 0) return

    let current = 0
    const visible = 2
    const total = items.length

    function update() {
        track.style.transform = `translateX(-${current * (100 / visible)}%)`
    }

    prev.addEventListener('click', () => {
        current = current <= 0 ? total - visible : current - 1
        update()
    })

    next.addEventListener('click', () => {
        current = current >= total - visible ? 0 : current + 1
        update()
    })
})