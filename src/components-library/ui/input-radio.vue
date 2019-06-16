<template>
    <label :class="classes" class="component-ui-input-radio">
        <input 
            @change="$emit('input', $event.target.value)"
            :value="val"
            :name="'radio'+group" 
            type="radio"
        />
        <div class="icon"></div>
        {{label}}
    </label>
</template>

<script>
export default {
    props: {
        color: { type: String, default: 'silver' },
        val:   { type: String },
        label: { type: String },
        group: { type: String }
    },
    computed: {
        classes() {
            return {
                ['v-custom--'+this.color]: true
            };
        }
    }
}
</script>

<style scoped lang="scss">
@import './styles.scss';

$size: 20px;

@mixin setColor($color) {
    input[type="radio"] {
        &:checked + .icon:after {
            background: $color;
        }
        &:checked + .icon {
            border: 2px solid $color;
        }
    }
}
.component-ui-input-radio.v-custom-- {
    &indigo     { @include setColor($indigo);     }
    &blue       { @include setColor($blue);       }
    &blue-light { @include setColor($blue-light); }
    &green      { @include setColor($green);      }
    &red        { @include setColor($red);        }
    &orange     { @include setColor($orange);     }
    &silver     { @include setColor($silver);     }
}

.component-ui-input-radio {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
}
input[type="radio"] {
    display: none;
    &:checked + .icon:after {
        content: '';
        display: block;
        width: $size / 2;
        height: $size / 2;
        border-radius: 50%;
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
    border-radius: 50%;
}
</style>