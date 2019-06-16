import Vue from 'vue'

import Button        from './button.vue';
import InputText     from './input-text.vue';
import InputRadio    from './input-radio.vue';
import InputCheckbox from './input-checkbox.vue';
import ModalDialog   from './modal-dialog.vue';
import Toast         from './toast.vue';

Vue.component('ui-button',         Button);
Vue.component('ui-input-text',     InputText);
Vue.component('ui-input-radio',    InputRadio);
Vue.component('ui-input-checkbox', InputCheckbox);
Vue.component('ui-modal-dialog',   ModalDialog);
Vue.component('ui-toast',          Toast);
