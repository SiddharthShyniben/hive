<script lang="ts">
	import { createUser, isValid, loggedIn } from '../../appwrite';
	import { goto } from '$app/navigation';
	import Spinner from '$lib/Spinner.svelte';
	import logger from '../../log';
	import { dev } from '$app/environment';
	let spinning = true;
	let username = '';
	let email = '';
	let password = '';

	const { log, error } = logger(dev);

	loggedIn().then((yes) => {
		if (yes) {
			log('redirecting');
			goto('/notes');
		} else spinning = false;
	});

	function submit(): void {
		log('submitting', username, email, password);
		spinning = true;
		createUser(username, email, password)
			?.then(() => {
				// TODO: auto login
				// TODO better error handling
				log('redirecting');
				goto('/notes');
			})
			.catch((e) => {
				error(e);
				spinning = false;
				alert(e.message);
				username = '';
				email = '';
				password = '';
			});
	}
</script>

<Spinner {spinning}>
	<div id="main">
		<h1>Get started with Hive!</h1>
		<input type="text" placeholder="Username" bind:value={username} required /><br />
		<input type="email" placeholder="Email" bind:value={email} required /><br />
		<input type="password" placeholder="Password" bind:value={password} required /><br />
		<button type="submit" on:click={submit} disabled={!isValid(username, email, password)}
			>Sign up</button
		><br />
		<small>Already have an account? <a href="/login">Log In</a></small>
	</div>
</Spinner>

<style>
	#main {
		width: 30rem;
		min-height: 20rem;
		border: 3px solid var(--yellow);
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

	button {
		margin-bottom: 1.34rem;
	}
	small {
		margin: 2rem;
	}
</style>
