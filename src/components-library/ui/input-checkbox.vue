<template>
    <label class="component-ui-input-checkbox">
        <input 
            v-model="checked" 
            @change="onChange"
            :value="val" 
            type="checkbox" 
        />
        <div :class="classes" class="icon"></div>
        {{label}}    
    </label>
</template>

<script>
export default {
    props: {
        color: { type: String, default: 'silver' },
        value: { },
        val:   { type: String },
        label: { type: String }
    },
    data () {
        return {
            checkedProxy: false
        }
    },
    computed: {
        classes() {
            return {
                [this.color]: true
            };
        },
        checked: {
            get() {
                return this.value;
            },
            set(val) {
                this.checkedProxy = val;
            }
        }
    },
    methods: {
        onChange: function(e) {
            this.$emit('input', this.checkedProxy);
        }
    }
}
</script>

<style scoped lang="scss">
@import './styles.scss';

$size: 20px;

@mixin setColor($color) {
    border: 2px solid $color;
    background: $color;
}

.component-ui-input-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
}
input[type="checkbox"] {
    display: none;
    &:checked + .icon:after {
        content: '✔';
        display: flex;
        justify-content: center;
        align-items: center;
        width: $size / 2;
        height: $size / 2;
        color: #fff;
        font-size: 13px;
    }
    &:checked + .icon {
        &.indigo     { @include setColor($indigo);     }
        &.blue       { @include setColor($blue);       }
        &.blue-light { @include setColor($blue-light); }
        &.green      { @include setColor($green);      }
        &.red        { @include setColor($red);        }
        &.orange     { @include setColor($orange);     }
        &.silver     { @include setColor($silver);     }
    }
}
.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: $size;
    height: $size;
    margin: 10px;
    border: 2px solid $gray;
    border-radius: 3px;
}
</style>
