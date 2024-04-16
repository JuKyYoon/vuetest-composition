<template>
    <div>
        <h3>data 변경될 떄 마다 함수 실행 가능</h3>
        <input v-model="cnt" type="number">
        <p>{{ ans }}</p>
    </div>

    <div>
        <h3>watch의 감시대상?</h3>
        <p>일반적인 ref, 함수, 배열이 될 수 있다.</p>
        <p>단, 반응형 객체의 속성을 감시할 수 없다. 그래서 첫번쨰 파라미터로 getter 넣어야 한다.</p>
        <p>watch(
  () => obj.count,
  (count) => {
    console.log(`count 값: ${count}`)
  }
)</p>
    <p> 반응형 객체 자체를 감시할 수는 있따. 이 떄 newValue 와 oldValue는 같다.</p>
    <p></p>
    </div>
    <div>
        <h3>깊은 감시자</h3>
        <p>객체안의 객체의 속성을 감지하지 못함</p>
        <p>게터 사용할 경우, 객체가 달라질 경우에만 실행</p>
        <p>그래서 심층 감시자 사용해야 함</p>
        <p>하지만 비용이 많이 든다<div class=""></div></p>
        <p>deep: true</p>
        <input v-model="someObj.spring.version" type="number"/>
        <p>{{ ans }}</p>
    </div>
    <div>
        <h3>열성적인 감시자</h3>
        <p>watch 콜백은 감시된소스가 변경되기 전까지 호출 안됨. </p>
        <p>해당 소스가 만들어 졌을 때 사용가능하도록 할 수 있음</p>
        <p>created 전에 1번 호출</p>
        <p>BeforeUpdate 전에 호출된다.</p>
        <p>immediate: true</p>
        <input type="number" v-model="notLazy"/>
    </div>
    <div>
        <h3>watchEffect()</h3>
        <p>watch는 게으름. 동일한 콜백 로직이 실행되길 원한다면 watchEffect를 사용해 반응형 의존성을 감시하며 사이드이펙트를 즉시 한 번 실행</p>
        <input v-model="url" style="width: 50%"/>
    </div>
    <div>
        <h3>일회성 감시자</h3>
        <p>한번만 콜백 호출하자</p>
        <p>once: true</p>
        <input type="number" v-model="onlyOnce"/>
    </div>
    <div>
        <h3>실행 타이밍</h3>
        <p>업데이트 하면, 돔 업데이트랑 와쳐 콜백이 모두 실행됨</p>
        <p>콜백 중복 호출 방지 위해 일괄 실행된다.</p>
        <p>일반적으로, 콜백은 부모 컴포넌트 업데이트가 있을 경우, 업데이트 후에 호출된다.</p>
        <p>소유 컴포넌트 업데이트 이전에 호출된다.</p>
        <p>flush : 'post' = updated 이전에 1번 호출</p>
        <p>flush : 'sync' = beforeUpdated 전에 3번 호출 = 일반적으로 비효율적이다!</p>

        <button @click="increase">up</button> <span> {{ postCnt }} </span>
    </div>
    <div>
        <h3>동기적 감시자</h3>
        <p>flush : 'sync' = beforeUpdated 전에 호출된다...</p>
    </div>
    <div>
        <h3>$watch 메소드 이용해서 생성 가능</h3>
        <p>created() { <br/>
            this.$watch('question', (newQuestion) => { <br/>
        // ... <br/>
            }) <br/>
        }</p>
    </div>
    <div>
        <h3>감시자 중지</h3>
        <p>컴포넌트 언마운트될 때 자동으로 중지한다.... 만약 이전에 중지하고 싶으면 </p>
        <p>감시자가 비동기적으로 생성되었다면, 수동으로 중지해야한다.</p>
        <p>수동 중지에는 unwatch() 실행</p>
        <p>근데 감시자 비동기 생성은 거의 안한다. 오히려, 감시자 로직을 조건부로 만들어라</p>
    </div>
</template>

<script setup>

import { ref, reactive, onBeforeUpdate, onUpdated, watch, watchEffect } from 'vue'

const cnt = ref(1)
const ans = ref('')
const someObj = reactive({
    spring: {
        version: 3.2
    }
})
const notLazy = ref(4)
const onlyOnce = ref(3)
const postCnt = ref(8)
const url = ref("https://jsonplaceholder.typicode.com/todos/1")

function updateAns() {
    ans.value = 'asdf'
}

function increase() {
    postCnt.value++;
    postCnt.value++;
    postCnt.value++;
}

watch(cnt, (newCnt, oldCnt) => {
    console.log('as')
    if(newCnt > 3) {
        updateAns()
    }
})

watch(someObj, (val, oldVal) => {
    if(val.spring.version > 5) {
        updateAns()
    }
}, {deep: true})

watch(notLazy, (val, oldVal) => {
    console.log("immediate")
}, {immediate: true})

watchEffect(async() => {
    // url.value 가 바뀔떄마다 실행!!!! 즉, 의존성 url.value를 추적
    // 최초 1번 무조건 실행
    const res = await fetch(url.value)
    console.log(await res.json())
})

watch(onlyOnce, (val, oldVal) => {
    alert("한번만")
}, {once: true})

watch(postCnt, () => {
    console.log('postCnt')
}, {flush: 'sync'})

onBeforeUpdate(() => {
    console.log("BeforeUpdate")
})

onUpdated(() => {
    console.log("Updated")
})

</script>

<style scoped>
div {
    border: 1px solid gray;
    margin: 3px;
}
</style>