<template>
    <div id="server-list" class="visible">
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
        position: relative;
        width: 100%;
        max-height: 410px;
        overflow-y: scroll;
        overflow-x: hidden;
        transform: translateX(-100%);
        transition: .3s;

        &.visible {
            transform: none;
        }
    }
</style>
