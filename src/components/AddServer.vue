<template>
    <div id="add-server">
        <h3>Add new server</h3>
        <InputGroup id="address-input" label="Address" placeholder="required" v-model="address"></InputGroup>
        <InputGroup label="Name" placeholder="optional" v-model="name"></InputGroup>
        <div class="controls">
            <AppButton :onClick="cancel">Cancel</AppButton>
            <AppButton :onClick="addServer">Add</AppButton>
        </div>
    </div>
</template>

<script>
    import AppButton from './Button.vue';
    import InputGroup from './InputGroup.vue';

    export default {
        name: 'AddServer',
        components: {
            AppButton,
            InputGroup,
        },
        data: () => {
            return {
                name: '',
                address: '',
            };
        },
        methods: {
            cancel() {
                this.name = '';
                this.address = '';
                document.getElementById('address-input').classList.remove('invalid');
                document.getElementById('add-server').classList.remove('visible');
                document.getElementById('server-list').classList.add('visible');
                document.getElementById('button-add').classList.remove('hidden');
            },
            validate() {
                return this.address.length > 0;
            },
            addServer() {
                if (!this.validate()) {
                    document.getElementById('address-input').classList.add('invalid');
                    return false;
                }
                console.log(this.name);
                console.log(this.address);
                return true;
            },
        },
    };
</script>

<style lang="scss">
    #add-server {
        position: absolute;
        top: 50%;
        transform: translate(100%, -50%);
        left: 0;
        width: 100%;
        max-height: 400px;
        transition: .3s;

        h3 {
            margin-left: 15px;
            margin-right: 15px;
            text-align: center;
        }

        &.visible {
            transform: translate(0, -50%);
        }

        .controls {
            margin: 5px 15px;
            text-align: right;
        }
    }
</style>
