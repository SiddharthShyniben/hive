<script lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
	import type { Models } from 'appwrite';
	import { account, avatars, createNote } from '../../appwrite';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	let user: Models.User<Models.Preferences> | undefined;
	let avatar = '';
	account
		.get()
		.then(async (account) => {
			avatar = avatars.getInitials();
			user = account;
		})
		.catch(() => {
			if (browser) goto('/login');
		});

	function make() {
		const text = 'Hello, world!';
		createNote(text).then(() => alert('done!')).catch(console.error)
	}
</script>

<Sidebar {user} {avatar}>
	<div>Test</div>
	<button on:click={make}>Make a note!</button>
</Sidebar>
