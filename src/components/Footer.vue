<template>
    <div id="footer">
        <span>App icons by <a href="https://icons8.com">icons8</a></span>
        <Button class="button-add" title="Add new server" :onClick="buttonClick">
            <Icon :source="addSource"></Icon>
        </Button>
    </div>
</template>

<script>
    import Button from './Button.vue';
    import Icon from './Icon.vue';
    import Add from '../assets/icons/add.svg';

    export default {
        name: 'footer',
        components: {Button, Icon},
        methods: {
            buttonClick() {
                console.log('clicked!');
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
        height: 50px;
        background-color: white;
        color: #2c3e50;
        font-size: 12px;
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

    .button-add {
        height: 25px;
        width: 25px;
        padding: 0 !important;

        svg {
            height: 100%;
            width: 100%;
        }
    }
</style>
