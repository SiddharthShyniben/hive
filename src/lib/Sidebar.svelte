<script lang="ts">
	import type { Models } from 'appwrite';
	import { page } from '$app/stores';
	import Spinner from './Spinner.svelte';
	export let user: Models.User<Models.Preferences> | undefined;
	export let avatar = '';
	export let noteCount = 'Loading...';
	export let spinning = false;

	const urls = ['notes', 'tags', 'archive', 'trash', 'settings'];
</script>

<Spinner spinning={!(user && avatar)}>
	<div class="main">
		<div class="sidebar">
			<div class="header">
				<div>
					<img src={avatar} alt={user?.name} />
					<h2>{user?.name}</h2>
					<small>
						{noteCount}
						{#if spinning}
							&nbsp;(Saving...)
						{/if}
					</small>
					<hr />
				</div>
				<div class="sidebar-sections">
					<ul>
						{#each urls as url}
							<li>
								<a href="/{url}" class:active={$page.route.id?.includes(url)}>
									{url[0].toUpperCase()}{url.slice(1)}
								</a>
							</li>
						{/each}
					</ul>
					<ul class="smaller">
						<li>
							<a href="/logout" class:active={$page.route.id?.includes('logout')}>Log Out</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<slot />
	</div>
</Spinner>

<style>
	.main {
		display: flex;
		height: 100vh;
	}

	.sidebar {
		min-width: 15rem;
		z-index: 99;
		background-color: var(--bg);
	}

	img {
		width: 80px;
		border-radius: 10px;
	}

	.sidebar .header {
		margin: 1.5rem;
		height: calc(100% - 3rem);
		display: flex;
		flex-direction: column;
	}

	.sidebar h2 {
		font-size: 2.5rem;
		margin: 1rem auto;
		margin-bottom: 0;
	}

	.sidebar small {
		color: var(--bg);
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

	ul.smaller li {
		font-size: 1rem;
		margin-bottom: 0;
	}

	ul li a {
		text-decoration: none;
		color: #fff;
	}

	ul li a:not(.active) {
		color: #898989;
	}

	.sidebar-sections {
		flex-grow: 100;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
	}

	small {
		color: var(--dim) !important;
	}
</style>
