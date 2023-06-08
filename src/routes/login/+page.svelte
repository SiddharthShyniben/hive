<script lang="ts">
	import { dev } from '$app/environment';
	import { goto } from '$app/navigation';
	import Spinner from '$lib/Spinner.svelte';
	import { isValid, login, loggedIn } from '../../appwrite';
	import logger from '../../log';
	let email = '';
	let password = '';
	let spinning = true;

	const { log, error } = logger(dev);

	loggedIn().then((yes) => {
		if (yes) {
			log('already logged in');
			goto('/notes');
		} else spinning = false;
	});

	function submit(): void {
		log('submitting', email, password);
		spinning = true;
		login(email, password)
			?.then(() => {
				log('login success');
				goto('/notes');
			})
			.catch((e: Error) => {
				error(e);
				// TODO better error handling
				spinning = false;
				email = password = '';
				alert(e.message);
			});
	}
</script>

<Spinner {spinning}>
	<div id="main">
		<h1>Welcome back!</h1>
		<input type="text" placeholder="Email" bind:value={email} /><br />
		<input type="password" placeholder="Password" bind:value={password} /><br />
		<button type="submit" on:click={submit} disabled={!isValid('fake_username', email, password)}>
			Log in
		</button>
		<br /><br />
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
