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
        padding: 5px 10px;
        border-radius: 3px;
        cursor: pointer;
        transition: .2s;

        &:hover {
            background-color: #ededed;
        }
    }
</style>
