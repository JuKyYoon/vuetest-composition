<template>
    <h2>조건부 렌더링</h2>
    <div>
        <h3>v-if</h3>
        <button @click="toggleFirst">click</button>
        <p v-if="firstCondition">트루일때</p>
        <p v-else>펄스일때</p>
        <p>v-else는 v-if다음에 바로 와야 인식된다.</p>
    </div>

    <div>
        <h3>v-else-if</h3>
        <button @click="toggleSecond">click</button>
        <p v-if="secondValue == 0"> v-if 0 </p>
        <p v-else-if="secondValue == 1"> v-else if 1</p>
        <p v-else-if="secondValue == 2"> v-else if 2</p>
        <p v-else> v-else </p>
    </div>

    <div>
        <h3>여러 엘리먼트에 연결하기</h3>
        <p>v-if는 단일 디렉티브이므로 2개 이상의 디렉티브에 연결하기 위해서는 template을 래퍼 엘리먼트로 이용한다.</p>
        <button @click="thirdCondition  = !thirdCondition">click</button>
        <template v-if="thirdCondition">
            <p>1개</p>
            <p>2개</p>
        </template>
        <template v-else>
            <p>3개</p>
            <p>4개</p>
        </template>
    </div>

    <div>
        <h3>v-show 사용하기</h3>
        <p>v-if랑 비슷한데 렌더링 되어있냐 안되어있냐 차이</p>
        <p>단, template에 사용 불가능하고 v-else도 사용 불가. 그냥 css display 속성 건든다고 생각</p>
        <button @click = "vShow = !vShow">click</button>
        <p v-show = "vShow"> v-show toggle</p>
    </div>

    <div>
        <h3>v-for 와 v-if</h3>
        <p>같이 쓰는건 권장 X</p>
        <p>같이 쓰면 v-if가 먼저 적용된다.</p>
    </div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue'

const firstCondition = ref(true)
const secondValue = ref(0)
const thirdCondition = ref(true)
const vShow = ref(true)

const toggleFirst = () => {
    firstCondition.value = !firstCondition.value
}

const toggleSecond = () => {
    secondValue.value +=1
    secondValue.value %= 4
}


</script>

<style scoped>
div {
    border: 1px solid gray;
    margin: 3px;
}

</style>