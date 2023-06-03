<script lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
	import Note from '$lib/Note.svelte';
	import type { Models } from 'appwrite';
	import { tryGetUser, avatars, createNote, getNotes, updateNote } from '../../appwrite';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import Spinner from '$lib/Spinner.svelte';

	let spinning = true;
	let noteCount = 'Loading...';

	let user: Models.User<Models.Preferences> | undefined;
	let avatar = '';
	let notes: Models.Document[] = [];

	tryGetUser().then(async (account) => {
		if (!account) {
			if (browser) goto('/login');
			return;
		}
		avatar = avatars.getInitials().toString();
		user = account;
		spinning = false;
		getNotes().then((n: Models.DocumentList<Models.Document>) => {
			notes = n.documents;
			noteCount = `${n.total} notes`;
			console.log(notes);
		});
	});
	export let value = 'New note...';

	async function newNote(event: CustomEvent<{ value: string }>) {
		value = 'New note...';
		const note = await createNote(event.detail.value);
		notes = [note, ...notes];
		noteCount = `${notes.length} notes`;
	}

	function saveNote(id: string) {
		return async function (event: CustomEvent<{ value: string }>) {
			notes = notes.map((note) => (note.$id === id ? { ...note, note: event.detail.value } : note));
			updateNote(id, event.detail.value);
		};
	}
</script>

<Spinner {spinning}>
	<Sidebar {user} {avatar} {noteCount}>
		<div class="main">
			<h1>My Notes</h1>
			<div class="notes">
				<Note bind:value color="yellow" border="3" on:closed={newNote} />
			</div>
			{#each notes as note}
				<Note bind:value={note.note} color="yellow" border="3" on:closed={saveNote(note.$id)} />
			{/each}
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
