<script lang="ts">
    import Quotes from './components/Quotes.svelte';
    import { SvelteToast } from '@zerodevx/svelte-toast';

    let password = '';
    const hash = (s) =>
        s.split('').reduce((a, b) => {
            a = (a << 5) - a + b.charCodeAt(0);
            return a & a;
        }, 0);
</script>

{#if hash(password) === 1252560117}
    <Quotes />
{:else}
    <div id="password-container">
        <label for="password">Password:</label>
        <input id="password" bind:value={password} type="password" />
    </div>
{/if}

<SvelteToast />

<style>
    #password-container {
        position: fixed;
        display: flex;
        flex-direction: column;
        max-width: fit-content;
        justify-content: center;
        margin: 0 auto;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        text-align: center;
    }

    #password-container label {
        font-size: 2.5rem;
        font-weight: 500;
        margin-top: 5px;
        margin-bottom: 10px;
        color: white;
        cursor: default;
    }

    #password {
        margin: 0 auto;
        margin-top: 10px;
        width: 500px;
        max-width: 90vw;
    }
</style>
