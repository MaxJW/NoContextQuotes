<script lang="ts">
    import { updateDoc, arrayUnion } from 'firebase/firestore';
    import { toast } from '@zerodevx/svelte-toast';
    import { fade } from 'svelte/transition';
    import Svelecte from 'svelecte';

    export let docRef;
    export let authorList;

    let newQuote = '';
    let newAuthor = [];

    async function addQuote() {
        if (newQuote != '' && newAuthor.length !== 0) {
            let now = new Date();
            let quoteAuthor = {
                quote: newQuote.trim(),
                author: newAuthor.join(' & '),
                datetime: now,
            };
            toast.push('🔃 Submitting quote...');
            await updateDoc(docRef, { quote_list: arrayUnion(quoteAuthor) }).then(() => {
                console.log('[NC Log] Added new quote to database');
                toast.push('✅ Quote submitted!');
                newQuote = '';
                newAuthor = [];
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
    <Svelecte
        class="new-quote-input-author"
        options={authorList}
        bind:value={newAuthor}
        placeholder="Quote author (type to add new)"
        multiple={true}
        creatable={true}
        closeAfterSelect={true}
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

    .submit {
        width: 90%;
        max-width: 250px;
    }

    :global(.svelecte) {
        margin: 0 auto;
        margin-top: 5px;
        margin-bottom: 50px;
        width: 520px;
        max-width: 95vw;
        flex: inherit !important;
        color: var(--form-text);

        --sv-bg: var(--background);
        --sv-border: none;
        --sv-border-radius: 6px;
        --sv-general-padding: 8px;
        --sv-item-selected-bg: #13131d;
        --sv-item-btn-color: #ccc;
        --sv-item-btn-color-hover: #ccc;
        --sv-item-btn-bg: #13131d;
        --sv-item-btn-bg-hover: #bc6063;
        --sv-dropdown-active-bg: #13131d;
        --sv-dropdown-selected-bg: #13131d;
        --sv-create-kbd-border: 1px solid #626262;
        --sv-create-kbd-bg: #626262;
    }

    :global(.sv-input--text) {
        padding-left: 0.1em !important;
        box-shadow: none !important;
    }

    :global(.sv-control:focus-within) {
        box-shadow: 0 0 0 2px #0096bfab;
        transition: box-shadow var(--animation-duration) linear;
    }
</style>
