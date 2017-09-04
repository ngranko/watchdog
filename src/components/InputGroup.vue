<template>
    <div class="input-group">
        <div class="label">{{label}}</div>
        <input type="text" ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)" :placeholder="placeholder"/>
    </div>
</template>

<script>
    export default {
        name: 'InputGroup',
        props: {
            label: {
                type: String,
                required: true,
            },
            placeholder: String,
            value: String,
        },
        methods: {
            updateValue(value) {
                const formattedValue = value.trim();
                if (formattedValue !== value) {
                    this.$refs.input.value = formattedValue;
                }
                this.$emit('input', String(formattedValue));
            },
        },
    };
</script>

<style lang="scss">
    .input-group {
        margin: 10px 15px;
        transition: .2s;

        .label {
            margin-bottom: 3px;
        }

        input {
            width: 100%;
            height: 30px;
            padding: 5px;
            border-radius: 3px;
            border: 1px solid #cecece;
            transition: .2s;
        }

        &.invalid {
            color: red;

            input {
                border-color: red;

                &::placeholder {
                    color: red;
                }
            }
        }
    }
</style>
