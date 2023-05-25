<script lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
	import type { Models } from 'appwrite';
	import { account } from '../../appwrite';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import {avatars} from '../../appwrite';
	let user: Models.User<Models.Preferences> | undefined;
	let avatar = '';
	account
		.get()
		.then(async (account) => {
			avatar = avatars.getInitials();
			user = account;
		})
		.catch(() => {
			if (browser) goto('/login')
		});
</script>

<Sidebar {user} {avatar}>
	<div>Test</div>
</Sidebar>
