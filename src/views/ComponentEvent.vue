<template>
  <div>
    <h3>이벤트 발신 및 수신</h3>  
    <p>$emit 사용해서 발신 가능.</p>
    <p>부모는 v-on이용해서 수신 가능</p>
    <p>자식에서 camelCase사용하고 부모에서 kebab-case 사용 가능</p>
  </div>
  <div>
    <h3>이벤트 인자</h3>
    <p>자식에서 이벤트 발신할 때, 인자도 넘겨주기 가능</p>
    <p>부모는 이벤트를 화살표 함수 이용해서 수신가능</p>
    <p>혹은 메소드일 경우, 인자값이 첫번째 파라미터로 전달 ( 순서대로 )</p>
  </div>
  <div>
    <h3>이벤트 선언</h3>
    <p>만약 이벤트 여러개일 겨웅, defineEmits 메소드 이용해서 선언 가능</p>
    <p>템플릿의 emit은 script setup에서 사용할 수 없지만, defineEmits이용하면 선언한 이름 함수로 호출 가능</p>
    <p> const a = defineProps(['abc']) 라고 하면 a('abc') 로 사용 가능</p>
    <p>defineEmits는 defineProps와 마찬가지로 배열 뿐만 아니라 객체도 사용 가능하다, 그래서 유효성 검사 가능</p>
  </div>
  <div>
    <h3>이벤트 유효성 검사</h3>
    <p>null일 경우 검사 X</p>
    <p>true일 경우 통과, false일 경우 실패</p>
  </div>
</template>

<script setup>
import {ref} from 'vue';
</script>

<style scoped>
div {
  border: 1px solid black;
  padding :3px;
  margin: 3px;  
}
</style>