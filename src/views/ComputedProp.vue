<template>
    <div>
        <h3>기본 사용</h3>
        <p>  {{ cnt }} > 5 : {{ checkCnt }}  <button @click="increase">up</button></p>
    </div>

    <div>
        <h3>캐싱</h3>
        <p>computed 대신에 method 써도 동일한 결과. 그러나, computed는 반응형을 기반으로 캐시된다. 즉, 의존된 반응형이 변경되지 않는다면 캐시된 값 이용한다.</p>
    </div>

    <div>
        <h3>수정</h3>
        <p>computed는 getter이지만 setter도 사용 가능하다. 단 사용하는 건 좋지 않다.</p>
        <p>{{  c }}</p>
        <button @click="update">computed update</button>
        <p>adf</p>
    </div>
</template>

<script setup>
import {ref,computed} from 'vue';

const cnt = ref(2)

function increase() {
    cnt.value++;
}

const checkCnt = computed(() => {
    if(cnt > 5) {return "YEs"}
    else{return "no"}
})


// 수정
const a = ref(9)
const b = ref(8)


const c = computed({
    get() {
        return a.value + b.value 
    },
    set(newVal) {
        a.value = newVal + 1
        b.value = newVal
    }
})

function update() {
    c.value = 5
}

</script>

<style scoped>
div {
    border: 1px solid gray;
    margin: 3px;
}
</style>
