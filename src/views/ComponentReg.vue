<template>
  <div>
    <h3>전역등록</h3>
    <p>app.compoennt() 메소드 이용해서 등록 가능</p>
    <p>전역등록 컴포넌트는 모든 템플릿에서 사용 가능 + 자식에게도 적용 ( = 내부에서 사용 가능)</p>
    <p>그러나, 사용하지 않는 컴포넌트를 제거하는 tree-shaking을 방지.</p>
    <p>의존관계를 덜 명확하게 만듦 -> 유지관리 어려움</p>
    <p>그래서 로컬등록 써라</p>
  </div>
  <div>
    <h3>로컬등록</h3>
    <p>import하고 바로 사용 가능.</p>
    <p>자식 컴포넌트에서 사용 불가능.</p>
  </div>
  <div>
    <h3>이름 등록</h3>
    <p>HTML이랑 구분하기 위해 파스칼케이스 사용. 권장함. </p>
  </div>

  <hr style="width: 100%;"/>

  <div>
    <h3>Props 선언</h3>
    <p>defineProps(['props이름']) 을 통해 외부에서 어떤 props를 전달해야 할지 명시해줌.</p>
    <p>defineProps는 배열이 아니라 객체문법으로도 사용 가능. 객체 문법일 경우 Key는 Props이름, Value는 타입의 생성자 함수</p>
  </div>
  <div>
    <h3>props이름</h3>
    <p>카멜케이스 사용해도 괜찮지만, kebak-case를 권장한다. html 문법에 맞추기 위해. 컴포넌트는 파스칼, props는 케밥</p>
  </div>
  <div>
    <h3>props타입</h3>
    <p>문자열, 숫자, 불리언(value없으면 true취급), 변수, 배열, 객체 가능</p>
    <p>만약 객체의 모든 속성 전달하고 싶다면</p>
    <p>{{ data1 }}</p>
    <p>{{ data2 }}</p>
    <p>처럼 쓴다.</p>
  </div>
  <div>
    <h3>데이터 흐름</h3>
    <p>모든 props는 하향식 단방향 바인딩 형성</p>
    <p>그래서, 자식에서 부모 props 변경하면 안된다.</p>
    <p>단, 재 할당해서 사용하는 건 가능( 초기값으로 사용 )</p>
    <p>혹은 computed 사용</p>

    <p><strong>객체와 배열이 props일 경우, 중첩속성 변경 가능하지만 그냥 하지마라</strong></p>
  </div>

  <div>
    <h3>props유효성 검사</h3>
    <p>props 객체처럼 사용시, value값에서 유효성 검사 가능.</p>
    <p>value가 배열이면 여러타입 허용, 객체일경우 기본값, 필수여부 체크 가능</p>
    <p>객체,배열의 기본값은 팩토리함수에서 반환되어야 함!</p>
    <p>validator메소드 이용해 커스텀 유효성 검사 가능. 리턴값은 true,value</p>
    <p>만약 type이 함수일 경우, 팩토리함수가 아니라 기본값으로 사용할 함수 지정 가능</p>

    <ul>
      <li>required 없으면 기본은 선택</li>
      <li>선택인데 없으면 undefined. 단 boolean인 경우 false</li>
      <li>만약, default가 있으면 undefined대신 default사용</li>
      <li>type으로는 사용자 졍의 클래스 가능하다. ( instanceof 이용해 검사 )</li>
    </ul>

    <p>Boolean이 type인 경우, 타입 캐스팅 순서에 관계없이 true or false로 적용</p>
  </div>


</template>

<script setup>
import {ref} from 'vue';
const data1 = ref("const obj = {id:1, val:2}")
const data2 = ref('<Component v-bind="obj"/')

</script>

<style scoped>
div {
  border: 1px solid black;
  padding :3px;
  margin: 3px;  
}
</style>