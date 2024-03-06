<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    export let fullQuoteList = [];

    let searchString = '';
    let selectedAuthor = '';
    let searchResults = [];
    let showNoResults = false;

    $: fullQuoteList, search();

    function search() {
        console.log('[NC Log] Searching');
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
        if (document.getElementById('quote-search') !== null) {
            document.getElementById('quote-search').scrollTop = 0;
        }
    }

    function filterByAuthor(event) {
        selectedAuthor = event.target.value;
        search();
    }

    function resetSearch() {
        searchString = '';
    }

    onMount(() => {
        search();
    });
</script>

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
    <select class="author-select" bind:value={selectedAuthor} on:change={filterByAuthor}>
        <option value="">All Authors</option>
        {#each Array.from(new Set(fullQuoteList.map((quote) => quote.author)))
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
        <ul id="quote-search" class="quote-list">
            {#each searchResults as quote, index}
                <li>
                    <span class="quote">{quote.quote}</span>
                    <span class="author">{quote.author}</span>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .search {
        justify-content: flex-start;
        max-width: fit-content;
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

    .author-select {
        min-width: -webkit-fill-available;
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
