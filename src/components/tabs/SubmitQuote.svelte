<script lang="ts">
    import { updateDoc, arrayUnion } from 'firebase/firestore';
    import { toast } from '@zerodevx/svelte-toast';
    import { fade } from 'svelte/transition';

    export let docRef;

    let newQuote = '';
    let newAuthor = '';

    async function addQuote() {
        if (newQuote != '' && newAuthor != '') {
            let quoteAuthor = { quote: newQuote.trim(), author: newAuthor.trim() };
            toast.push('🔃 Submitting quote...');
            await updateDoc(docRef, { quote_list: arrayUnion(quoteAuthor) }).then(() => {
                console.log('[NC Log] Added new quote to database');
                toast.push('✅ Quote submitted!');
                newQuote = '';
                newAuthor = '';
            });
        }
    }
</script>

<div class="parent-div quotes" transition:fade={{ duration: 100 }}>
    <h2 class="center-header">Submit a new quote</h2>
    <input
        id="new-quote-input"
        type="text"
        bind:value={newQuote}
        placeholder="Submit a new quote here"
    />
    <input
        id="new-quote-input-author"
        type="text"
        bind:value={newAuthor}
        placeholder="Write quote author here. If multiple, separate with &"
    />
    <button class="custom-button submit" on:click={addQuote}>Add Quote</button>
</div>

<style>
    .quotes {
        justify-content: center;
    }

    #new-quote-input {
        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 10px;
        width: 500px;
        max-width: 90vw;
    }

    #new-quote-input-author {
        margin: 0 auto;
        margin-top: 5px;
        margin-bottom: 50px;
        width: 500px;
        max-width: 90vw;
    }

    .submit {
        width: 90%;
        max-width: 250px;
    }
</style>
