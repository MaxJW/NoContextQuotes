<script lang="ts">
    // import ThumbsUp from 'lucide-svelte/icons/thumbs-up';
    // import ThumbsDown from 'lucide-svelte/icons/thumbs-down';
    import { toast } from '@zerodevx/svelte-toast';
    import { fade } from 'svelte/transition';
    import Typewriter from 'svelte-typewriter';
    import Leaderboard from '../Leaderboard.svelte';
    import { auth } from '../../firebase';
    import { updateDoc } from 'firebase/firestore';

    export let docRef;
    export let fullQuoteList = [];
    let stringList = [];

    let spoiler: Boolean = true;
    let randomQuote: { quote: string; author: string; votes: { uuid: string; vote: string }[] };
    let voted: string;

    function shuffleArray(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function resetStringList() {
        console.log('[NC Log] Reached the end of the quote list. Resetting.');
        stringList = [...fullQuoteList];
        shuffleArray(stringList);
    }

    async function selectRandomQuote() {
        if (stringList.length === 0) {
            resetStringList();
        }
        spoiler = true;
        randomQuote = stringList.pop();
        randomQuote.quote += ' ';
        voted = checkVoteStatus();
    }

    function checkVoteStatus(): string {
        if (randomQuote === undefined || randomQuote.votes === undefined) {
            return undefined;
        }

        if (auth.currentUser) {
            const vote = randomQuote.votes.find((vote) => vote.uuid === auth.currentUser.uid);
            if (vote) {
                return vote.vote;
            } else {
                return undefined;
            }
        }
    }

    async function addVoteToQuote(vote: boolean) {
        let quoteIndex = fullQuoteList.findIndex((quote) => quote.quote === randomQuote.quote);
        let voteString = vote ? 'upvote' : 'downvote';
        if (fullQuoteList[quoteIndex].votes === undefined) {
            fullQuoteList[quoteIndex].votes = [];
        }
        let voteIndex = fullQuoteList[quoteIndex].votes.findIndex(
            (vote) => vote.uuid === auth.currentUser.uid,
        );

        let voteRemoved = false;
        if (voteIndex !== -1) {
            if (fullQuoteList[quoteIndex].votes[voteIndex].vote === voteString) {
                fullQuoteList[quoteIndex].votes.splice(voteIndex, 1);
                voteRemoved = true;
            } else {
                fullQuoteList[quoteIndex].votes[voteIndex].vote = voteString;
            }
        } else {
            fullQuoteList[quoteIndex].votes.push({
                uuid: auth.currentUser.uid,
                vote: voteString,
            });
        }

        await updateDoc(docRef, { quote_list: fullQuoteList }).then(() => {
            if (voteIndex !== -1) {
                if (voteRemoved) {
                    console.log('[NC Log] Removed vote from current quote');
                    toast.push('✅ Removed vote!');
                } else {
                    console.log('[NC Log] Changed vote on current quote');
                    toast.push('✅ Updated vote!');
                }
            } else {
                console.log('[NC Log] Added vote to current quote');
                toast.push('✅ Submitted vote!');
            }
            voted = voteRemoved ? undefined : voteString;
        });
    }
</script>

<div class="parent-div quotes" transition:fade={{ duration: 100 }}>
    <Leaderboard {fullQuoteList} />
    <div class="heading">
        {#if randomQuote !== undefined}
            <div class="typewriter-block">
                <Typewriter mode="concurrent" keepCursorOnFinish={true}>
                    <h1 class="random-text">{randomQuote.quote}</h1>
                </Typewriter>
                {#if spoiler}
                    <Typewriter mode="concurrent" cursor={false}>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <h1
                            id="spoiler-author"
                            class="random-text"
                            on:click={() => (spoiler = false)}
                        >
                            {randomQuote.author == '' ? '' : 'Click to Reveal'}
                        </h1>
                    </Typewriter>
                {:else}
                    <Typewriter mode="concurrent" cursor={false}>
                        <h1 class="random-text">{randomQuote.author}</h1>
                    </Typewriter>
                {/if}
            </div>
        {:else}
            <h1 class="random-text">Click below to fetch a random no context quote</h1>
        {/if}
    </div>
    <button class="custom-button load-quote" on:click={selectRandomQuote}>Load Random Quote</button>
    <!-- <div class="vote-buttons">
        <button
            class="custom-button upvote"
            class:selected={voted === 'upvote'}
            disabled={randomQuote == undefined}
            on:click={() => addVoteToQuote(true)}><ThumbsUp size={28} /></button
        >
        <button
            class="custom-button downvote"
            class:selected={voted === 'downvote'}
            disabled={randomQuote == undefined}
            on:click={() => addVoteToQuote(false)}><ThumbsDown size={28} /></button
        >
    </div> -->
</div>

<style>
    h1 {
        min-height: 56px;
    }

    .quotes {
        justify-content: center;
    }

    .typewriter-block {
        min-height: 124px;
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
        cursor: default;
    }

    #spoiler-author {
        cursor: pointer;
    }

    .load-quote {
        margin-top: 20px;
        width: 90%;
        max-width: 250px;
    }

    /* .vote-buttons {
        display: flex;
        justify-content: space-evenly;
        width: 90%;
        max-width: 250px;
        margin-top: 10px;
    }

    .vote-buttons button {
        aspect-ratio: 1/1;
        width: 65px;
        height: 100%;
        max-height: 65px;
        padding: 10px;
    }

    .vote-buttons button:hover:not(:disabled),
    .vote-buttons button.selected {
        color: white;
    }

    .vote-buttons button.selected:hover {
        color: #3c4043;
        background-color: #b6b6b6 !important;
    }

    .vote-buttons button.upvote.selected,
    .vote-buttons button.upvote:hover:not(:disabled) {
        background-color: #00c295;
    }

    .vote-buttons button.downvote.selected,
    .vote-buttons button.downvote:hover:not(:disabled) {
        background-color: #d11608;
    } */
</style>
