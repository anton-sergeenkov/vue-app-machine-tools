<template>
    <ui-modal-dialog v-if="openModal" @close="closeModal">
        <template v-slot:form>
            <form @submit.prevent="checkForm" class="wrapper-form">
                <img src="@/assets/img/stop.jpg">
                <div class="data">
                    <p>
                        Стойте! Сэкономьте время и деньги.
                        Укажите свой телефон и вам перезвонит наш специалист.
                    </p>
                    <ui-input-text label="Телефон*" color="red" v-model="inputPhone" />
                    <ui-button label="Заказать звонок" color="red" />
                </div>
            </form>
        </template>
    </ui-modal-dialog>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            openModal: false,
            wasOpened: false,
            inputPhone: ''
        }
    },
    methods: {
        closeModal() {
            this.openModal = false;
        },
        checkForm() {
            if (this.inputPhone.length !== 0) {
                alert('Спасибо за заявку');
                this.closeModal();
                this.sendForm('Посетитель оставил телефон для перезвона: '+this.inputPhone);
            } else {
                alert('Укажите номер телефона');
            }
        },
        sendForm(data) {
            axios.post('./server/send-email.php', { quiz: data })
            .then(function(response) {
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        handleModalForm() {
            if (!this.wasOpened) {
                this.openModal = true;
                this.wasOpened = true;
            }
        }
    },
    mounted() {
        if (typeof window !== 'undefined') {
            document.addEventListener('mouseleave', this.handleModalForm);
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

@media screen and (max-width: 730px) {
    .wrapper-form img {
        display: none;
    }
}
@media screen and (max-width: 430px) {
    .wrapper-form .data {
        width: 90%;
    }
}
</style>
