<template>
    <div>
        <h3>data 변경될 떄 마다 함수 실행 가능</h3>
        <input v-model="cnt" type="number">
        <p>{{ ans }}</p>
    </div>
    <div>
        <h3>깊은 감시자</h3>
        <p>watch는 기본적으로 얕으므로, 중첩된 값을 감지 못함</p>
        <p>그래서 심층 감시자 사용해야 함</p>
        <p>deep: true</p>
        <input v-model="someObj.spring" />
        <p>{{ ans }}</p>
    </div>
    <div>
        <h3>열성적인 감시자</h3>
        <p>watch 콜백은 감시된소스가 변경되기 전까지 호출 안됨. </p>
        <p>해당 소스가 만들어 졌을 때 사용가능하도록 할 수 있음</p>
        <p>created 전에 1번 호출</p>
        <p>immediate: true</p>
        <input type="number" v-model="notLazy"/>
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
        <p>컴포넌트 언마운트될 때 자도으로 중지한다.... 만약 이전에 중지하고 싶으면 </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cnt: 1,
            ans: '',
            someObj: {
                spring: 'boot'
            },
            notLazy: 4,
            onlyOnce: 3,
            postCnt : 4
        }
    },
    methods: {
        updateAns() {
            this.ans = 'asdf';
        },
        increase() {
            this.postCnt++;
            this.postCnt++;
            this.postCnt++;
        }
    },
    computed: {

    },
    watch: {
        // 메소드 이름을 데이터와 같게
        cnt(newCnt, oldCnt) {
            console.log('as')
            if(newCnt > 3) {
                this.updateAns()
            }
        },
        someObj: {
            //이름 handler로 무조건 해야함
            handler(val, oldVal) {
                // 객체인 경우 val과 oldVal은 같다
                if(val.spring.length > 5) {
                    this.updateAns()
                }
            }, deep: true
        },
        notLazy: {
            handler(val, oldVal) {
                console.log("immediate")
            }, immediate: true
        },
        onlyOnce: {
            handler(val, oldVal) {
                alert("한번만")
            }, once: true
        },
        postCnt: {
            handler() {
                console.log('postCnt')
            }, 
            // flush: 'post'
            flush: 'sync'
        }

    },
    created() {
        console.log("Created")
    },
    beforeUpdate() {
        console.log("BeforeUpdate")
    },
    updated() {
        console.log("Updated")
    }
}
</script>

<style scoped>
div {
    border: 1px solid gray;
    margin: 3px;
}
</style>