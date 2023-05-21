<style>
	.note {
		margin: auto;
		padding: 1em;
		color: #FFFC;
		min-width: 15em;
		max-width: 20em;
		max-height: 12.5em;
		border: 3px solid #95A5A6;
		border-radius: 20px;

		position: absolute;
	}

	.note:not(.central) {
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
		border-color: #3498db;
	}

	a {
		color: #3498db;
	}

	a:hover {
		filter: brightness(1.1);
	}

	a:visited {
		color: #3498db;
	}

	.red {
		border-color: #e74c3c;
	}

	.green {
		border-color: #1abc9c;
	}

	.purple {
		border-color: #9B59B6;
	}

	.yellow {
		border-color: #F1C40F;
	}
	
	.orange {
		border-color: #E67E22;
	}

	ul {
		padding-left: 1em;
	}

	.notes {
		position: relative;
		width: 100vw;
		height: 100vh;
	}

	.note.central {
		background-color: #0000;
		color: white;
		font-weight: bold;
		font-size: 20px;

		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.note-1 {
		right: 7%;
		top: 0%;
		transform: translate(50%, -50%);
	}

	.note-2 {
		left: 7%;
		top: 23%;
		transform: translate(-50%, -50%);
	}

	.note-3 {
		right: 23%;
		bottom: 19%;
		transform: translate(50%, 50%);
	}

	.note-4 {
		bottom: 56%;
		right: 12%;
		transform: translate(50%, 50%);
	}

	.note-5 {
		bottom: 13%;
		left: 27%;
		transform: translate(-50%, 50%);
	}
	
	.note-6 {
		top: 12%;
		left: 53%;
		transform: translate(-50%, -50%);
	}
	
	.note-7 {
		top: 59%;
		left: 12%;
		transform: translate(-50%, -50%);
	}

	.hive {
		color: #F1C40F;
	}

	pre {
		font-size: 16px;
	}

	.note {
		overflow-y: hidden;
	}
</style>

<div class="notes">
	<div class="note yellow central border-4">Collaborate, capture, and organize your notes
		effortlessly with <strong class='hive'>Hive</strong>.<br> <a href="#">Get started</a></div>
	<div class="note note-1 red border-2">
		I love the smell of napalm in the morning.
		Bond. James Bond.
	</div>
	
	<div class="note note-2 blue border-3">
		<strong>Unicorn Ideas</strong>
		<ul>
			<li>An app that predicts when your code will compile correctly on
				the first try.</li>
		</ul>
	</div>
	
	<div class="note note-3 green border-4">
		<strong>TODO</strong>
		<ul>
			<li>Fix #69420. It's literally one line. <strong>DO IT</strong></li>
			<li>Add a secret developer mode that turns all UI elements into
				ASCII art.</li>
			<li><strike>Add light mode</strike> No.</li>
		</ul>
	</div>
	
	<div class="note note-4 purple border-1">
		<strong>I woke up at 3am</strong>
		<ul>
			<li>Just had a crazy idea: An app that generates random code
				comments like 'You're doing great, sweetie!' or 'Code like the
				wind, bullseye!' Instant motivation boost.</li>
		</ul>
	</div>
	
	<div class="note note-5 orange border-3">Design a fashion brand that
		specializes in clothing made entirely out of recycled bubble wrap,
		creating the trendiest, most protective outfits in town. </div>
	
	<div class="note note-6 border-1">Publish article "The Fashionable
		Supervillain, Embodying the Dark Charm of Iconic Antagonists Escapes
		from a Maximum-Security Doghouse Using an Unbreakable Toothpick,
		Triggers a Global Dance Revolution Based on Interpretive Mop
		Maneuvers"</div>
	
	<div class="note note-7 red border-2">
		<pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">struct</span> <span style="color: #f8f8f2">ListItemWrapper(Vec</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">ListItem</span><span style="color: #f92672">&lt;</span><span style="color: #960050; background-color: #1e0010">&#39;</span><span style="color: #66d9ef">static</span><span style="color: #f92672">&gt;&gt;</span><span style="color: #f8f8f2">);</span>

			<span style="color: #66d9ef">impl</span> <span style="color:
			#f8f8f2">From</span><span style="color: #f92672">&lt;</span><span
				style="color: #f8f8f2">Vec</span><span style="color:
				#f92672">&lt;</span><span style="color: #f8f8f2">std</span><span
				style="color: #f92672">::</span><span style="color:
				#f8f8f2">string</span><span style="color:
				#f92672">::</span><span style="color:
				#f8f8f2">String</span><span style="color:
				#f92672">&gt;&gt;</span> <span style="color: #66d9ef">for</span>
			<span style="color: #f8f8f2">ListItemWrapper</span> <span
				style="color: #f8f8f2">&lcub;</span>
	<span style="color: #66d9ef">fn</span> <span style="color:
		#f8f8f2">from(strings</span><span style="color: #f92672">:</span> <span
				style="color: #f8f8f2">Vec</span><span style="color:
				#f92672">&lt;</span><span style="color: #f8f8f2">std</span><span
				style="color: #f92672">::</span><span style="color:
				#f8f8f2">string</span><span style="color:
				#f92672">::</span><span style="color:
				#f8f8f2">String</span><span style="color:
				#f92672">&gt;</span><span style="color: #f8f8f2">)</span> <span
				style="color: #f92672">-&gt;</span> <span style="color:
				#f8f8f2">Self</span> <span style="color: #f8f8f2">&lcub;</span>
		<span style="color: #66d9ef">let</span> <span style="color: #f8f8f2">list_items</span><span style="color: #f92672">:</span> <span style="color: #f8f8f2">Vec</span><span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">ListItem</span><span style="color: #f92672">&lt;</span><span style="color: #960050; background-color: #1e0010">&#39;</span><span style="color: #66d9ef">static</span><span style="color: #f92672">&gt;&gt;</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">strings</span>
			<span style="color: #f8f8f2">.into_iter()</span>
			<span style="color: #f8f8f2">.map(</span><span style="color: #f92672">|</span><span style="color: #f8f8f2">url</span><span style="color: #f92672">|</span> <span style="color: #f8f8f2">ListItem</span><span style="color: #f92672">::</span><span style="color: #f8f8f2">new(</span><span style="color: #f92672">&amp;</span><span style="color: #f8f8f2">url))</span>
			<span style="color: #f8f8f2">.collect();</span>

		<span style="color: #f8f8f2">ListItemWrapper(list_items)</span>
	<span style="color: #f8f8f2">}</span>
<span style="color: #f8f8f2">}</span>
		</pre>

	</div>
</div>
