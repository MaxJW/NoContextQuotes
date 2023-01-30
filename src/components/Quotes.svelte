<script lang="ts">
    import { db } from '../firebase.js';
    import { doc, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
    import { toast } from '@zerodevx/svelte-toast';
    import Typewriter from 'svelte-typewriter';

    const docRef = doc(db, 'quotes', 'quote_list');
    const unsub = onSnapshot(docRef, (doc) => {
        stringList = doc.data().quote_list;
        console.log(stringList);
    });
    let newQuote = '';
    let newAuthor = '';

    let stringList = [];
    let randomString = { quote: '', author: '' };

    function selectRandomString() {
        let oldString = randomString;
        while (randomString == oldString) {
            randomString = stringList[Math.floor(Math.random() * stringList.length)];
        }
    }

    async function addQuote() {
        if (newQuote != '' && newAuthor != '') {
            let quoteAuthor = { quote: newQuote, author: newAuthor };
            toast.push('Submitting quote...');
            await updateDoc(docRef, { quote_list: arrayUnion(quoteAuthor) }).then(() => {
                toast.push('Quote submitted!');
                newQuote = '';
                newAuthor = '';
            });
        }
    }
</script>

<div class="profile">
    <div class="heading">
        <Typewriter mode="concurrent" keepCursorOnFinish="true">
            <h1 class="random-text">{randomString.quote}</h1>
        </Typewriter>
        <Typewriter mode="concurrent" keepCursorOnFinish="true">
            <h1 class="random-text">{randomString.author}</h1>
        </Typewriter>
        <button class="random-button" on:click={selectRandomString}>Load Random Quote</button>
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
            placeholder="Write the author of the quote here"
        />
        <button class="random-button" on:click={addQuote}>Add Quote</button>
    </div>
</div>

<style>
    .profile {
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
    }

    .heading {
        text-align: center;
        pointer-events: all;
    }

    .heading .random-text {
        font-size: 2.5rem;
        font-weight: 500;
        margin-top: 5px;
        margin-bottom: 10px;
        color: white;
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
        margin-bottom: 10px;
        width: 500px;
        max-width: 90vw;
    }

    /* CSS */
    .random-button {
        align-items: center;
        appearance: none;
        background-color: #fff;
        border-radius: 24px;
        border-style: none;
        box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px, rgba(0, 0, 0, 0.14) 0 6px 10px 0,
            rgba(0, 0, 0, 0.12) 0 1px 18px 0;
        box-sizing: border-box;
        color: #3c4043;
        cursor: pointer;
        display: inline-flex;
        fill: currentcolor;
        font-family: 'Google Sans', Roboto, Arial, sans-serif;
        font-size: 14px;
        font-weight: 500;
        height: 40px;
        justify-content: center;
        letter-spacing: 0.25px;
        line-height: normal;
        max-width: 100%;
        overflow: visible;
        padding: 2px 24px;
        position: relative;
        text-align: center;
        text-transform: none;
        transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms,
            transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        width: auto;
        will-change: transform, opacity;
        z-index: 0;
    }

    .random-button:hover {
        background: #f6f9fe;
        color: #174ea6;
    }

    .random-button:active {
        box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
        outline: none;
    }

    .random-button:focus {
        outline: none;
        border: 2px solid #4285f4;
    }

    .random-button:not(:disabled) {
        box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0, rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
    }

    .random-button:not(:disabled):hover {
        box-shadow: rgba(60, 64, 67, 0.3) 0 2px 3px 0, rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
    }

    .random-button:not(:disabled):focus {
        box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0, rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
    }

    .random-button:not(:disabled):active {
        box-shadow: rgba(60, 64, 67, 0.3) 0 4px 4px 0, rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
    }

    .random-button:disabled {
        box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0, rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
    }
</style>
