<script lang="ts">
	import { browser, dev } from '$app/environment';
	import { goto } from '$app/navigation';
	import { account } from '../../appwrite';
	import logger from '../../log';
	const { log, warn } = logger(dev);

	(async () => {
		log('logging out');
		try {
			await account.deleteSession((await account.getSession('current')).$id);
		} catch (e: unknown) {
			warn('already logged out...?');
			warn(e as Error);
		}
		if (browser) goto('/', { replaceState: true });
	})();
</script>
