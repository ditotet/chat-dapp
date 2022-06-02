<script>
	import Header from "./Header.svelte";
	import Login from "./Login.svelte";
	import Chat from "./Chat.svelte";
	import { username } from './user';
</script>

<main>
	<link rel='stylesheet' href='bootstrap/dist/css/bootstrap.min.css'>
	<Header/>
	{#if $username}
		<Chat/>
	{:else}
		<Login/>
	{/if}
</main>
