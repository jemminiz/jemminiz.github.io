<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { goTo, openExternal, site, toggleTheme, type ProjectItem, type RobotItem } from '@/lib/site';

const props = defineProps<{ projects: ProjectItem[]; robots: RobotItem[] }>();

interface Line { kind: 'cmd' | 'out'; html: string }

const esc = (s: string) => s.replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch]!);
const k = (s: string) => `<span class="text-kw">${esc(s)}</span>`;
const str = (s: string) => `<span class="text-str">${esc(s)}</span>`;

const help = `Commands: ${['about', 'projects', 'robots', 'experience', 'contact', 'resume', 'github', 'theme', 'clear'].map(k).join(', ')}.`;
const lines = ref<Line[]>([{ kind: 'out', html: `${help} Try one.` }]);
const value = ref('');
const input = ref<HTMLInputElement | null>(null);

const responses: Record<string, () => string> = {
  help: () => help,
  whoami: () => 'jonathan',
  about: () => `Backend developer and CS student at UMD who builds robots. ${str('Scrolling to about.')}`,
  projects: () => props.projects.map((p) => `${k(p.name + '/')}  ${esc(p.stack.join(' · '))}`).join('\n'),
  ls: () => props.projects.map((p) => k(p.name + '/')).join('  '),
  robots: () => props.robots.map((r) => `${k(r.name)}  ${esc(r.weapon.toLowerCase())}  [${str(r.status)}]`).join('\n'),
  experience: () => `Opening experience.log. ${str('Scrolling.')}`,
  contact: () => `email   ${str(site.email)}\ngithub  github.com/jemminiz`,
  resume: () => `Opening ${k('/resume')}.`,
  github: () => `Opening ${k('github.com/jemminiz')} in a new tab.`,
  theme: () => `Theme set to ${str(toggleTheme())}.`,
  sudo: () => 'Nice try. This incident will be reported.',
};
const actions: Record<string, () => void> = {
  about: () => goTo('about'),
  robots: () => goTo('robots'),
  experience: () => goTo('experience'),
  resume: () => { window.location.href = '/resume'; },
  github: () => openExternal(site.github),
};

async function submit() {
  const raw = value.value.trim();
  value.value = '';
  if (!raw) return;
  const cmd = raw.toLowerCase().split(/\s+/)[0]!;
  lines.value.push({ kind: 'cmd', html: `~ $ ${esc(raw)}` });
  if (cmd === 'clear') { lines.value = []; return; }
  const r = responses[cmd];
  lines.value.push({ kind: 'out', html: r ? r() : `command not found: ${esc(cmd)}. Type ${k('help')}.` });
  if (actions[cmd]) setTimeout(actions[cmd], 350);
  await nextTick();
  input.value?.scrollIntoView({ block: 'nearest' });
}
</script>

<template>
  <div class="rounded-lg border border-line bg-surface px-4 py-3.5 font-mono text-sm" @click="input?.focus()">
    <p
      v-for="(line, i) in lines"
      :key="i"
      class="mb-1.5 break-words whitespace-pre-wrap"
      :class="line.kind === 'cmd' ? 'text-fg' : 'text-muted'"
      v-html="line.html"
    />
    <label class="flex items-center gap-2" for="shell-input">
      <span class="flex-none text-ok">~ $</span>
      <input
        id="shell-input"
        ref="input"
        v-model="value"
        autocomplete="off"
        spellcheck="false"
        placeholder="type a command"
        aria-label="Type a command"
        class="min-w-0 flex-1 bg-transparent text-fg caret-kw outline-none placeholder:text-muted/70"
        @keydown.enter="submit"
      />
    </label>
  </div>
</template>
