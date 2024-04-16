<template>
  <div>
    <h1>템플릿 참조</h1>
    <p>dom엘리먼트에 직접 접근하기 위해 ref 속성 사용한다.</p>
  </div>
  <div>
    <h3>ref사용하기</h3>
    <input value="asdf" ref="input"/>
    <p>컴포넌트가 마운트 되고 나서야 ref에 접근 가능</p>
  </div>npm
  <div>
    <h3>v-for에서 ref 사용</h3>
    <p>ref는 빈 배열로 선언해야함. 엘리먼트로 채워지기 때문</p>
    <p><strong>단, 원본과 동일 순서 보장 안함!~</strong></p>
    <ul>
      <li v-for="(item, idx) in listdata" :key="idx" ref="listdataRefs">{{ item }}</li>
    </ul>
  </div>
  <div>
    <h3>함수로 참조하기</h3>
    <p>반응형이랑 같이 쓰기 어려울 듯...</p>
    <P>언마운트되면 SCRIPT에서 선언한 함수는 사용 불가</P>
    <input :ref="(el) => { functionRef = 'zzzzzzzz';}" value="adsf" />
    <button @click="(e) => console.log(e.target)">클릭해서 el가져오기</button>
    <p>{{ functionRef }}</p>
  </div>
  <div>
    <h3>컴포넌트에 ref사용하기</h3>
    <p>onMounted에서 refComponent는 자식 컴포넌트 인스턴스를 참조하게 된다</p>
    <p>자식 컴포넌트에서 옵션 API 사용하거나 script setup 사용하지 않으면, refComponent는 자식 컴포넌트의 this라고 동일</p>
    <p>근데 권장은 안하는듯. 그냥 props사용하고 인터페이스 내보내라</p>
    <p>왜냐, script setup 사용했으면 기본적으로 비공개 컴포넌트이기 떄문에 경고 나올 수 있음</p>
    <RefChild ref="refComponent"/>
    
    <p>자식 컴포넌트에서 부모 컴포넌트로 API노출하기 위해 defineExpose 사용함</p>
    <p>그래서 ref 설정하고 defineExpose사용해야 함</p>

    <p>{{ refComponent?.a }}</p>
    <p>{{ refComponent?.b }}</p>
    <p>onMounted될 때 refComponent 는 바로 래핑 헤제 안되는 느낌..</p>

  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeMount, onUpdated} from 'vue'
import RefChild from '@/components/RefChild.vue'
const input = ref(null) // 이 떄 이름은 템플릿 ref와 일치해야함
const listdata = ref(['adfa', 'wrga', 'xzcva', 'ewtwrt', 'popopo'])
const listdataRefs = ref([]) 
const functionRef = ref("abcd")

const refComponent = ref(null)

onMounted(() => {
  console.log("on mount")
  console.log(input.value)
  console.log(listdataRefs.value)
  console.log(refComponent)
  input.value.focus()
})
onUpdated(() => {
  console.log(refComponent)
})

onBeforeMount(() => {
  console.log("Before mount ")
  console.log(input.value) // null이 나옴!
})

function clickme(el) {
  console.log(el.value)
  console.log("---------")
}








</script>

<style scoped>
div{
  border: 1px solid black;
  marign: 3px;
}

</style>