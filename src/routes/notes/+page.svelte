<script lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
	import Note from '$lib/Note.svelte';
	import Spinner from '$lib/Spinner.svelte';

	import type { Models } from 'appwrite';
	import { tryGetUser, avatars, createNote, getNotes, updateNote, colors } from '../../appwrite';

	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	let spinning = true;
	let saving = false;
	let noteCount = 'Loading...';
	let user: Models.User<Models.Preferences> | undefined;
	let avatar = '';
	let notes: Models.Document[] = [];
	export let value = 'New note...';

	let beforeunload: (() => boolean) | null = () => true;
	$: beforeunload = saving ? () => true : null;

	const saveWhile = async (fn: () => Promise<unknown>) => {
		saving = true;
		await fn();
		saving = false;
	};

	const resetNote = () => (value = 'New note...');
	const setNoteCounter = () => (noteCount = `${notes.length} notes`);

	saveWhile(async () => {
		const account = await tryGetUser();
		if (!account) {
			if (browser) goto('/login');
			return;
		}
		avatar = avatars.getInitials().toString();
		user = account;

		notes = sortNotes((await getNotes()).documents);
		setNoteCounter();
	});

	async function newNote(event: CustomEvent<{ value: string }>) {
		return saveWhile(async () => {
			resetNote();
			notes = [await createNote(event.detail.value), ...notes];
			setNoteCounter();
		});
	}

	function saveNote(id: string) {
		return function (event: CustomEvent<{ value: string }>) {
			saveWhile(async () => {
				resetNote();
				await updateNote(id, event.detail.value);
				notes = sortNotes(
					notes.map((note) =>
						note.$id === id
							? { ...note, note: event.detail.value, $updatedAt: new Date().toISOString() }
							: note
					)
				);
			});
		};
	}

	function sortNotes(notes: Models.Document[]) {
		return notes.sort(
			(a, b) =>
				new Date(b.$updatedAt || b.$createdAt).getTime() -
				new Date(a.$updatedAt || a.$createdAt).getTime()
		);
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
						value={note.note}
						color={colors.find((color) => color[0] == note.color)}
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
