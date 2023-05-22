<script lang="ts">
	import {isValid} from '../../appwrite';
	let email = '';
	let password = '';

	function submit(): void {
		console.log(email, password);
		email = '';
		password = '';
	}
</script>

<div id="main">
	<h1>Welcome back!</h1>
	<input type="text" placeholder="Email" bind:value={email} /><br />
	<input type="password" placeholder="Password" bind:value={password} /><br />
	<button type="submit" on:click={submit} disabled={!isValid('fake_username', email, password)}>Log in</button><br
	/>
	<small>Don't have an account? <a href="/signup">Sign up</a></small>
</div>

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
		margin-top: 1rem !important;
	}
</style>
