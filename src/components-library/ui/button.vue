<template>
    <button :class="classes" class="component-ui-button" v-html="label"></button>
</template>

<script>
export default {
    props: {
        color: { type: String, default: 'silver' },
        size:  { type: String, default: 'sm' },
        label: { type: String },
        block: { type: Boolean }
    },
    computed: {
        classes() {
            return {
                ['v-custom--'+this.size]: true, 
                ['v-custom--'+this.color]: true,
                ['v-custom--block']: this.block
            };
        }
    }
}
</script>

<style scoped lang="scss">
@import './styles.scss';

$box-shadow: 
    0px 2px 5px 5px rgba(33,37,41, 0.07), 
    0px 6px 5px 0px rgba(33,37,41, 0.055), 
    0 1px 5px 0px rgba(33,37,41, 0.07);

.component-ui-button {
    display: block;
    padding: 13px 20px;
    border: none;
    outline: none;
    background: none;
    color: #000;
    border-radius: 3px;
    font-family: inherit;
    text-decoration: none;
    text-transform: uppercase;
    box-shadow: $box-shadow;
    cursor: pointer;
    transition: 0.4s;
}

@mixin setColor($bg-color, $color) {
    background-color: $bg-color; 
    color: $color;
    &:hover {
        background-color: transparentize($bg-color, 0.35);
    }
}

.component-ui-button.v-custom-- {
    &indigo     { @include setColor($indigo,     #fff); }
    &blue       { @include setColor($blue,       #fff); }
    &blue-light { @include setColor($blue-light, #fff); }
    &green      { @include setColor($green,      #fff); }
    &red        { @include setColor($red,        #fff); }
    &orange     { @include setColor($orange,     #fff); }
    &silver     { @include setColor($light,      #000); }

    &xs    { font-size: 10px; }
    &sm    { font-size: 14px; }
    &md    { font-size: 17px; }
    &lg    { font-size: 20px; }

    &block { width: 100%; }
}
</style>