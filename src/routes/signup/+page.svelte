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

	button {
		margin-bottom: 1.34em;
	}
</style>

<div id="main">
	<h1>Get started with Hive!</h1>
	<input type="text" placeholder="Username" bind:value={username} required><br>
	<input type="email" placeholder="Email" bind:value={email} required><br>
	<input type="password" placeholder="Password" bind:value={password} required><br>
	<button type="submit" on:click={submit} disabled={!isValid(username, email, password)}>Sign up</button>
</div>

<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import {createUser, isValid} from '../../appwrite';
	let username = '';
	let email = '';
	let password = '';

	function submit(): void {
		console.log(username, email, password);
		createUser(username, email, password)?.then(() => {
			// TODO: auto login
			// TODO better error handling
			redirect(303, '/dashboard');
		}).catch(e => alert(e.message));
		username = '';
		email = '';
		password = '';
	}
</script>
