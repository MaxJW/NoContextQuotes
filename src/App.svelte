<script lang="ts">
    import { auth } from './firebase';
    import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
    import Quotes from './components/Quotes.svelte';
    import { SvelteToast } from '@zerodevx/svelte-toast';

    const provider = new GoogleAuthProvider();
    let user = auth.currentUser;
    auth.onAuthStateChanged((u) => {
        user = u;
    });
    function login() {
        signInWithPopup(auth, provider)
            .then((result) => {
                user = result.user;
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });
    }
</script>

{#if user}
    <Quotes />
{:else}
    <div id="login-container">
        <button on:click={login} id="login" class="custom-button"> Sign In with Google </button>
        <p>(This means no more typing in a password)</p>
    </div>
{/if}

<SvelteToast />

<style>
    #login-container {
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

    #login-container p {
        opacity: 0.6;
    }

    #login {
        margin: 0 auto;
        margin-top: 10px;
        width: 500px;
        max-width: 90vw;
    }
</style>
