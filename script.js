const ready = (callback) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
};

ready(() => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const filters = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project");

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filters.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      projects.forEach((project) => {
        const isVisible = filter === "all" || project.dataset.category === filter;
        project.classList.toggle("is-hidden", !isVisible);
      });

      if (window.gsap) {
        gsap.fromTo(
          ".project:not(.is-hidden)",
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, stagger: 0.05, ease: "power3.out" },
        );
      }
    });
  });

  if (!window.gsap || !window.ScrollTrigger) {
    document.querySelectorAll("[data-count]").forEach((counter) => {
      counter.textContent = counter.dataset.count;
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.set([".eyebrow", "h1", ".subheadline", ".hero-actions"], {
    y: 34,
    opacity: 0,
  });

  gsap
    .timeline({ defaults: { ease: "power4.out" } })
    .to(".eyebrow", { y: 0, opacity: 1, duration: 0.8 })
    .to("h1", { y: 0, opacity: 1, duration: 1.15 }, "-=0.45")
    .to(".subheadline", { y: 0, opacity: 1, duration: 0.8 }, "-=0.55")
    .to(".hero-actions", { y: 0, opacity: 1, duration: 0.7 }, "-=0.48");

  gsap.to(".hero-video", {
    scale: 1,
    yPercent: 8,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.utils
    .toArray(".intro, .section-heading, .service-card, .project, .capability-panel, .equipment-media, .equipment-copy, .contact-inner")
    .forEach((item) => {
      gsap.fromTo(
        item,
        { y: 54, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 84%",
          },
        },
      );
    });

  gsap.utils.toArray(".service-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(card, {
        rotateY: x * 5,
        rotateX: y * -5,
        y: -8,
        duration: 0.35,
        ease: "power2.out",
      });
    });

    card.addEventListener("pointerleave", () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        y: 0,
        duration: 0.45,
        ease: "power2.out",
      });
    });
  });

  const counters = document.querySelectorAll("[data-count]");

  ScrollTrigger.create({
    trigger: ".stats",
    start: "top 82%",
    once: true,
    onEnter: () => {
      counters.forEach((counter) => {
        const target = Number(counter.dataset.count);
        const value = { current: 0 };

        gsap.to(value, {
          current: target,
          duration: 1.8,
          ease: "power3.out",
          onUpdate: () => {
            counter.textContent = Math.round(value.current).toLocaleString();
          },
        });
      });
    },
  });
});
