<template>
    <ui-modal-dialog v-if="openModal" @close="closeModal">
        <!-- <template v-slot:header>Message</template> -->
        <template v-slot:form>
            <form @submit.prevent="checkForm" class="wrapper-form">
                <img src="@/assets/img/stop.jpg">
                <div class="data">
                    <p>
                        Стойте! Сэкономьте время и деньги.
                        Укажите свой телефон и вам перезвонит наш специалист.
                    </p>
                    <ui-input-text label="Телефон" color="red" />
                    <ui-button label="Заказать звонок" color="red" />
                </div>
            </form>
        </template>
    </ui-modal-dialog>
</template>

<script>
export default {
    data() {
        return {
            openModal: false,
            wasOpened: false
        }
    },
    methods: {
        closeModal() {
            this.openModal = false;
        },
        checkForm() {
            alert('ok');
            this.closeModal();
        },
        handleModalForm(e) {
            if ( (e.screenY < 130) && (!this.wasOpened) ) {
                this.openModal = true;
                this.wasOpened = true;
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

<style scoped lang="scss">
@import '@/styles/_index.scss';

.wrapper-form {
    display: flex;
    img {
        @include img-clear;    
        flex-shrink: 0;
        width: 300px;
        height: 350px;
    }
    .data {
        width: 300px;
        margin-left: 20px;
        padding: 20px;
        p {
            font-size: 20px;
            line-height: 1.5;
        }
        .component-ui-input-text {
            margin-top: 20px;
            margin-bottom: 30px;
        }
    }
}
</style>
