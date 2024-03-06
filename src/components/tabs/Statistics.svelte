<script lang="ts">
    import { fade } from 'svelte/transition';

    import { afterUpdate } from 'svelte';
    import Chart from 'chart.js/auto';

    export let fullQuoteList = [];

    let chart;
    const authorsData = {};
    const startDate = 1704067200;
    const chartStartDate = 1708440889;
    let today = Date.now();
    let uniqueDatetimes = [startDate, chartStartDate, today];

    afterUpdate(() => {
        if (fullQuoteList.length > 0 && !chart) {
            createChart();
        }
    });

    function createChart() {
        fullQuoteList.forEach((quote) => {
            let authors = quote.author.split(/[&,]/);
            let datetime = quote.datetime ? quote.datetime.seconds : chartStartDate;

            authors.forEach((author) => {
                author = author.trim();
                if (!authorsData[author]) {
                    authorsData[author] = [];
                    authorsData[author].push({ x: startDate, y: 0 });
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
        const datasets = Object.entries(authorsData).map(([author, data]) => ({
            label: author,
            data,
            fill: false,
        }));

        // Sort the datetime values
        uniqueDatetimes.sort();

        // Render chart
        const ctx = document.getElementById('myChart').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets,
                labels: uniqueDatetimes,
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'Total Quotes',
                        },
                    },
                },
            },
        });
    }
</script>

<div class="parent-div quotes" transition:fade={{ duration: 100 }}>
    <canvas id="myChart" width={400} height={400}></canvas>
</div>
