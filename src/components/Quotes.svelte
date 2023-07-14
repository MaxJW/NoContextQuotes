<script lang="ts">
    import Fa from 'svelte-fa';
    import { faCirclePlus, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import { db } from '../firebase.js';
    import { doc, getDoc, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
    import { toast } from '@zerodevx/svelte-toast';
    import Typewriter from 'svelte-typewriter';
    import Leaderboard from './Leaderboard.svelte';
    import { fade } from 'svelte/transition';

    let fullQuoteList = [];
    let stringList = [];

    const docRef = doc(db, 'quotes', 'quote_list');
    const unsub = onSnapshot(docRef, (doc) => {
        console.log('[NC Log] New snapshot found');
        if (fullQuoteList !== doc.data().quote_list) {
            let tempLength = fullQuoteList.length;
            fullQuoteList = doc.data().quote_list;
            stringList = fullQuoteList.slice();
            if (tempLength !== 0) {
                new Notification('New Quote Added', { body: fullQuoteList.at(-1).quote });
            }
        }
        search();
    });

    let spoiler = true;

    let newQuote = '';
    let newAuthor = '';

    let randomQuote = { quote: '', author: '' };
    let randomIndex = -1;

    if (
        'Notification' in window &&
        Notification.permission !== 'denied' &&
        Notification.permission !== 'granted'
    ) {
        Notification.requestPermission();
    }

    async function selectRandomQuote() {
        spoiler = true;
        if (stringList.length === 0) {
            console.log('[NC Log] Reached end of list, fetching again');
            const docSnapshot = await getDoc(docRef); // Fetch the document again
            fullQuoteList = docSnapshot.data().quote_list;
            stringList = fullQuoteList.slice();
        }
        randomIndex = Math.floor(Math.random() * stringList.length); // Select a random index
        randomQuote = stringList[randomIndex];
        randomQuote.quote += ' ';
        stringList.splice(randomIndex, 1); // Remove the selected quote from the list
    }

    async function addQuote() {
        if (newQuote != '' && newAuthor != '') {
            let quoteAuthor = { quote: newQuote.trim(), author: newAuthor.trim() };
            toast.push('Submitting quote...');
            await updateDoc(docRef, { quote_list: arrayUnion(quoteAuthor) }).then(() => {
                console.log('[NC Log] Added new quote to database');
                toast.push('Quote submitted!');
                newQuote = '';
                newAuthor = '';
            });
        }
    }

    let searchString = '';
    let selectedAuthor = '';
    let searchResults = [];
    let showNoResults = false;

    function search() {
        searchResults = fullQuoteList.filter((quote) => {
            const lowercaseSearch = searchString.toLowerCase();
            const lowercaseQuote = quote.quote.toLowerCase();
            const lowercaseAuthor = quote.author.toLowerCase();

            const authors = lowercaseAuthor.split(/[&,]/).map((author) => author.trim());

            return (
                (lowercaseQuote.includes(lowercaseSearch) ||
                    lowercaseAuthor.includes(lowercaseSearch)) &&
                (selectedAuthor === '' || authors.includes(selectedAuthor.toLowerCase()))
            );
        });
        searchResults.reverse();
        showNoResults = searchResults.length === 0;
    }

    function filterByAuthor(event) {
        selectedAuthor = event.target.value;
        search();
    }

    function resetSearch() {
        searchString = '';
    }
</script>

<Tabs>
    <TabList>
        <Tab><Fa icon={faHome} size="lg" /></Tab>
        <Tab><Fa icon={faCirclePlus} size="lg" /></Tab>
        <Tab><Fa icon={faSearch} size="lg" /></Tab>
    </TabList>

    <TabPanel>
        <div class="parent-div quotes" transition:fade={{ duration: 100 }}>
            <Leaderboard {fullQuoteList} />
            <div class="heading">
                <div class="typewriter-block">
                    {#if typeof randomQuote !== 'undefined'}
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
                    {/if}
                </div>
                <button class="custom-button load-quote" on:click={selectRandomQuote}
                    >Load Random Quote</button
                >
            </div>
        </div>
    </TabPanel>

    <TabPanel>
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
            <button class="custom-button" on:click={addQuote}>Add Quote</button>
        </div>
    </TabPanel>

    <TabPanel>
        <div class="parent-div search" transition:fade={{ duration: 100 }}>
            <h2>Search</h2>
            <div class="search-container">
                <input type="text" bind:value={searchString} placeholder="Search..." />
                {#if searchString}
                    <button class="clear-button" on:click={resetSearch}>
                        <span>&times;</span>
                    </button>
                {/if}
                <button class="custom-button" on:click={search}>Search</button>
            </div>
            <select bind:value={selectedAuthor} on:change={filterByAuthor}>
                <option value="">All Authors</option>
                {#each Array.from(new Set(stringList.map((quote) => quote.author)))
                    .filter((author) => !author.includes('&'))
                    .sort((a, b) => a.localeCompare(b)) as author}
                    <option value={author}>{author}</option>
                {/each}
            </select>

            {#if showNoResults}
                <ul class="quote-list">
                    <li>No results found.</li>
                </ul>
            {:else}
                <ul class="quote-list">
                    {#each searchResults as quote, index}
                        <li>
                            <span class="quote">{quote.quote}</span>
                            <span class="author">{quote.author}</span>
                        </li>
                    {/each}
                </ul>
            {/if}
        </div>
    </TabPanel>
</Tabs>

<style>
    :root {
        --cursor-color: #ececf1;
    }
    h1 {
        min-height: 56px;
    }

    .parent-div {
        position: fixed;
        display: flex;
        flex-direction: column;
        max-width: fit-content;
        margin: 0 auto;
        height: 90vh;
        top: 0;
        left: 0;
        right: 0;
        padding-left: 10px;
        padding-right: 10px;
    }

    .parent-div.quotes {
        justify-content: center;
    }

    .parent-div.search {
        justify-content: flex-start;
    }

    .typewriter-block {
        min-height: 124px;
    }

    .center-header {
        text-align: center;
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

    .load-quote {
        margin-top: 20px;
    }

    /* Tabs Styling */
    /* Tabs Container */
    :global(.svelte-tabs) {
        display: flex;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 90;
    }
    :global(.svelte-tabs ul.svelte-tabs__tab-list) {
        border-top: 1px solid #32324a;
        border-bottom: 0;
        display: flex;
        width: 100%;
        z-index: 99;
        background-color: #13131c;
        padding-bottom: env(safe-area-inset-bottom);
    }
    /* Tab */
    :global(.svelte-tabs li.svelte-tabs__tab) {
        width: 100%;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px;
    }
    :global(.svelte-tabs li.svelte-tabs__tab:focus) {
        outline: none;
    }
    /* Selected Tab */
    :global(.svelte-tabs li.svelte-tabs__selected) {
        border-bottom: 2px solid #7474a1;
    }
    /* Tab Panel */
    :global(.svelte-tabs div.svelte-tabs__tab-panel) {
    }

    .search-container {
        display: flex;
        align-items: center;
        width: 500px;
        max-width: 90vw;
    }

    .search-container input {
        width: 500px;
        max-width: 90vw;
        margin-right: 10px;
    }

    .search-container button {
        margin-left: 10px;
    }

    .quote-list {
        list-style: none;
        padding: 0;
        margin: 0;
        margin-top: 10px;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        height: 80vh;
        width: 500px;
        max-width: 90vw;
    }

    .quote-list li {
        border-radius: 4px;
        padding: 10px;
        margin-bottom: 10px;
        box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
    }

    .quote-list li .quote {
        font-weight: bold;
        display: block;
    }

    .quote-list li .author {
        display: block;
        color: #d8d8d8;
    }

    .clear-button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        padding: 0;
    }

    .clear-button span {
        color: #999;
        font-size: 16px;
        line-height: 1;
    }
</style>
