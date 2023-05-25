<script lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
	import Note from '$lib/Note.svelte';
	import type { Models } from 'appwrite';
	import { account, avatars, createNote } from '../../appwrite';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	let user: Models.User<Models.Preferences> | undefined;
	let avatar = '';
	account
		.get()
		.then(async (account) => {
			avatar = avatars.getInitials();
			user = account;
		})
		.catch(() => {
			if (browser) goto('/login');
		});

	function make() {
		const text = 'Hello, world!';
		createNote(text).then(() => alert('done!')).catch(console.error)
	}
</script>

<Sidebar {user} {avatar}>
	<div class='main'>
		<h1>My Notes</h1>
		<div class='notes'>
	<Note color="yellow" border="3" classes="central">
		Collaborate, capture, and organize your notes effortlessly with <strong class="hive"
			>Hive</strong
		>.<br /> <a href="/signup">Get started</a>
	</Note>

	<Note color="red" border="2" classes="note-1">
		I love the smell of napalm in the morning. Bond. James Bond.
	</Note>

	<Note color="blue" border="4" classes="note-2">
		<strong>Unicorn Ideas</strong>
		<ul>
			<li>An app that predicts when your code will compile correctly on the first try.</li>
		</ul>
	</Note>

	<Note color="green" border="3" classes="note-3">
		<strong>TODO</strong>
		<ul>
			<li>Fix #69420. It's literally one line. <strong>DO IT</strong></li>
			<li>Add a secret developer mode that turns all UI elements into ASCII art.</li>
			<li><strike>Add light mode</strike> No.</li>
		</ul>
	</Note>

	<Note color="purple" border="1" classes="note-4">
		<strong>I woke up at 3am</strong>
		<ul>
			<li>
				Just had a crazy idea: An app that generates random code comments like 'You're doing great,
				sweetie!' or 'Code like the wind, bullseye!' Instant motivation boost.
			</li>
		</ul>
	</Note>

	<Note color="orange" border="3" classes="note note-5">
		Design a fashion brand that specializes in clothing made entirely out of recycled bubble wrap,
		creating the trendiest, most protective outfits in town.
	</Note>

	<Note border="1" classes="note note-6">
		Boobs.
	</Note>

	<Note border="1" classes="note note-6">
		Boobs.
	</Note>

	<Note border="1" classes="note note-6">
		Boobs.
	</Note>

	<Note border="1" classes="note note-6">
		Boobs.
	</Note>

	<Note border="1" classes="note note-6">
		Boobs.
	</Note>

	<Note border="1" classes="note note-6">
		Dear Mr. I'm too good to call or write my fans. I hope you hear it, I m
		Dear Mr. I'm too good to call or write my fans. I hope you hear it, I m
		Dear Mr. I'm too good to call or write my fans. I hope you hear it, I m
		Dear Mr. I'm too good to call or write my fans. I hope you hear it, I m
	doing 90 on the freeway And Ohil sawkjdhsf;kas;dkfhkjahklhf kjawhef kjwahef
	lakwefha wluihfa iwuen awkefhj lweifhaw e;fijawleifhawiof ha;owefiu
	aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi
	doing 90 on the freeway And Ohil sawkjdhsf;kas;dkfhkjahklhf kjawhef kjwahef
	lakwefha wluihfa iwuen awkefhj lweifhaw e;fijawleifhawiof ha;owefiu
	aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi
	doing 90 on the freeway And Ohil sawkjdhsf;kas;dkfhkjahklhf kjawhef kjwahef
	lakwefha wluihfa iwuen awkefhj lweifhaw e;fijawleifhawiof ha;owefiu
	aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi
	doing 90 on the freeway And Ohil sawkjdhsf;kas;dkfhkjahklhf kjawhef kjwahef
	lakwefha wluihfa iwuen awkefhj lweifhaw e;fijawleifhawiof ha;owefiu
	aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi aw;oefi
	</Note>

	<Note border="1" classes="note note-6">
		Finish "The Fashionable Supervillain, Embodying the Dark Charm of Iconic Antagonists Escapes
		from a Maximum-Security Doghouse Using an Unbreakable Toothpick, Triggers a Global Dance
		Revolution Based on Interpretive Mop Maneuvers"
	</Note>

	<Note color="red" border="2" classes="note note-7">
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
	</div>
</Sidebar>

<style>
	.notes {
		display: flex;
		flex-wrap: wrap;
	}

	h1 {
		margin: 1rem;
		margin-top: 4.5rem;
		padding: 0;
	}

	.main {
	height: 100vh;
	overflow: scroll;
	}
</style>
