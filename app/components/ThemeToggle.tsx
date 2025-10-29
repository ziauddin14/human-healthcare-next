"use client";

/*
  Theme Toggle (Disabled)
  The site is locked to dark mode for production stability.
  Keeping a static icon for visual consistency.
 */
export default function ThemeToggle() {
  return (
    <div
      className="p-3 rounded-xl cursor-default select-none text-xl"
      aria-hidden
      title="Dark mode locked"
    >
      🌙
    </div>
  );
}
