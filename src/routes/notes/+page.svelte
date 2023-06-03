<script lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
	import Note from '$lib/Note.svelte';
	import type { Models } from 'appwrite';
	import { account, avatars } from '../../appwrite';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import Spinner from '$lib/Spinner.svelte';

	let spinning = true;
	
	let user: Models.User<Models.Preferences> | undefined;
	let avatar = '';
	account
		.get()
		.then(async (account) => {
			avatar = avatars.getInitials();
			user = account;
			console.log(user, avatar)
			spinning = false;
		})
		.catch(() => {
			if (browser) goto('/login');
		});

	// function make() {
	// 	const text = 'Hello, world!';
	// 	createNote(text)
	// 		.then(() => alert('done!'))
	// 		.catch(console.error);
	// }
</script>

<Spinner {spinning}>
	<Sidebar {user} {avatar}>
		<div class="main">
			<h1>My Notes</h1>
			<div class="notes">
				<Note color="yellow" border="3" classes="central">
					<span class="dim">New note...</span>
				</Note>
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
