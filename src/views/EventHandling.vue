<template>
    <div>
        <h3>이벤트 리스닝 하기</h3>
        <p>v-on 이벤트는 단축어로 @ 사용</p>
        <p>핸들러는 인라인 핸들러 쓰거나 메서드 핸들러</p>
    </div>

    <div>
        <h3>인라인 핸들러</h3>
        <button @click="cnt++">click</button>
        <p>{{ cnt }}</p>
    </div>

    <div>
        <h3>메서드 핸들러</h3>
        <button @click="hello">hello</button>
        <p>{{ log }}</p>
        <br/>
        <p>foo, foo.bar, foo['bar']같은 경우는 메서드 핸들러로 구분, foo()는 인라인 핸들러로 처리</p>
    </div>

    <div>
        <h3>인라인 핸들러에서 메소드 호출</h3>
        <button @click="greet('qqqq')">click</button>
    </div>

    <div>
        <h3>인라인에서 이벤트 객체 접근</h3>
        <p>1. $event 사용하기</p>
        <button @click="console.log($event)">@click="console.log($event)"</button>
        <hr/>
        <p>2. 화살표 함수 사용하기</p>
        <button @click="(e) => {console.log(e)}">@click="(e) => {console.log(e)}</button>

    </div>

    <div>
        <h3>이벤트 수식어</h3>
        <p>stop, prevent, self, captur, once, passive 같은 접미사 사용 가능</p>
        <p>{{eventData1}}</p>
        <p>수식어 여러개 사용 가능, 이벤트핸들러없이 수식어만 사용가능, </p>
        <p>.self 써서 자식 엘리먼트에서 발생한 이벤트에 대해 핸들러 실행 안되도록 할 수 있음</p>
    </div>

    <div>
        <h3>입력키 수신어</h3>
        <p> {{ inputData1 }}</p>
        <p>입력키 이름을 케밥 케이스로 변환해서 사용 할 수 있음</p>
        <p>단 input에서만 가능하다!!!!!!!!!!!!!!!!</p>
        <div>
            입력키 별칭​ <br/>
            .enter<br/>
            .tab<br/>
            .delete ("Delete" 및 "Backspace" 키 모두 캡처)<br/>
            .esc<br/>
            .space<br/>
            .up<br/>
            .down<br/>
            .left<br/>
            .right<br/>
        </div>

        <hr/>
        <p>키 조합도 가능</p>
        <p>{{ inputData2 }}</p>
        <p>{{ inputData3 }}</p>
        <button @click.shift="clickWithShift">쉬프트 누르고 클릭</button>
    </div>

    <div>
        <h3>exact</h3>
        <p> .exact 수식어 이용해서 정확한 조합 제어 가능 </p>
    </div>

    <div>
        <h3>마우스버튼</h3>
        <p>.left, .middle, .right</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const cnt = ref(0)
const log = ref("")
const eventData1 = '<a @click.stop="doThis"></a>'
const inputData1 = '<input @keyup.enter="submit" />'
const inputData2 = '<input @keyup.alt.enter="clear" />'
const inputData3 = '<div @click.ctrl="doSomething">시작하기</div>'

function hello(event) {
  alert("asdf")
  if(event) {log.value = event.target.tagName}
}
function greet(txt) {
    alert(txt)
}
function clickWithShift() {
    alert("you can")
}
</script>

<style scoped>
div {
    border: 1px solid gray;
    margin: 3px;
}
</style>