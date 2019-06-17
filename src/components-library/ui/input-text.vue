<template>
    <div class="component-ui-input-text" :class="classesColor">
        <input 
            @input="$emit('input', $event.target.value)" 
            @focus="onFocus" 
            @blur="onBlur($event.target.value)" 
            :class="classes" 
            class="input"
            :type="type"
        >
        <label :class="{ active:focused }" v-html="label"></label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            focused: false
        }
    },
    props: {
        color: { type: String, default: 'silver' },
        label: { type: String },
        type:  { type: String, default: 'text' }
    },
    methods: {
        onFocus() {
            this.focused = true;
        },
        onBlur(content) {
            if (content === '') {
                this.focused = false;
            }
        }
    },
    computed: {
        classes() {
            return {
                ['active']: this.focused
            };
        },
        classesColor() {
            return {
                ['v-custom--'+this.color]: true
            };
        }
    }
}
</script>

<style scoped lang="scss">
@import './styles.scss';

$font-size: 15px;
$padding: 10px 10px 10px 5px;

@mixin setColor($color) {
    .input.active {
        border-bottom: 1px solid $color;
    } 
    label.active {
        color: $color;
    }
}
.component-ui-input-text.v-custom-- {
    &indigo     { @include setColor($indigo);     }
    &blue       { @include setColor($blue);       }
    &blue-light { @include setColor($blue-light); }
    &green      { @include setColor($green);      }
    &red        { @include setColor($red);        }
    &orange     { @include setColor($orange);     }
    &silver     { @include setColor($silver);     }
}

.component-ui-input-text {
    position: relative;
    width: 100%;
}
.input {
    position: relative;
    z-index: 1;
    width: 100%; 
    padding: $padding;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: $font-size;
    background: none;
    border-bottom: 1px solid $gray;
}
label {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    padding: $padding;
    font-size: $font-size;
    color: $gray;
    transition: 0.4s;
    &.active {
        top: -25px;
        font-size: 14px;
    }
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
}
</style>
