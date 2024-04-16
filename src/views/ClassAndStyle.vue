<template>
    <div class="test1" :class="{test2:two, test3:three}">
        동적 바인딩 여러개 할 수 있다.
    </div>
    <div :class="classObj">
        객체 자체를 바인딩 할 수 있다.
        <button @click="changefc">test</button>
    </div>
    <div :class="computedClassObj">
        computed 사용할 수 있다.
    </div>
    <div>
        배열로 바인딩 해서 사용 가능. 삼항 연산자 사용 가능. 배열 내에서 객체 사용가능
    </div>

    <div>
        <h3>그냥 반응형 빼고 option API랑 동일하다</h3>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const two = ref(true)
const three = ref(false)

const classObj = ({
    active: true,
    'font-color': ref(false)
})

const computedClassObj = computed( () => {
    return {
        active: true,
        'font-color': classObj['font-color'].value
    }   
})

function changefc() {
    console.log(classObj)
    classObj['font-color'].value = !classObj['font-color'].value
    console.log(classObj)

}


</script>

<style scoped>
div {
    border : 2px solid black;
    margin : 5px
}

.font-color {
    color: red
}
</style>