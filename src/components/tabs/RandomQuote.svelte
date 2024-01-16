<script lang="ts">
    import Fa from 'svelte-fa';
    import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

    import { auth } from '../../firebase';
    import { updateDoc } from 'firebase/firestore';
    import Typewriter from 'svelte-typewriter';
    import Leaderboard from '../Leaderboard.svelte';
    import { fade } from 'svelte/transition';
    import { toast } from '@zerodevx/svelte-toast';

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
        stringList = [...fullQuoteList]; // Use spread operator for array cloning
        shuffleArray(stringList);
    }

    async function selectRandomQuote() {
        if (stringList.length === 0) {
            resetStringList();
        }

        randomQuote = stringList.pop(); // Pop the last element from the shuffled array
        randomQuote.quote += ' ';
        voted = checkVoteStatus();
    }

    function checkVoteStatus(): string {
        if (randomQuote === undefined || randomQuote.votes === undefined) {
            console.log('failed');
            return undefined;
        }
        if (auth.currentUser) {
            console.log('is user');
            // Check if user has voted on this quote
            console.log('finding vote');
            const vote = randomQuote.votes.find((vote) => vote.uuid === auth.currentUser.uid);
            console.log(vote);
            if (vote) {
                return vote.vote;
            } else {
                return undefined;
            }
        }
    }

    async function addVoteToQuote(vote: boolean) {
        //find current random quote in fullQuoteList
        let quoteIndex = fullQuoteList.findIndex((quote) => quote.quote === randomQuote.quote);
        let voteString = vote ? 'upvote' : 'downvote';
        //check if votes exists in quote
        if (fullQuoteList[quoteIndex].votes === undefined) {
            fullQuoteList[quoteIndex].votes = [];
        }
        //add vote to quote, unless vote already exists in which case replace it. If vote is equal to current vote, remove vote
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
        //update doc
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
    <div class="vote-buttons">
        <button
            class="custom-button upvote"
            class:selected={voted === 'upvote'}
            disabled={randomQuote == undefined}
            on:click={() => addVoteToQuote(true)}><Fa icon={faThumbsUp} size="lg" /></button
        >
        <button
            class="custom-button downvote"
            class:selected={voted === 'downvote'}
            disabled={randomQuote == undefined}
            on:click={() => addVoteToQuote(false)}><Fa icon={faThumbsDown} size="lg" /></button
        >
    </div>
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

    .vote-buttons {
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
    }
</style>
