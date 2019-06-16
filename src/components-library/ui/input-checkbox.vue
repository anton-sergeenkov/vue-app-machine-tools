<template>
    <label :class="classes" class="component-ui-input-checkbox">
        <input 
            @change="onChange"
            :value="val" 
            v-model="checked" 
            type="checkbox" 
        />
        <div class="icon"></div>
        <span v-html="label"></span>
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
                ['v-custom--'+this.color]: true
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
        onChange(e) {
            this.$emit('input', this.checkedProxy);
        }
    }
}
</script>

<style scoped lang="scss">
@import './styles.scss';

$size: 20px;
$border-radius: 3px;

@mixin setColor($color) {
    input[type="checkbox"] {
        &:checked + .icon:after {
            background-color: $color;
        }
        &:checked + .icon {
            border: 2px solid $color;
        }
    }
}
.component-ui-input-checkbox.v-custom-- {
    &indigo     { @include setColor($indigo);     }
    &blue       { @include setColor($blue);       }
    &blue-light { @include setColor($blue-light); }
    &green      { @include setColor($green);      }
    &red        { @include setColor($red);        }
    &orange     { @include setColor($orange);     }
    &silver     { @include setColor($silver);     }
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
        content: '';
        display: block;
        width: $size / 2;
        height: $size / 2;
        border-radius: $border-radius;
    }
}
.icon {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: $size;
    height: $size;
    margin: 10px;
    border: 2px solid $gray;
    border-radius: $border-radius;
}
</style>
