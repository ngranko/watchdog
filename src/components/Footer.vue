<template>
    <div id="footer">
        <span>App icons by <a href="https://icons8.com">icons8</a></span>
        <AppButton id="button-add" title="Add new server" :onClick="buttonClick">
            <Icon :source="addSource"></Icon>
        </AppButton>
    </div>
</template>

<script>
    import AppButton from './Button.vue';
    import Icon from './Icon.vue';
    import Add from '../assets/icons/add.svg';

    export default {
        name: 'Footer',
        components: {AppButton, Icon},
        methods: {
            buttonClick() {
                document.getElementById('server-list').classList.remove('visible');
                document.getElementById('add-server').classList.add('visible');
                document.getElementById('button-add').classList.add('hidden');
            },
        },
        data: function() {
            return {
                addSource: `${Add}#add`,
            };
        },
    };
</script>

<style lang="scss">
    #footer {
        height: 40px;
        background-color: white;
        color: #2c3e50;
        font-size: 10px;
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

    #button-add {
        height: 25px;
        width: 25px;
        padding: 0 !important;

        svg {
            height: 100%;
            width: 100%;
        }

        &.hidden {
            opacity: 0;
        }
    }
</style>
