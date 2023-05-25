<script lang="ts">
	import type { Models } from 'appwrite';
	import { account } from '../../appwrite';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import {avatars} from '../../appwrite';
	let user: Models.User<Models.Preferences> | undefined;
	let avatar = '';
	account
		.get()
		.then(async (account) => {
			avatar = avatars.getInitials();
			user = account;
		})
		.catch(() => {
			if (browser) goto('/login')
		});
</script>

{#if user}
	<div class="main">
		<div class="sidebar">
			<div class='header'>
				<img src={avatar} alt="{user.name}">
				<h2>{user.name}</h2> <!-- TODO time of day -->
				<small>69 notes</small>
				<hr />
				<ul>
					<li><a href='/notes' class='active'>My Notes</a></li>
					<li><a href='/tags'>Tags</a></li>
					<li><a href='/archive'>Archive</a></li>
					<li><a href='/trash'>Trash</a></li>
					<li><a href='/settings'>Settings</a></li>
				</ul>
			</div>
		</div>
		<div>test ig</div>
	</div>
{:else}
	<div class="overlay">
		<div class="lds-ellipsis">
			<div />
			<div />
			<div />
			<div />
		</div>
	</div>
{/if}

<style>
	.overlay {
		width: 100vw;
		height: 100vh;
		background-color: #0007;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
	}

	.lds-ellipsis {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.main {
		display: flex;
		height: 100vh;
	}

	.sidebar {
		width: 15rem;
		background-color: #131313;
	}

	img {
		width: 80px;
		border-radius: 10px;
	}

	.sidebar .header {
		margin: 1.5rem;
	}

	.sidebar h2 {
		font-size: 2.5rem;
		margin: 1rem auto;
		margin-bottom: 0;
	}

	.sidebar small {
		color: #898989;
		transform: translateY(-1000%);
	}

	hr {
		border: 0.5px solid #222222;
	}

	ul {
		margin: 1em 0;
		padding: 0;
		list-style-type: none;
	}

	ul li {
		font-size: 1.344rem;
		font-weight: bold;
		margin-bottom: 0.67em;
	}

	ul li a {
		text-decoration: none;
		color: #fff;
	}
	
	ul li a:not(.active) {
		color: #898989;
	}
</style>