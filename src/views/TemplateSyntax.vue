<template>
    <div>
        <h3> 텍스트 보간법</h3>
        <span> {{ cnt }}</span>
    </div>

    <div>
        <h3> HTML 출력 </h3>
        <p> {{ rawHtml }}</p>
        <br/>
        <p>v-html 쓴거</p>
        <p v-html="rawHtml"></p>
    </div>

    <div>
        <h3> 속성 바인드</h3>
        <p>사용되는 값은 바인딩 된 값</p>
        <p> v-bind를 사용 혹은 :만 사용</p>
        <p v-bind:id="blueId">blue</p>
        <p :id="blueId">blue</p>
        <p> 만약 속성 이름하고 밸류가 같으면 더 축약 가능 -> :id="id" -> :id</p>
        <p> 혹은 v-bind:id="id" -> v-bind:id</p>
    </div>

    <div>
        <h3> 불리언 값 나타내기</h3>
        <input type="checkbox" :checked="isChecked">
        <button @click="isChecked = !isChecked">change</button>
    </div>

    <div>
        <h3>여러 속성 동적 바인딩하기</h3>
        <p>v-bind 써주면된다</p>
        <p v-bind="attrs">test</p>
    </div>

    <div>
        <h3>자바스크립트 사용하기</h3>
        <p>이중 중괄호 내부 혹은 v로 시작하는 속성 내부에서 사용 가능하다.</p>
        <p> {{ jsTest }} = {{ cnt+1 }}</p>
        
        <hr/>
        <p>단 하나의 단일 표현식만 가능. 흐름제어나 선언 불가</p>
        <p>전역 속성에 접근하기 위해서는 app.config.globalProperties에 추가해야 한다.</p>
    </div>

    <div>
        <h3>빌트인 디렉티브</h3>
        <ul>
            <li>v-text : 엘리먼트의 텍스트 컨텐츠 결정 : 기존 데이터 덮어쓴다.</li>
            <li>v-html : innerHtml 업데이트</li>
            <li>v-show : 엘리먼트 가시성 : CSS의 display 솔성 이용</li>
            <li>v-if : 조건부 렌더링 : v-for이랑 같이 사용 X</li>
            <li>v-else : v-if 짝 : 표현식 없음</li>
            <li>v-else-if : v-if랑 같이...</li>
            <li>v-for : v-for="item in items" 로 사용. 인덱스 지정도 가능 v-for="(item, index) in items", 재졍렬 위해서는 :key 필요</li>
            <li>v-on: 이벤트 리스너 연결</li>
            <li>v-bind: 속성 바인딩하기</li>
            <li>v-model: form혹은 컴포넌트에 양방향 바인딩하기.</li>
            <li>v-slot: <a href="https://ko.vuejs.org/api/built-in-directives#v-slot">몰라</a></li>
            <li>v-pre: <a href="https://ko.vuejs.org/api/built-in-directives#v-pre">몰라</a> </li>
            <li>v-once: <a href="https://ko.vuejs.org/api/built-in-directives#v-once">몰라</a></li>
            <li>v-memo: <a href="https://ko.vuejs.org/api/built-in-directives#v-memo">몰라</a></li>
            <li>v-clock: <a href="https://ko.vuejs.org/api/built-in-directives#v-clock">몰라</a></li>

        </ul>
    </div>

    <div>
        <h3>빌트인 디렉티드 : 동적인 인자</h3>
        <p>대괄호 이용 js표현식으로 이용 가능</p>
        <p> "v-bind:[idText]"="blueId"  = </p>
        <p :[idText]="blueId">blue</p> 

        <p>동적인 인자는 null 혹은 문자열이여야 한다.</p>
        <p>동적인 인자가 계산이 필요하면 computed 이용</p>
        <p>동적인 인자 값은 브라우저가 소문자로 강제 변환</p>
    </div>

    <div>
        <h3>수식어 사용</h3>
        <p> v-on:submit.prevent="functionName" 처럼 사용 가능</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// 템플릿 안에서는 value 안 써줘도 OK 
// 여기선 .value 써야함
const idText = ref("ID")
const jsTest = ref("{{ cnt + 1 }}")
const cnt = ref(2)
const rawHtml = ref("<p style='color:red'>RED</p>")
const blueId = ref("blue-id")
const isChecked = ref(true)
const attrs = ref({
    id: "blue-id",
    class: "test-class"
})

// 컴포넌트 ref엑세스? setup 함수 이용?


</script>

<style scoped>

div {
    border: 1px solid gray;
    margin: 3px;
}

#blue-id {
    color: blue;
}

</style>
