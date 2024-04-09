<template>
    <div>
        <h3>반응형 설정</h3>
        <p>options api에서는 data이용해서 설정</p>
        <p> 이렇게 {{ cnt }}</p>
        <p>단, 처음 인스턴스 만들때만 추가된다. 그래서 null이나 undefined 같은 값이라도 넣어야 한다.</p>
        <p> data에 안 넣고 this에 바로 값 추가 가능하지만, 추후에 값 업데이트 X </p>
        <p> 접두사로 $나 ... 사용하지 말기</p>
    </div>

    <div>
        <h3>메소드 선언</h3>
        <p> {{ cnt }} <button @click="increase">up</button></p>
        <p>화살표 함수 쓰면 this 접근 불가! 그래서 funciton() { } 이 형태로 만들기</p>
    </div>

    <div>
        <h3>깊은 반응형</h3>
        <p>객체나 배열 값 변경해도 감지함</p>
        <p> {{ this.obj1.obj2.cnt }}  <button @click="increase2">up2</button></p>
    </div>

    <div>
        <h3>dom업데이트</h3>
        <p>반응상태 변경하면 dom 업데이트. 단, 동기적이 아니라서 상태변경 많이 있어도 한번만 업데이트함,</p>
        <p>nextTick 함수 통해 업데이트 완료까지 기다릴 수 있음</p>
    </div>

    <div>
        <h3>메소드 동적 생성</h3>
        <p> <a href="https://ko.vuejs.org/guide/essentials/reactivity-fundamentals.html#stateful-methods">몰라</a> </p>
    </div>
</template>

<script>
import { nextTick } from 'vue'
export default {
    data() {
        return {
            cnt: 4,
            obj1: {
                obj2: {
                    cnt: 3
                }
            }
        }
    },
    methods: {
        async increase() {
            this.cnt+=2
            await nextTick()
            console.log("update fin")
        },
        increase2() {
            this.obj1.obj2.cnt++;
        }
    },
    mounted() {
        // 메소드 호출 가능
    }
}
</script>

<style scoped>

div {
    border: 1px solid gray;
    margin: 3px;
}


</style>