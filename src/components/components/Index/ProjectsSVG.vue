<template>
    <div class="project">
        <svg class="svg-project" viewBox="0 0 100 100">
            <line 
                v-for="(point, i) in points" 
                :key="i" 
                :x1="point[0]" 
                :y1="point[1]" 
                :x2="point[2]" 
                :y2="point[3]" 
            />
        </svg>
        <div class="header">{{header}}</div>
        <div class="text">{{text}}</div>
    </div>
</template>

<script>
export default {
    props: ['header', 'text'],
    data() {
        return {
            points: [
                [0,   0,   10,  0],
                [0,   0,   0,   100],
                [0,   100, 100, 100],
                [100, 100, 100, 85],
                [85,  0,   100, 0],
                [100, 0,   100, 25]
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/_index.scss';

.project {
    display: flex;
    align-items: center;
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0px 50px;
    padding: 20px 10px;
    .header {
        position: absolute;
        top: -15px;
        left: 7px;
        padding: 0px 10px;
        font-family: $ff-accent-num;
        font-size: $fz-medium;
    }
}
.svg-project {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    stroke: $c-accent;
    stroke-width: 4;
}

@media screen and (max-width: 470px) {
    .project {
        margin: 0px 40px;
    }
}
@media screen and (max-width: 400px) {
    .project {
        margin: 0px 20px;
    }
}
</style>