<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { copyText, goTo, openExternal, site, toggleTheme, type ProjectItem } from '@/lib/site';

const props = defineProps<{ projects: ProjectItem[] }>();

interface Command { key: string; hint: string; external?: boolean; run: () => void }

const commands: Command[] = [
  { key: 'about', hint: 'Who I am', run: () => goTo('about') },
  { key: 'projects', hint: 'ls -l projects/', run: () => goTo('projects') },
  { key: 'robots', hint: 'Combat robots', run: () => goTo('robots') },
  { key: 'experience', hint: 'tail experience.log', run: () => goTo('experience') },
  { key: 'contact', hint: 'Email and links', run: () => goTo('contact') },
  { key: 'resume', hint: 'cat resume.md', run: () => { window.location.href = '/resume'; } },
  { key: 'copy email', hint: site.email, run: () => { copyText(site.email).catch(() => {}); } },
  { key: 'github', hint: 'Open GitHub profile', external: true, run: () => openExternal(site.github) },
  { key: 'linkedin', hint: 'Open LinkedIn', external: true, run: () => openExternal(site.linkedin) },
  { key: 'theme', hint: 'Switch light / dark', run: () => { toggleTheme(); } },
  ...props.projects.map((p) => ({
    key: `open ${p.name}`,
    hint: p.stack.join(' · '),
    external: true,
    run: () => openExternal(p.url),
  })),
];

const open = ref(false);
const query = ref('');
const selected = ref(0);
const input = ref<HTMLInputElement | null>(null);
const isMac = ref(false);
let lastFocus: Element | null = null;

const shown = computed(() => {
  const q = query.value.trim().toLowerCase();
  return commands.filter((c) => !q || c.key.includes(q) || c.hint.toLowerCase().includes(q));
});
watch(query, () => (selected.value = 0));

async function show() {
  lastFocus = document.activeElement;
  query.value = '';
  selected.value = 0;
  open.value = true;
  await nextTick();
  input.value?.focus();
}
function hide() {
  open.value = false;
  (lastFocus as HTMLElement | null)?.focus?.();
}
function run(c?: Command) {
  if (!c) return;
  hide();
  c.run();
}
function onInputKey(e: KeyboardEvent) {
  const n = Math.max(1, shown.value.length);
  if (e.key === 'ArrowDown') { selected.value = (selected.value + 1) % n; e.preventDefault(); }
  else if (e.key === 'ArrowUp') { selected.value = (selected.value - 1 + n) % n; e.preventDefault(); }
  else if (e.key === 'Enter') run(shown.value[selected.value]);
  else if (e.key === 'Escape') hide();
}
function onGlobalKey(e: KeyboardEvent) {
  const typing = /INPUT|TEXTAREA/.test((document.activeElement as HTMLElement | null)?.tagName ?? '');
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    open.value ? hide() : show();
  } else if (e.key === '/' && !typing && !open.value) {
    e.preventDefault();
    show();
  }
}

onMounted(() => {
  isMac.value = /Mac|iPhone|iPad/.test(navigator.userAgent);
  document.addEventListener('keydown', onGlobalKey);
});
onBeforeUnmount(() => document.removeEventListener('keydown', onGlobalKey));
</script>

<template>
  <button
    type="button"
    aria-haspopup="dialog"
    class="flex cursor-pointer items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-muted hover:text-fg"
    @click="show"
  >
    Commands <kbd>{{ isMac ? '⌘' : 'Ctrl' }}</kbd><kbd>K</kbd>
  </button>

  <div
    v-if="open"
    class="fixed inset-0 z-20 grid place-items-start justify-center bg-fg/25 px-4 pt-[12vh]"
    @click.self="hide"
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      class="w-[min(560px,calc(100vw-2rem))] overflow-hidden rounded-xl border border-line bg-bg shadow-2xl"
    >
      <input
        ref="input"
        v-model="query"
        placeholder="Search commands and projects…"
        autocomplete="off"
        spellcheck="false"
        aria-label="Search commands"
        aria-controls="palette-list"
        :aria-activedescendant="shown.length ? `palette-opt-${selected}` : undefined"
        class="w-full border-b border-line bg-transparent px-4 py-3.5 font-mono text-[15px] text-fg outline-none"
        @keydown="onInputKey"
      />
      <ul id="palette-list" role="listbox" class="max-h-[50vh] overflow-auto p-1.5">
        <li
          v-for="(c, i) in shown"
          :id="`palette-opt-${i}`"
          :key="c.key"
          role="option"
          :aria-selected="i === selected"
          class="flex cursor-pointer justify-between gap-3 rounded-md px-2.5 py-2 font-mono text-sm aria-selected:bg-surface aria-selected:text-kw"
          @mousemove="selected = i"
          @click="run(c)"
        >
          <span>{{ c.external ? '↗ ' : '' }}{{ c.key }}</span>
          <span class="truncate font-sans text-[13px] text-muted">{{ c.hint }}</span>
        </li>
        <li v-if="!shown.length" class="px-3 py-3 font-mono text-[13px] text-muted">no match. try "projects"</li>
      </ul>
    </div>
  </div>
</template>
