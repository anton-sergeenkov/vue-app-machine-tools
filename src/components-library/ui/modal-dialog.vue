<template>
    <transition name="fade">
        <div class="component-ui-modal-dialog" @click="checkClose" ref="wrapper">

            <div class="modal-dialog">
                <!-- <div class="header">
                    <slot name="header">Default Header</slot>
                </div> -->
                <div class="form">
                    <slot name="form">Default Form</slot>
                </div>
            </div>

        </div>
    </transition>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('close');
        },
        checkClose(event) {
            if (event.target == this.$refs.wrapper) {
                this.close();
            }
        },
        handleEscapeKey(e) {
            if (e.keyCode === 27) {
                this.close();
            }
        }
    },
    mounted() {
        if (typeof document !== 'undefined') {
            document.body.addEventListener('keyup', this.handleEscapeKey);
        }
    },
    destroyed() {
        if (typeof document !== 'undefined') {
            document.body.removeEventListener('keyup', this.handleEscapeKey);
        }
    }
}
</script>

<style scoped lang="scss">
$color-wrapper: rgba(0,0,0,0.3);
$color-form: #fff;
$color-form-header: #304a58;
$fz-header: 20px;

.component-ui-modal-dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: $color-wrapper;
}
.modal-dialog {
    position: relative;
    border-radius: 2px;
    background-color: $color-form;
    box-shadow: 0px 5px 5px 0px $color-wrapper;
    .header {
        font-size: $fz-header;
        background: $color-form-header;
        color: #fff;
        padding: 20px;
    }
    .form {
        padding: 20px;
    }
}

// transition
.fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>