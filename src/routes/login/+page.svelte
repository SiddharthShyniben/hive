<script lang="ts">
	import { goto } from '$app/navigation';
	import Spinner from '$lib/Spinner.svelte';
	import { isValid, login, loggedIn } from '../../appwrite';
	let email = '';
	let password = '';
	let spinning = true;

	loggedIn().then((yes) => {
		if (yes) {
			goto('/notes');
		}
		spinning = false;
	});

	spinning = false;

	function submit(): void {
		spinning = true;
		console.log(email, password);
		login(email, password)
			?.then(() => {
				goto('/notes');
			})
			.catch((e: Error) => {
				// TODO better error handling
				spinning = false;
				alert(e.message);
				email = '';
				password = '';
			});
	}
</script>

<Spinner {spinning}>
	<div id="main">
		<h1>Welcome back!</h1>
		<input type="text" placeholder="Email" bind:value={email} /><br />
		<input type="password" placeholder="Password" bind:value={password} /><br />
		<button type="submit" on:click={submit} disabled={!isValid('fake_username', email, password)}
			>Log in</button
		><br /><br />
		<small>Don't have an account? <a href="/signup">Sign up</a></small>
	</div>
</Spinner>

<style>
	#main {
		width: 30rem;
		min-height: 20rem;
		border: 3px solid #f1c40f;
		border-radius: 20px;
		border-bottom-right-radius: 0;
		padding: 1rem;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	h1 {
		margin-left: 2rem;
		padding: 0;
	}

	small {
		margin: 2rem;
	}
</style>
