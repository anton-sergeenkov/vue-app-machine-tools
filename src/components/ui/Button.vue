<template>
    <button :class="classes" class="ui-btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        theme: { type: String, default: 'normal' },
        size:  { type: String, default: 'sm' },
        block: { type: Boolean }
    },
    computed: {
        classes() {
            return {
                ['ui-btn--'+this.size]: true, 
                ['ui-btn--'+this.theme]: true,
                'ui-btn--block': this.block
            };
        }
    }
}
</script>

<style scoped lang="scss">
$c-normal: #f5f5f5;
$c-primary: #ff0a0a;

.ui-btn {
    padding: 13px 20px;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
    display: block;
    transition: 0.4s;
    color: #000;
    text-decoration: none;
    text-transform: uppercase;
    box-shadow: 
        0px 3px 1px -2px rgba(0,0,0,0.2), 
        0px 2px 2px 0px rgba(0,0,0,0.14), 
        0px 1px 5px 0px rgba(0,0,0,0.12);
}

.ui-btn--xs    { font-size: 10px; }
.ui-btn--sm    { font-size: 14px; }
.ui-btn--md    { font-size: 17px; }
.ui-btn--lg    { font-size: 20px; }

.ui-btn--block { width: 100%; }

.ui-btn--normal {
    background-color: $c-normal;
}
.ui-btn--primary {
    background-color: $c-primary;
    color: #fff;
}
</style>