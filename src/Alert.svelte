<script>
	import { message } from './alert';
</script>

<div class="alert-wrapper col-sm-4">
    {#if $message}
        <div class="alert alert-danger fade show" role="alert">
            {$message}
        </div>
    {/if}
</div>

<style>
    .alert-wrapper {
        margin: 20px auto;
        height: 60px;
    }
</style>