<script lang="ts">
	import Note from '$lib/Note.svelte';
</script>

<div class="notes">
	<Note color="yellow" border="3" classes="central">
		Collaborate, capture, and organize your notes effortlessly with <strong class="hive"
			>Hive</strong
		>.<br /> <a href="/signup">Get started</a>
	</Note>

	<Note color="red" border="2" classes="note-1" dim>
		I love the smell of napalm in the morning. Bond. James Bond.
	</Note>

	<Note color="blue" border="4" classes="note-2" dim>
		<strong>Unicorn Ideas</strong>
		<ul>
			<li>An app that predicts when your code will compile correctly on the first try.</li>
		</ul>
	</Note>

	<Note color="green" border="3" classes="note-3" dim>
		<strong>TODO</strong>
		<ul>
			<li>Fix #69420. It's literally one line. <strong>DO IT</strong></li>
			<li>Add a secret developer mode that turns all UI elements into ASCII art.</li>
			<li><strike>Add light mode</strike> No.</li>
		</ul>
	</Note>

	<Note color="purple" border="1" classes="note-4" dim>
		<strong>I woke up at 3am</strong>
		<ul>
			<li>
				Just had a crazy idea: An app that generates random code comments like 'You're doing great,
				sweetie!' or 'Code like the wind, bullseye!' Instant motivation boost.
			</li>
		</ul>
	</Note>

	<Note color="orange" border="3" classes="note note-5" dim>
		Design a fashion brand that specializes in clothing made entirely out of recycled bubble wrap,
		creating the trendiest, most protective outfits in town.
	</Note>

	<Note border="1" classes="note note-6" dim>
		Finish "The Fashionable Supervillain, Embodying the Dark Charm of Iconic Antagonists
		Escapes from a Maximum-Security Doghouse Using an Unbreakable Toothpick, Triggers a Global Dance
		Revolution Based on Interpretive Mop Maneuvers"
	</Note>

	<Note color="red" border="2" classes="note note-7" dim>
		<pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">struct</span> <span
				style="color: #f8f8f2">ListItemWrapper(Vec</span
			><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">ListItem</span><span
				style="color: #f92672">&lt;</span
			><span style="color: #960050; background-color: #1e0010">&#39;</span><span
				style="color: #66d9ef">static</span
			><span style="color: #f92672">&gt;&gt;</span><span style="color: #f8f8f2">);</span>

			<span style="color: #66d9ef">impl</span> <span
				style="color:
			#f8f8f2">From</span
			><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">Vec</span><span
				style="color:
				#f92672">&lt;</span
			><span style="color: #f8f8f2">std</span><span style="color: #f92672">::</span><span
				style="color:
				#f8f8f2">string</span
			><span
				style="color:
				#f92672">::</span
			><span
				style="color:
				#f8f8f2">String</span
			><span
				style="color:
				#f92672">&gt;&gt;</span
			> <span style="color: #66d9ef">for</span>
			<span style="color: #f8f8f2">ListItemWrapper</span> <span style="color: #f8f8f2">&lcub;</span>
	<span style="color: #66d9ef">fn</span> <span
				style="color:
		#f8f8f2">from(strings</span
			><span style="color: #f92672">:</span> <span style="color: #f8f8f2">Vec</span><span
				style="color:
				#f92672">&lt;</span
			><span style="color: #f8f8f2">std</span><span style="color: #f92672">::</span><span
				style="color:
				#f8f8f2">string</span
			><span
				style="color:
				#f92672">::</span
			><span
				style="color:
				#f8f8f2">String</span
			><span
				style="color:
				#f92672">&gt;</span
			><span style="color: #f8f8f2">)</span> <span style="color: #f92672">-&gt;</span> <span
				style="color:
				#f8f8f2">Self</span
			> <span style="color: #f8f8f2">&lcub;</span>
		<span style="color: #66d9ef">let</span> <span style="color: #f8f8f2">list_items</span><span
				style="color: #f92672">:</span
			> <span style="color: #f8f8f2">Vec</span><span style="color: #f92672">&lt;</span><span
				style="color: #f8f8f2">ListItem</span
			><span style="color: #f92672">&lt;</span><span
				style="color: #960050; background-color: #1e0010">&#39;</span
			><span style="color: #66d9ef">static</span><span style="color: #f92672">&gt;&gt;</span> <span
				style="color: #f92672">=</span
			> <span style="color: #f8f8f2">strings</span>
			<span style="color: #f8f8f2">.into_iter()</span>
			<span style="color: #f8f8f2">.map(</span><span style="color: #f92672">|</span><span
				style="color: #f8f8f2">url</span
			><span style="color: #f92672">|</span> <span style="color: #f8f8f2">ListItem</span><span
				style="color: #f92672">::</span
			><span style="color: #f8f8f2">new(</span><span style="color: #f92672">&amp;</span><span
				style="color: #f8f8f2">url))</span
			>
			<span style="color: #f8f8f2">.collect();</span>

		<span style="color: #f8f8f2">ListItemWrapper(list_items)</span>
	<span style="color: #f8f8f2">}</span>
<span style="color: #f8f8f2">}</span>
		</pre>
	</Note>
</div>

<style>
	.hive {
		color: #f1c40f;
	}

	.notes :global(ul) {
		padding-left: 1em;
		margin-bottom: 0;
	}

	.notes {
		position: relative;
		width: 100vw;
		height: 100vh;
	}

	.notes > :global(.note.central) {
		color: white;
		font-weight: bold;
		font-size: 20px;

		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 999;
		box-shadow: 0px 0px 200px 40px #101010;
	}

	.notes > :global(.note-1) {
		right: 7%;
		top: 0%;
		transform: translate(50%, -50%);
	}

	.notes > :global(.note-2) {
		left: 7%;
		top: 23%;
		transform: translate(-50%, -50%);
	}

	.notes > :global(.note-3) {
		right: 23%;
		bottom: 19%;
		transform: translate(50%, 50%);
	}

	.notes > :global(.note-4) {
		bottom: 56%;
		right: 12%;
		transform: translate(50%, 50%);
	}

	.notes > :global(.note-5) {
		bottom: 13%;
		left: 27%;
		transform: translate(-50%, 50%);
	}

	.notes > :global(.note-6) {
		top: 12%;
		left: 53%;
		transform: translate(-50%, -50%);
	}

	.notes > :global(.note-7) {
		top: 59%;
		left: 12%;
		transform: translate(-50%, -50%);
	}

	pre {
		font-size: 16px;
	}

	.notes > :global(.note) {
		position: absolute;
	}
</style>
