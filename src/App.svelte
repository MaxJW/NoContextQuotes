<script lang="ts">
    import { auth } from './firebase';
    import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
    import Quotes from './components/Quotes.svelte';
    import { SvelteToast, toast } from '@zerodevx/svelte-toast';

    const provider = new GoogleAuthProvider();
    let user = null;
    let loading = true;

    auth.onAuthStateChanged((u) => {
        loading = false;
        user = u;
    });

    function login() {
        signInWithPopup(auth, provider)
            .then((result) => {
                user = result.user;
            })
            .catch((error) => {
                console.log(error.code, error.message);
                toast.push(`⚠️ Error ${error.code}: ${error.message}`, { initial: 0 });
                toast.push(
                    '⚠️ Unable to authenticate with Google. Please try again or report this!',
                    { initial: 0 },
                );
            });
    }
</script>

{#if loading}
    <div id="login-container">
        <span class="loader" />
    </div>
{:else if user}
    <Quotes />
{:else}
    <div id="login-container">
        <button on:click={login} id="login" class="custom-button"> Sign In with Google </button>
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

    #login {
        margin: 0 auto;
        margin-top: 10px;
        width: 500px;
        max-width: 90vw;
    }

    .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #fff;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
