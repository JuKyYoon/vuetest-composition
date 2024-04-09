<template>
    <div>
        <h3>반응형 설정</h3>
        <p>composition api에서는 ref()이용해서 설정</p>
        <p> 이렇게 {{ cnt }}</p>
        <p> 템플릿 밖에서는 .value 써야 하지만 안에서는 괜찮괜찮 </p>
    </div>

    <div>
        <h3>script setup </h3>
        <p>setup() 대신에 script setup써랴</p>
    </div>

    <div>
        <h3>why ref</h3>
        <p>컴포넌트 처음 렌더링 시 모든 ref 추적</p>
        <p>이후에는 변경된 ref를 추적하는 모든 컴포넌트 재렌더링 트리거</p>
        <p>.VALUE 속성은 vue에게 ref를 감시할 기회를 준다. 내부적으로 getter로 추적하고, setter로 트리거 수행한다.</p>
    </div>

    <div>
        <h3>메소드 선언</h3>
        <p> {{ cnt }} <button @click="increase">up</button></p>
        <p>비동기처리는 async function 함수이름() {} </p>
    </div>

    <div>
        <h3>깊은 반응형</h3>
        <p>객체나 배열 값 변경해도 감지함</p>
        <p> {{ obj1.obj2.cnt }}  <button @click="increase2">up2</button></p>
        <p>기본값이 아니면 reactive() 통해 반응형 프로기로 전환</p>
        <p>얕은 참조는 .value만 추적</p>
    </div>

    <div>
        <h3>dom업데이트</h3>
        <p>반응상태 변경하면 dom 업데이트. 단, 동기적이 아니라서 상태변경 많이 있어도 한번만 업데이트함,</p>
        <p>nextTick 함수 통해 업데이트 완료까지 기다릴 수 있음</p>
    </div>

    <div>
        <h3>reactive()</h3>
        <p>ref와 달리 reactive는 객체를 반응형으로 만든다.</p>
        <p>{{ re.cnt }}</p>
        <button @click="re.cnt++">++</button>
        <p>이 객체는 자바스크립트 프록시이다. vue가 모든 엑세스를 가로챌 수 있다. </p>
        <P>얕은참조랑 유사한 shallowReactive() 있다.</P>
        <p>프록시이므로 reactive로 재정의되면 원본과 다르다! </p>
        <p></p>
    </div>

    <div>
        <h3>메소드 동적 생성</h3>
        <p> <a href="https://ko.vuejs.org/guide/essentials/reactivity-fundamentals.html#stateful-methods">몰라</a> </p>
    </div>
</template>

<script setup>
import { nextTick, ref, reactive } from 'vue'

const cnt = ref(4)
const obj1 = ref({
    obj2: {
        cnt: 3
    }
})

const re = reactive({cnt: -5})

async function increase() {
    // this 안 써도 ok
    cnt.value+=2
    await nextTick()
    console.log("update fin")
}

function increase2() {
    obj1.value.obj2.cnt++;
}
</script>

<style scoped>

div {
    border: 1px solid gray;
    margin: 3px;
}


</style>