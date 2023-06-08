<script lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
	import Note from '$lib/Note.svelte';
	import type { Models } from 'appwrite';
	import { tryGetUser, avatars, createNote, getNotes, updateNote, colors } from '../../appwrite';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import Spinner from '$lib/Spinner.svelte';

	let spinning = true;
	let saving = false;
	let noteCount = 'Loading...';
	let beforeunload: (() => boolean) | null = () => true;

	$: beforeunload = saving ? () => true : null;

	let user: Models.User<Models.Preferences> | undefined;
	let avatar = '';
	let notes: Models.Document[] = [];
	export let value = 'New note...';

	tryGetUser().then(async (account) => {
		if (!account) {
			if (browser) goto('/login');
			return;
		}
		avatar = avatars.getInitials().toString();
		user = account;
		getNotes().then((n: Models.DocumentList<Models.Document>) => {
			notes = sortNotes(n.documents);
			noteCount = `${n.total} notes`;
			spinning = false;
		});
	});

	async function newNote(event: CustomEvent<{ value: string }>) {
		saving = true;
		value = 'New note...';
		const note = await createNote(event.detail.value);
		saving = false;
		notes = [note, ...notes];
		noteCount = `${notes.length} notes`;
	}

	function saveNote(id: string) {
		return async function (event: CustomEvent<{ value: string }>) {
			saving = true;
			await updateNote(id, event.detail.value);
			notes = sortNotes(
				notes.map((note) =>
					note.$id === id
						? { ...note, note: event.detail.value, $updatedAt: new Date().toISOString() }
						: note
				)
			);
			saving = false;
		};
	}

	function sortNotes(notes: Models.Document[]) {
		return notes.sort(
			(a, b) =>
				new Date(b.$updatedAt || b.$createdAt).getTime() -
				new Date(a.$updatedAt || a.$createdAt).getTime()
		);
	}

	function getColorName(c: string) {
		return colors.find((color: string) => color[0] == c);
	}
</script>

<svelte:window on:beforeunload={beforeunload} />

<Spinner {spinning}>
	<Sidebar {user} {avatar} {noteCount} spinning={saving}>
		<div class="main">
			<h1>My Notes</h1>
			<div class="notes">
				<Note bind:value color="yellow" border="3" on:closed={newNote} />
				{#each notes as note}
					<Note
						bind:value={note.note}
						color={getColorName(note.color)}
						border={note.border}
						on:closed={saveNote(note.$id)}
					/>
				{/each}
			</div>
		</div>
	</Sidebar>
</Spinner>

<style>
	.notes {
		display: flex;
		flex-wrap: wrap;
	}

	h1 {
		margin: 1rem;
		margin-top: 4.5rem;
		padding: 0;
	}

	.main {
		height: 100vh;
		overflow: scroll;
	}
</style>
