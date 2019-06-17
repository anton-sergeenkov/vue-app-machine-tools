<template>
    <ui-modal-dialog v-if="showModal" @close="closeModal">
        <template v-slot:header>Message</template>
        <template v-slot:form>
            <form @submit.prevent="checkForm">
                <div>content</div>
                <div>
                    <ui-button label="Заказать звонок" color="blue-light" />
                </div>
            </form>
        </template>
    </ui-modal-dialog>
</template>

<script>
export default {
    data() {
        return {
            showModal: false
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
        handleModalForm(e) {
            if (e.screenY < 140) {
                this.showModal = true;
            }
        }
    },
    mounted() {
        if (typeof window !== 'undefined') {
            document.body.addEventListener('mousemove', this.handleModalForm);
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_index.scss';

</style>
