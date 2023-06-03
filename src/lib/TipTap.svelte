<script lang="ts">
	import { onMount } from 'svelte';
	import type { Readable } from 'svelte/store';
	import { createEditor, Editor, EditorContent } from 'svelte-tiptap';
	import StarterKit from '@tiptap/starter-kit';

	let editor: Readable<Editor>;
	export let value = '';

	onMount(() => {
		editor = createEditor({
			extensions: [StarterKit],
			content: value || `Run free.`,
			autofocus: true,
			onUpdate({ editor }) {
				value = editor.getHTML();
				console.log(editor.options)
			}
		});
	});
</script>

{#if editor}
	<EditorContent editor={$editor} />
{/if}
