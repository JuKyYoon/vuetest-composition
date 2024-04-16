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
        <p>기본값이 아니면 reactive() 통해 반응형 프록시로 전환</p>
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
        <h3>reactive 제한사항항</h3>
        <p>1. 객체, 배열, map, set 등의 컬렉션 유형에만 사용 가능. 기본 유형 사용 불가</p>
        <p>2. 항상 동일한 참조 유지해야 함.</p>
        <p>만약 반응형 객체의 속성을 다른 변수에 할당하거나, 함수에 할당하면 연결 끊어짐.</p>
    </div>

    <div>
        <h3 style="background-color: yellow;">ref() 를 써라</h3>
        <p>reactive()의 제한사항을 해결! -> 어떠한 유형의 데이터라도 반응형으로 재정의한다.</p>
        <p>ref함수는 받은 인자를 ref객체에 매핑 후 반환</p>
        <p>객체라면, 객체 전체가 반응형이고, 자동으로 .value를 reactive로 변환한다.</p>
    </div>


    <div>
        <h3>ref 언래핑</h3>
        <p>템플릿 안에서는 언래핑 되므로 .value써줄 필요 없다.</p>
        <p>단, ref가 최상위 프로퍼티인 경우에만 적용.</p>
        <p>const obj = {foo : ref(1)} 은 X</p>
        <p>const { foo } = obj 라고 해야 된다. 이 때는 foo가 최상위 프로퍼티가 되므로 표현식 사용 가능. {{ foo + 1 }} = 4</p>
        <p>ref가 객체의 속성으로 접근하거나 변경되면 자동 언래핑. 일반 속성처럼 사용 가능 (value 쓰면X.) </p>
        <p>새로운 ref할당되면 이전 ref는 대체된다.</p>
    </div>

    <div>
        <h3>개인적 의견</h3>
        <p>객체 일부분만 반응형 만들고싶으면 REF쓰는데</p>
        <P>객체 전체를 그냥 반응형 만들고 싶으면 reactive로 감싸는게 사용하기 편하다</P>
    </div>

    <div>
        <h3>배열 및 컬렉션 ref 언래핑</h3>
        <p>객체랑 달리 언래핑 X. value써줘야함.</p>
    </div>
    <div>

    </div>
    <div>
        <h3>메소드 동적 생성</h3>
        <p> <a href="https://ko.vuejs.org/guide/essentials/reactivity-fundamentals.html#stateful-methods">몰라</a> </p>
    </div>
</template>

<script setup>
import { nextTick, ref, reactive } from 'vue'

const obj = { foo : ref(3)}
const { foo } = obj

const def = ref(77)
const abc = reactive({
    def
})
console.log(abc.def) // 77 자동 래핑되어 value 안써도 된다.



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