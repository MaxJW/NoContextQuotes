<script lang="ts">
    import { fade } from 'svelte/transition';
</script>

<div class="parent-div quotes" transition:fade={{ duration: 100 }}>
    <h2 class="center-header">2023 No Context Champions</h2>
    <ul class="quote-list award-list">
        <li>Ali, Blair - 54</li>
        <li>Ross - 47</li>
        <li>Ewan - 36</li>
    </ul>
</div>

<style>
    .award-list {
        overflow-y: auto;
        list-style: none;
        padding: 0;
        margin: 0;
        margin-top: 10px;
        -webkit-overflow-scrolling: touch;
        height: 80vh;
        width: 500px;
        max-width: 90vw;
    }

    .award-list li {
        font-size: 1.5rem;
        font-weight: bold;
        border-radius: 4px;
        padding: 10px;
        margin-bottom: 10px;
        box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
    }

    .award-list li:nth-child(1) {
        color: gold;
    }
    .award-list li:nth-child(2) {
        color: rgb(167, 167, 173);
    }
    .award-list li:nth-child(3) {
        color: rgb(167, 112, 68);
    }
</style>
