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
	
	input {
		color: inherit;
		padding: 0.75rem;
		width: 22ch;
		background-color: #0000;
		border: 1px solid #CCC9;
		border-radius: 20px;
		border-bottom-right-radius: 0;
		margin: 0.5rem 2rem;
		width: calc(100% - 4rem);
		transition: border-color 250ms, outline 250ms;
	}

	button {
		margin: 0.5em;
		margin-left: 2rem;
		background: none;
		border: 1px solid #CCC9;
		border-radius: 20px;
		border-bottom-right-radius: 0;
		color: inherit;
		padding: 0.75rem;
		transition: border-color 250ms, outline 250ms, brightness 100ms, color 100ms;
	}

	button:hover:not(disabled), input:hover {
		border-color: #CCCC;
		background-color: #F1C40F08;
	}

	button:focus:not(disabled), input:focus {
		border-color: #F1C40F;
		outline: solid #F1C40F;
	}

	button[disabled] {
		filter: brightness(0.8);
		color: #CCCC;
	}
	
	button {
		min-width: 5rem;
	}
</style>

<div id="main">
	<h1>Get started with Hive!</h1>
	<input type="text" placeholder="Username" bind:value={username}><br>
	<input type="password" placeholder="Password" bind:value={password}><br>
	<button type="submit" on:click={submit} disabled={!isValid(username, password)}>Sign up</button>
</div>

<script lang="ts">
	let username = '';
	let password = '';

	function submit(): void {
		console.log(username, password);
		username = '';
		password = '';
	}

	function isValid(username: string, password: string): boolean {
		if (username.length < 3) return false;
		if (password.length <= 0) return false;
		if (username.includes(' ')) return false;
		return true;
	}
</script>
