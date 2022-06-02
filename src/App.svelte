<script>
	import Header from "./Header.svelte";
	import Login from "./Login.svelte";
	import Chat from "./Chat.svelte";
	import Alert from "./Alert.svelte";
	import { username } from './user';
</script>

<main>
	<Header/>
	<Alert/>
	{#if $username}
		<Chat/>
	{:else}
		<Login/>
	{/if}
	
</main>
