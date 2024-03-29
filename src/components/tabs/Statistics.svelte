<script lang="ts">
    import { fade } from 'svelte/transition';
    import { afterUpdate } from 'svelte';
    import Chart from 'chart.js/auto';
    import 'chartjs-adapter-date-fns';

    export let fullQuoteList = [];

    afterUpdate(() => {
        if (fullQuoteList.length > 0 && !chart) {
            createChart();
        }
    });

    let chart;
    let chartEl: HTMLCanvasElement;
    const authorsData = {};
    const chartStartDate = 1708440889000;
    let today = Date.now();
    let uniqueDatetimes = [chartStartDate, today];
    const colorPalette = [
        '#e6194B', // Red
        '#3cb44b', // Green
        '#ffe119', // Yellow
        '#4363d8', // Blue
        '#f58231', // Orange
        '#911eb4', // Purple
        '#42d4f4', // Cyan
        '#f032e6', // Magenta
        '#bfef45', // Lime
        '#fabed4', // Pink
        '#469990', // Teal
        '#dcbeff', // Lavender
        '#9A6324', // Brown
        '#fffac8', // Beige
        '#800000', // Maroon
        '#aaffc3', // Mint
        '#808000', // Olive
        '#ffd8b1', // Apricot
        '#000075', // Navy
        '#a9a9a9', // Grey
    ];

    function createChart() {
        fullQuoteList.forEach((quote) => {
            let authors = quote.author.split(/[&,]/).map((author) => author.trim());
            let datetime = quote.datetime ? quote.datetime.seconds * 1000 : chartStartDate;

            authors.forEach((author) => {
                if (!authorsData[author]) {
                    authorsData[author] = [];
                    authorsData[author].push({ x: chartStartDate, y: 0 });
                }

                let existingIndex = authorsData[author].findIndex((entry) => entry.x === datetime);
                if (existingIndex !== -1) {
                    authorsData[author][existingIndex].y++;
                } else {
                    authorsData[author].push({
                        x: datetime,
                        y: authorsData[author].slice(-1)[0].y + 1,
                    });
                }

                if (!uniqueDatetimes.includes(datetime)) {
                    uniqueDatetimes.push(datetime);
                }
            });
        });

        for (let person in authorsData) {
            authorsData[person].push({ x: today, y: authorsData[person].slice(-1)[0].y });
        }

        // Prepare dataset for Chart.js
        const datasets = Object.entries(authorsData).map(([author, data], index) => ({
            label: author,
            data,
            fill: false,
            borderColor: colorPalette[index],
        }));

        // Sort the datetime values
        uniqueDatetimes.sort();

        const ctx = chartEl.getContext('2d');

        chart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets,
                labels: uniqueDatetimes,
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day',
                        },
                        ticks: {
                            color: 'white',
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Total Quotes',
                            color: 'white',
                        },
                        ticks: {
                            color: 'white',
                        },
                    },
                },
                elements: {
                    point: {
                        radius: 5,
                        hitRadius: 3,
                    },
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white',
                        },
                    },
                },
            },
        });
    }
</script>

<div class="parent-div quotes" transition:fade={{ duration: 100 }}>
    <canvas bind:this={chartEl}></canvas>
</div>

<style>
    .parent-div {
        width: 100%;
    }

    canvas {
        padding-left: 5vw;
        padding-right: 5vw;
        padding-top: 2vh;
        max-width: 100%;
        max-height: 80vh;
    }
</style>
