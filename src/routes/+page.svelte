<style>
	#main {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.row {
		flex-grow: 1;

		display: flex;
		flex-direction: row;
		
		width: 120%;
		transform: translateX(-10%);
	}

	.row:nth-child(2) {
		transform: translateX(-2%);
	}

	.note {
		margin: 1em;
		padding: 1em;
		color: #FFFC;
		background-color: #7E8788;
		min-width: 15em;
		max-width: 20em;
		max-height: 12.5em;
		border-radius: 20px;
	}

	.note:not(.main) {
		opacity: 0.6;
	}

	.note.border-1 {
		border-top-left-radius: 0px;
	}
	
	.note.border-2 {
		border-top-right-radius: 0px;
	}
	
	.note.border-3 {
		border-bottom-right-radius: 0px;
	}
	
	.note.border-4 {
		border-bottom-left-radius: 0px;
	}

	.note div {
		height: calc((100vh / 3) - 6em);
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.blue {
		background-color: #5773A6;
	}

	a {
		color: #5773A6;
	}

	a:hover {
		filter: brightness(1.1);
	}

	a:visited {
		color: initial;
	}

	.red {
		background-color: #B0463B;
	}

	.green {
		background-color: #549D88;
	}

	ul {
		padding-left: 1em;
	}

	.note.main {
		background-color: #0000;
		border: 3px solid #FFDA03;
	}
</style>

<div id="main">
	<div class="row">
		<div class="note blue border-3"><div>I don't know who you are. I don't know what you
			want. If you are looking for ransom I can tell you I don't have
			money, but what I do have are a very particular set of skills.
			Skills I have acquired over a very long career. Skills that make me
			a...</div></div>
		<div class="note red border-2">
			<strong>Brainstorm #4</strong>
			<ul>
				<li>Mobile game where players control a clumsy penguin trying to
					navigate a crowded dance floor without tripping over its
					own feet</li>
			</ul>
		</div>
		<div class="note green border-4">
			<strong>Unicorn Ideas</strong>
			<ul>
				<li>An app that predicts when your code will compile correctly
					on the first try.</li>
			</ul>
		</div>
		<div class="note border-1">
			<strong>TODO</strong>
			<ul>
				<li>Fix that one line of code I've been delaying for weeks. c'mon, it's just one line!</li>
			</ul>
		</div>
	</div>
	
	<div class="row">
		<div class="note border-3">
			<strong>Coffee intake log</strong>
			<ul>
				<li>9:00 AM: Single espresso. Feeling productive.</li>
				<li>11:00 AM: Double shot of espresso. Powering through those
					nested loops.</li>
			</ul>
		</div>
		<div class="note main">
			Collaborative note taking for developers, <a href='https://github.com/SiddharthShyniben/hive'>by developers</a>.<br><br>
			<strong><a href="/signup">Try it.</a></strong><br>
		</div>
		<div class="note green border-1">
			Guys, my code is giving me a headache. Anyone up for a pair
			programming session? I'll bring the coffee, you bring the bug
			spray. Let's squash those bugs together!
		</div>
		<div class="note border-1">Last night, I had a groundbreaking idea for a
			new programming language. It's called 'Hyperscript'—you just think
			about the code, and it writes itself. Next step: convince the world
			that mind-reading is a necessary skill for developers.</div>
	</div>
	
	<div class="row">
		<div class="note blue border-3"><div>I don't know who you are. I don't know what you
			want. If you are looking for ransom I can tell you I don't have
			money, but what I do have are a very particular set of skills.
			Skills I have acquired over a very long career. Skills that make me
			a...</div></div>
		<div class="note red border-2">
			<strong>Brainstorm #4</strong>
			<ul>
				<li>Mobile game where players control a clumsy penguin trying to
					navigate a crowded dance floor without tripping over its
					own feet</li>
			</ul>
		</div>
		<div class="note green border-4">
			<strong>Unicorn Ideas</strong>
			<ul>
				<li>An app that predicts when your code will compile correctly
					on the first try.</li>
				<li>A coffee machine that automatically refills itself when it
					detects a coding error.</li>
			</ul>
		</div>
		<div class="note border-1">
			<strong>TODO</strong>
			<ul>
				<li>Fix that one line of code I've been delaying for weeks. c'mon, it's just one line!</li>
			</ul>
		</div>
	</div>
</div>
