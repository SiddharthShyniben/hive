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

<div id="main">
	<h1>Welcome back!</h1>
	<input type="text" placeholder="Username" bind:value={username} /><br />
	<input type="password" placeholder="Password" bind:value={password} /><br />
	<button type="submit" on:click={submit} disabled={!isValid(username, password)}>Log in</button>
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
</style>
