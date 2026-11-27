// One observer handles static sections and the current page of resource cards.
// Content stays visible when animation APIs are unavailable or motion is reduced.
const siteMotion = (() => {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pending = new Set();
  const revealed = new WeakSet();
  const seenResources = new Set();
  const active = new Map();
  const staticSelector =
    ".hero-copy, .section-heading, .source-group, .resource-toolbar, .sidebar, .bottom-banner";

  // Sample a damped spring so entry motion settles naturally without taking over
  // the transform used by CSS for hover lift and press feedback.
  function springFrames(duration, fromY, fromScale = 1) {
    const steps = 40;
    return Array.from({ length: steps + 1 }, (_, index) => {
      const offset = index / steps;
      const time = (offset * duration) / 1000;
      const progress = index === steps
        ? 1
        : 1 - Math.exp(-11.5 * time) *
          (Math.cos(17.6 * time) + (11.5 / 17.6) * Math.sin(17.6 * time));
      return {
        offset,
        opacity: Math.min(1, offset * 4),
        translate: `0 ${(fromY * (1 - progress)).toFixed(3)}px`,
        ...(fromScale !== 1
          ? { scale: String(fromScale + (1 - fromScale) * progress) }
          : {}),
      };
    });
  }

  const entryFrames = springFrames(680, 26);
  const dialogFrames = springFrames(480, 18, 0.97);

  function remember(element) {
    revealed.add(element);
    const id = element.dataset.resource;
    if (id) seenResources.add(id);
  }

  function cancel(element) {
    const animation = active.get(element);
    active.delete(element);
    animation?.cancel();
  }

  function animate(element, keyframes, options) {
    if (preference.matches || typeof element.animate !== "function") return;
    cancel(element);
    const animation = element.animate(keyframes, options);
    active.set(element, animation);
    const cleanup = () => {
      if (active.get(element) === animation) active.delete(element);
    };
    animation.addEventListener("finish", cleanup, { once: true });
    animation.addEventListener("cancel", cleanup, { once: true });
  }

  const observer =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            let order = 0;
            for (const entry of entries) {
              if (!entry.isIntersecting || !pending.has(entry.target)) continue;
              const element = entry.target;
              observer.unobserve(element);
              pending.delete(element);
              // A queued observer entry may outlive a search/filter render.
              if (!element.isConnected) continue;
              const id = element.dataset.resource;
              if (id && seenResources.has(id)) continue;
              remember(element);
              animate(
                element,
                entryFrames,
                {
                  duration: 680,
                  delay: Math.min(order++ * 38, 114),
                  easing: "linear",
                  fill: "backwards",
                },
              );
            }
          },
          { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
        )
      : null;

  function observe(root = document) {
    const selector = root === document ? staticSelector : ".resource-card";
    root.querySelectorAll(selector).forEach((element) => {
      const id = element.dataset.resource;
      if (
        revealed.has(element) ||
        pending.has(element) ||
        (id && seenResources.has(id))
      )
        return;
      if (!observer || preference.matches) {
        remember(element);
        return;
      }
      pending.add(element);
      observer.observe(element);
    });
  }

  function release(root) {
    root.querySelectorAll(".resource-card").forEach((element) => {
      observer?.unobserve(element);
      pending.delete(element);
      cancel(element);
    });
  }

  function revealDialog(dialog) {
    animate(
      dialog,
      dialogFrames,
      { duration: 480, easing: "linear" },
    );
  }

  function scrollTo(element) {
    element.scrollIntoView({
      behavior: preference.matches ? "auto" : "smooth",
      block: "start",
    });
  }

  function onPreferenceChange() {
    if (preference.matches) {
      for (const animation of active.values()) animation.cancel();
      active.clear();
      observer?.disconnect();
      for (const element of pending) remember(element);
      pending.clear();
    } else {
      observe();
      const grid = document.getElementById("resource-grid");
      if (grid) observe(grid);
    }
  }

  if (typeof preference.addEventListener === "function")
    preference.addEventListener("change", onPreferenceChange);
  else if (typeof preference.addListener === "function")
    preference.addListener(onPreferenceChange);

  return { observe, release, revealDialog, scrollTo };
})();
