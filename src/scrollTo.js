/* Smooth-scrolls to a section by id, driven by JS instead of a plain
   `href="#id"` anchor jump. This keeps the URL hash-free — a native anchor
   jump writes the hash into history, so reloading the page (or sharing the
   link) lands back on that section instead of the top of the site. */
export function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function handleAnchorClick(e, id) {
    e.preventDefault();
    scrollToSection(id);
}
