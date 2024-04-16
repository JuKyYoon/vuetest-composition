<template>
  <div>
    <h3>싱글파일컴포넌트를 사용해!</h3>
    <p>빌드방식 사용안하면 js객체로 설정 가능한데... 있다는 것만 알자</p>
  </div>

  <div>
    <h3>컴포넌트 사용</h3>
    <p>전역 등록하면 모든곳에서 사용 가능</p>
    <p> 파스칼 케이스 권장. 대소문자 구분함. </p>
    <p> 케밥케이스는 템플릿을 DOM에서 직접 작성하는 경우 써야함</p>
  </div>

  <div>
    <h3>props전달</h3>
    <p>defineProps 매크로 사용해라. 배열형식으로 받는다!!</p>
    <p>객체로전달되기 때문에 JS에서 접근 가능</p>
    <p>자동 으로 노출</p>
    <ChildComponent msg="짐싸"/>
    <ChildComponent msg="집간다"/>

    <p>만약 배열을전달하고 싶다.</p>
    <p> 그러면 v-for를 사용해라. 속성은 v-bind써라</p>
    <ChildComponent v-for="(post, idx) in posts" :key="idx" :msg="post.title"/> 
  </div>

  <div>
    <h3>부모 -> 자식으로 이벤트 넘기기</h3>
    <p>v-on이욯해서 이벤트 넘기고, 자식은 $emit(이벤트이름) 으로 실행!</p>
    <EventChildComponent @cnt-up="cntUp" :cnt="cnt"/>
    <p>defineEmits 매크로 이용하면 원하는 이벤트 받기 가능. import할 필요 없다.이 매크로는 emit함수 반환한다.</p>
  </div>

  <div>
    <h3>컴포넌트에 내용전달</h3>
    <ChildComponent msg="">이 내용은 slot에 전달</ChildComponent>
    <p>래핑되지 않으므로 주의</p>
  </div>
  <div>
    <h3>동적 컴포넌트</h3>
    <p>{{txt}}</p>
    <p>위에 처럼 :is에 원하는 컴포넌트 이름 넣어주면 된다. 혹은 실제 컴포넌트 객체</p>
    <p>컴포넌트 전환될 때 기존 건 마운트 해제되는데, KeepAlive 컴포넌트 이용하면 활성 상태로 유지 가능</p>
  </div>
  <div>
    <h3>주의사항. 단, 템플릿을 DOM에 작성하는 경우</h3>
    <ul>
      <li>대소문자 구분안함. 카멜케이스나 써라</li>
      <li>태그 닫기를 명시적으로 안하면 자동으로 태그 닫는다.</li>
      <li>몇몇 엘리먼트 배치에 제한이 있다.</li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import ChildComponent from "@/components/ChildComponent.vue"
import EventChildComponent from '@/components/EventChildComponent.vue'
const posts = ref([
  { id: 1, title: 'Vue와 함께한 나의 여행' },
  { id: 2, title: 'Vue로 블로깅하기' },
  { id: 3, title: 'Vue가 재미있는 이유' }
])

const txt = '<component :is="tabs[currentTab]"></component>'

const cnt = ref(3)

const cntUp = () => {
  cnt.value += 2
}

</script>

<style scoped>
div {
  border: 1px solid black;
  margin: 3px;
}
</style>