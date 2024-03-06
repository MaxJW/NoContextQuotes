<script lang="ts">
    import { MessageCirclePlus, Home, SearchIcon, LineChart, Crown } from 'lucide-svelte';
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import { auth, db } from '../firebase.js';
    import { doc, onSnapshot, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';

    import RandomQuote from './tabs/RandomQuote.svelte';
    import SubmitQuote from './tabs/SubmitQuote.svelte';
    import Search from './tabs/Search.svelte';
    import Statistics from './tabs/Statistics.svelte';
    import { toast } from '@zerodevx/svelte-toast';
    import { onMount } from 'svelte';
    import Winners from './tabs/Winners.svelte';

    let fullQuoteList = [];

    const docRef = doc(db, 'quotes', 'quote_list');
    const unsub = onSnapshot(docRef, (doc) => {
        console.log('[NC Log] New snapshot found');
        if (fullQuoteList !== doc.data().quote_list) {
            let tempLength = fullQuoteList.length;
            fullQuoteList = doc.data().quote_list;
            if (tempLength < fullQuoteList.length && tempLength !== 0) {
                new Notification('New Quote Added', { body: fullQuoteList.at(-1).quote });
            }
        }
    });

    const triggerStartupNotification = async () => {
        const docSnap = await getDoc(doc(db, 'notifications', 'startup_notif'));
        if (docSnap.exists()) {
            if (
                docSnap.data().read_list &&
                docSnap.data().read_list.includes(auth.currentUser.uid)
            ) {
                return;
            }
            if (docSnap.data().body && docSnap.data().body !== '') {
                toast.push(docSnap.data().body, {
                    theme: {
                        '--toastBackground': docSnap.data().background_colour || '#3e3e3f',
                        '--toastColor': docSnap.data().colour || '#ffffff',
                    },
                    onpop: async () => {
                        await updateDoc(doc(db, 'notifications', 'startup_notif'), {
                            read_list: arrayUnion(auth.currentUser.uid),
                        });
                    },
                    initial: 0,
                });
            }
        } else {
            console.log('[NC Log] No startup notification found.');
        }
    };

    if (
        'Notification' in window &&
        Notification.permission !== 'denied' &&
        Notification.permission !== 'granted'
    ) {
        Notification.requestPermission();
    }

    onMount(() => {
        triggerStartupNotification();
    });
</script>

<Tabs>
    <TabList>
        <Tab><Home size={28} /></Tab>
        <Tab><SearchIcon size={28} /></Tab>
        <Tab><MessageCirclePlus size={28} /></Tab>
        <Tab><LineChart size={28} /></Tab>
        <Tab><Crown size={28} /></Tab>
    </TabList>

    <TabPanel>
        <RandomQuote {docRef} {fullQuoteList} />
    </TabPanel>

    <TabPanel>
        <Search {fullQuoteList} />
    </TabPanel>

    <TabPanel>
        <SubmitQuote {docRef} />
    </TabPanel>

    <TabPanel>
        <Statistics {fullQuoteList} />
    </TabPanel>

    <TabPanel>
        <Winners />
    </TabPanel>
</Tabs>

<style>
    :root {
        --cursor-color: #ececf1;
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
        background-color: #1e1e27;
    }
</style>
