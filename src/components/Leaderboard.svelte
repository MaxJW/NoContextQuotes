<script lang="ts">
    import { scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { clickOutside } from '../clickOutside.js';

    export let fullQuoteList = [];

    // Use reduce() to count the occurrences of each author
    let authorCount, leaderboard;
    $: authorCount = fullQuoteList.reduce((count, { author }) => {
        // Split author name into separate authors if it contains a '&'
        const authors = author.includes(' & ') ? author.split(' & ') : [author];
        // Increment count for each author in the array
        authors.forEach((auth) => {
            const mappedAuthor = auth;
            count[mappedAuthor] = (count[mappedAuthor] || 0) + 1;
        });
        return count;
    }, {});

    // Convert the author count object to an array of objects and sort it in descending order
    $: leaderboard = Object.entries(authorCount)
        .map(([author, count]) => ({ author, count }))
        .sort((a, b) => b.count - a.count);

    let visible = false;
    let toggleIcon;

    function toggleVisibility() {
        visible = !visible;
        visible
            ? (toggleIcon.style['pointer-events'] = 'none')
            : (toggleIcon.style['pointer-events'] = 'all');
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="icon" on:click={toggleVisibility} bind:this={toggleIcon} transition:scale>
    <img src="https://cdn-icons-png.flaticon.com/512/4489/4489655.png" alt="Leaderboard button" />
</div>

{#if visible}
    <table
        class="leaderboard"
        transition:scale={{ duration: 250, opacity: 0.5, easing: quintOut }}
        use:clickOutside
        on:click_outside={toggleVisibility}
    >
        <caption>Leaderboard</caption>
        <tr>
            <th>Author</th>
            <th>Quote Count</th>
        </tr>
        {#each leaderboard as item}
            <tr>
                <td>{item.author}</td>
                <td>{item.count}</td>
            </tr>
        {/each}
    </table>
{/if}

<style>
    .icon {
        width: 70px;
        height: 70px;
        position: fixed;
        top: 0;
        left: 0;
        margin: 20px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        transition: box-shadow 0.25s ease-out;
        z-index: 98;
    }
    .icon:hover {
        box-shadow: 0px 0px 15px rgb(255, 255, 255, 0.5);
    }
    .icon img {
        height: 70%;
        width: 70%;
        margin: auto;
    }

    .leaderboard {
        display: block;
        position: fixed;
        left: 0;
        top: 90px;
        margin: 20px;
        width: auto;
        height: 350px;
        overflow-y: scroll;
        border-radius: 6px;
        background-color: var(--background);
        padding: 10px;
        z-index: 99;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    }

    table {
        border-collapse: collapse;
    }
    th:first-child {
        border-right: solid 2.5px var(--background-body);
    }
    td {
        border: solid 2.5px var(--background-body);
        max-width: 150px;
    }
    td:first-child {
        border-left: none;
    }
    td:last-child {
        border-right: none;
        border-bottom: none;
    }
    td:nth-last-child(2) {
        border-bottom: none;
    }

    .leaderboard caption {
        font-weight: bold;
        font-size: 20px;
    }
    .leaderboard * {
        text-align: center;
        vertical-align: middle;
    }
    .leaderboard tr td {
        width: 50%;
    }
    .leaderboard tr:nth-child(3) td:first-child {
        color: gold;
        font-size: 18px;
        font-weight: bold;
    }
    .leaderboard tr:nth-child(4) td:first-child {
        color: rgb(167, 167, 173);
        font-size: 18px;
        font-weight: bold;
    }
    .leaderboard tr:nth-child(5) td:first-child {
        color: rgb(167, 112, 68);
        font-size: 18px;
        font-weight: bold;
    }
</style>
