<template>
    <div>
        <h3>기본 사용</h3>
        <p>  {{ this.cnt }} > 5 : {{ checkCnt }}  <button @click="increase">up</button></p>
    </div>

    <div>
        <h3>캐싱</h3>
        <p>computed 대신에 method 써도 동일한 결과. 그러나, computed는 반응형을 기반으로 캐시된다. 즉, 의존된 반응형이 변경되지 않는다면 캐시된 값 이용한다.</p>
    </div>

    <div>
        <h3>수정</h3>
        <p>computed는 getter이지만 setter도 사용 가능하다. 단 사용하는 건 좋지 않다.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cnt: 1
        }
    },
    methods: {
        increase() {
            this.cnt+=1
        }
    },
    computed: {
        checkCnt() {
            if(this.cnt > 5) {return "YES"}
            else{return "NO"}
        }
    }
}
</script>

<style scoped>
div {
    border: 1px solid gray;
    margin: 3px;
}
</style>
