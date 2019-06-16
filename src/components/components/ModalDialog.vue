<template>
    <ui-modal-dialog v-if="showModal" @close="closeModal">
        <template v-slot:header>Message</template>
        <template v-slot:form>
            <form @submit.prevent="checkForm">
                <div class="modal-dialog-content">
                    <ui-input theme="form" v-model="login" type="text" placeholder="Введите логин" autofocus required></ui-input>
                    <ui-input theme="form" v-model="password" type="password" placeholder="Введите пароль" required></ui-input>
                </div>
                <div class="modal-dialog-buttons">
                    <ui-button theme="form" type="submit" :disabled="!isFormValid" class="btn-form">Вход</ui-button>
                    <ui-button theme="form" type="cancel" @click.native.prevent="closeModal" class="btn-form">Отмена</ui-button>
                </div>
            </form>
        </template>
    </ui-modal-dialog>
</template>

<script>
export default {
    data() {
        return {
            showModal: true
        }
    },
    methods: {
        closeModal() {
            this.showModal = false;
        },
        checkForm() {
            alert('ok');
            this.closeModal();
        },
    },
    mounted() {
        if (typeof window !== 'undefined') {
            window.addEventListener('mousemove', function(e) {
                if (e.screenY < 140) {
                    console.log(e.screenY);
                }
            });
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_index.scss';

</style>
