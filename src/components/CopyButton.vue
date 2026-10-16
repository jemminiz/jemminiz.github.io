<script setup lang="ts">
import { ref } from 'vue';
import { copyText } from '@/lib/site';

const props = defineProps<{ text: string }>();
const status = ref('');

async function copy() {
  try {
    await copyText(props.text);
    status.value = 'copied';
  } catch {
    status.value = 'press Ctrl+C';
  }
  setTimeout(() => (status.value = ''), 2000);
}
</script>

<template>
  <button
    type="button"
    class="cursor-pointer rounded border border-line px-2 font-mono text-xs text-muted hover:text-fg"
    @click="copy"
  >copy</button>
  <span class="font-mono text-xs text-ok" aria-live="polite">{{ status }}</span>
</template>
