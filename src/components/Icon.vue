<template>
    <svg>
        <use v-bind:xlink:href="source"></use>
    </svg>
</template>

<script>
    export default {
        name: 'Icon',
        props: ['source'],
    };
</script>
