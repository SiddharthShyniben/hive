<script lang="ts">
	import type { Models } from 'appwrite';
	import { account } from '../../appwrite';
	import { goto } from '$app/navigation';
	let user: Models.User<Models.Preferences> | undefined;
	try {
		account
			.get()
			.then((account) => (user = account))
			.catch(() => goto('/login'));
	} catch (e) {
		goto('/login');
	}
</script>

{#if user}
	<h1>Hello, {user.name}</h1>
{:else}
	<div class="overlay">
		<div class="lds-ellipsis">
			<div />
			<div />
			<div />
			<div />
		</div>
	</div>
{/if}

<style>
	.overlay {
		width: 100vw;
		height: 100vh;
		background-color: #0007;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
	}

	.lds-ellipsis {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
