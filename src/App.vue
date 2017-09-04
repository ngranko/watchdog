<template>
    <div id="app">
        <div class="content">
            <ServerList :servers="serverList"></ServerList>
            <AddServer></AddServer>
        </div>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
    import ServerList from './components/ServerList.vue';
    import AddServer from './components/AddServer.vue';
    import AppFooter from './components/Footer.vue';

    export default {
        name: 'App',
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
            AppFooter,
            ServerList,
            AddServer,
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
        color: #2c3e50;
        font-family: Helvetica, sans-serif;
        font-size: 14px;
    }

    .content {
        overflow: hidden;
        position: relative;
        min-height: 212px;
        max-height: 410px;
    }
</style>
