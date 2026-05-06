// Forever Beauty Barbershop — homepage interactions

(function () {
  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Today's hours badge in hero
  const hoursEl = document.getElementById("todayHours");
  if (hoursEl) {
    const day = new Date().getDay(); // 0 = Sun
    const map = {
      0: "10:00 AM – 5:00 PM",
      1: "10:00 AM – 7:00 PM",
      2: "10:00 AM – 7:00 PM",
      3: "10:00 AM – 7:00 PM",
      4: "10:00 AM – 7:00 PM",
      5: "10:00 AM – 7:00 PM",
      6: "10:00 AM – 6:00 PM",
    };
    hoursEl.textContent = map[day];
  }

  // Sticky-header scroll state
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 12) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile drawer
  const toggle = document.getElementById("menuToggle");
  const drawer = document.getElementById("mobileDrawer");
  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      const open = drawer.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      drawer.setAttribute("aria-hidden", String(!open));
    });
    drawer.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        drawer.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        drawer.setAttribute("aria-hidden", "true");
      })
    );
  }
})();
