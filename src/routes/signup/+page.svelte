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
		padding: 0.75rem;
		width: 22ch;
		background-color: #0000;
		border: 1px solid #CCC9;
		border-radius: 20px;
		border-bottom-right-radius: 0;
		margin: 0.5rem 2rem;
		width: calc(100% - 4rem);
		transition: border-color 500ms;
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
		transition: border-color 500ms;
	}

	button:hover, input:hover {
		border-color: #CCCC;
		background-color: #F1C40F08;
	}

	button:focus, input:focus {
		border-color: #F1C40F;
		outline: solid #F1C40F;
	}
</style>

<div id="main">
	<h1>Get started with Hive!</h1>
	<input type="text" placeholder="Username"><br>
	<input type="password" placeholder="Password"><br>
	<button type="submit">Sign up</button>
</div>
