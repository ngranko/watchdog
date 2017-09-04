<template>
    <div class="button" v-on:click="onClick">
        <slot>Label</slot>
    </div>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            onClick: {
                type: Function,
                required: true,
            },
        },
    };
</script>

<style lang="scss">
    .button {
        display: inline-block;
        padding: 5px 10px;
        margin: 5px;
        border-radius: 3px;
        cursor: pointer;
        transition: .2s;

        &:hover {
            background-color: #ededed;
        }
    }
</style>
