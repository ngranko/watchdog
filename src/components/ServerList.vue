<template>
    <div id="server-list">
        <div v-for="server in servers">
            <Server :name="server.name" :status="server.status"></Server>
        </div>
    </div>
</template>

<script>
    import Server from './Server.vue';

    export default {
        name: 'ServerList',
        props: {
            servers: Array,
        },
        components: {
            Server,
        },
    };
</script>

<style lang="scss">
    #server-list {
        max-height: 400px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>
