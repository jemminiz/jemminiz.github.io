export const site = {
  name: 'Jonathan Emminizer',
  email: 'jonathan@emminizer.dev',
  github: 'https://github.com/jemminiz',
  linkedin: 'https://linkedin.com/in/jemminiz',
  hire: 'https://www.fiverr.com/jemminiz/help-bring-your-application-to-life',
};

export interface ProjectItem { name: string; url: string; stack: string[] }
export interface RobotItem { name: string; weapon: string; status: string }

/** Scroll to a section on the home page, or navigate there from another page. */
export function goTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ block: 'start' });
  else window.location.href = `/#${id}`;
}

export function openExternal(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

/** Flip light/dark and remember it. Returns the new theme. */
export function toggleTheme(): 'light' | 'dark' {
  const root = document.documentElement;
  const current = root.dataset.theme
    ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch { /* storage unavailable */ }
  return next;
}

export async function copyText(text: string) {
  await navigator.clipboard.writeText(text);
}
