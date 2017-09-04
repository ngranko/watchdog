<template>
    <div class="server">
        <div>{{name}}</div>
        <Icon :class="iconClass" :source="iconSource"></Icon>
    </div>
</template>

<script>
    import Icon from './Icon.vue';
    import Ok from '../assets/icons/ok.svg';
    import Warning from '../assets/icons/warning.svg';

    export default {
        name: 'Server',
        props: {
            name: {
                type: String,
                required: true,
            },
            status: {
                type: String,
                required: true,
            },
        },
        data: function() {
            return {
                iconClass: this.status === 'ok' ? 'icon-ok' : ' icon-error',
                iconSource: this.status === 'ok' ? `${Ok}#ok` : `${Warning}#warning`,
            };
        },
        components: {Icon},
    };
</script>

<style lang="scss">
    .server {
        height: 50px;
        background-color: white;
        color: #2c3e50;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            color: #2c3e50;

            &:hover {
                color: black;
            }
        }
    }

    .icon-status {
        width: 30px;
        height: 30px;
    }

    .icon-ok {
        @extend .icon-status;
        fill: #5D9D52;
    }

    .icon-error {
        @extend .icon-status;
        fill: #F6C244;
    }

    .icon-refreshing {
        @extend .icon-status;
        animation: spin 1s infinite linear;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
