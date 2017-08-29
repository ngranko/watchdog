<template>
    <div id="app">
        <ServerList :servers="serverList"></ServerList>
        <Footer></Footer>
    </div>
</template>

<script>
    import ServerList from './components/ServerList.vue';
    import Footer from './components/Footer.vue';

    export default {
        name: 'app',
        data: () => {
            return {
                serverList: [
                    {
                        name: 'test1',
                        status: 'ok',
                    },
                    {
                        name: 'test2',
                        status: 'ok',
                    },
                    {
                        name: 'test3',
                        status: 'error',
                    },
                ],
            };
        },
        components: {
            Footer,
            ServerList,
        },
    };
</script>

<style>
    body {
        padding: 0;
        margin: 0;
    }

    * {
        box-sizing: border-box;
    }

    #app {
        background-color: white;
        border-radius: 3px;
        text-align: center;
        color: #2c3e50;
    }
</style>
