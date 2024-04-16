<template>
    <div>
        <h3>클래스 동적 바인딩</h3>
        <button @click="classBinding"> click</button>
        <div :class="{blackClass : isBlack}"><span>클래스 하나</span></div>
        <div :class="{blackClass : isBlack, 'red-font' :isRedFont}" class="static"><span>클래스 여러개</span></div>

        <p>바인딩 할 때 인라인일 필요 없이 객체로도 가능</p>
        <button @click="classBinding2">click</button>
        <div :class="testClass">dddd</div>
    </div>

    <div>
        <h3>computed 사용해서 바인딩 가능</h3>
        <button @click="classBinding"> click</button>
        <div :class="classObject">asdfasdf</div>
    </div>

    <div>
        <h3>배열 사용해서 바인딩 가능</h3>
        <div :class="['green-font', 'redClass']"> :class="['green-font', 'redClass']" </div>
    </div>

    <div>
        <h3>삼항연산자 사용해서 바인딩 가능</h3>
        <button @click="classBinding"> click</button>
        <div :class="[isBlack ? 'green-font' : 'red-font', 'redClass']"> :class="[isBlack ? 'green-font' : 'red-font', 'redClass']"</div>
    </div>

    <div>
        <h3>배열 내에서 객체 구문 사용 가능</h3>
        <button @click="classBinding"> click</button>
        <div :class="[{blackClass : isBlack}, 'red-font']">:class="[{blackClass : isBlack}, 'red-font']"</div>
    </div>

    <div>
        <h3>컴포넌트에서 사용하기</h3>
        <p>클래스가 해당 컴포넌ㅌ의 루트 엘리먼트에 더해진다!</p>
        <style-component-vue class="red-font"></style-component-vue>

        <p>동적 바인딩도 가능</p>
        <button @click="classBinding"> click</button>
        <style-component-vue :class="[{blackClass : isBlack}, 'blue-font']"/>

        <p>만약 루트 컴포넌트가 여러개라면 클래스 적용할 엘리먼트 정의해야 한다. $attrs 속성 이용</p>
        <p>단. style-scoped는 해당 컴포넌트에 선언해줘야 적용된다.</p>
        <style-components-vue :class="[isBlack ? 'green-font' : 'blue-font']"/>

    </div>

    <div>
        <h3>인라인 스타일 바인딩</h3>
        <button @click="changeErrorColor">change</button>
        <p :style="{color: errorColor}">:style="{color: errorColor}"</p>

        <p>style은 카멜 케이스 권장이지만 케밥도 사용은 가능</p>
        <button @click="upFontSize">++</button>
        <p :style="{'font-size' : fontSize + 'px'}"> :style="{'font-size' : fontSize + 'px'}" </p>
        
        <p>style은 객체로 바인딩 가능</p>
        <p :style="styleObj">:style="styleObj"</p>
    </div>

    <div>
        <h3>배열로 바인딩 하기</h3>
        <p :style="[styleObj]">스타일 객체 여러개 넣을 수 있음</p>
    </div>

    <div>
        <h3>배열 이용해 다중값 넣기</h3>
        <p>브라우저가 지원하는 값 중 마지막 값 렌더링한다.</p>
        <div :style="{ display: ['flex', '-webkit-box', '-ms-flexbox'] }">:style="{ display: ['flex', '-webkit-box', '-ms-flexbox'] } 중에 -webkit-box 이 적용된다.</div>
    </div>
</template>

<script>
import StyleComponentVue from '@/components/StyleComponent.vue'
import StyleComponentsVue from '@/components/StyleComponents.vue'
export default {
    components: {
        StyleComponentVue,
        StyleComponentsVue
    },
    data() {
        return {
            isBlack: false,
            isRedFont : false,
            errorColor: 'red',
            fontSize : 13,

            testClass: {
                redClass: false,
                'blue-font' : false
            },
            styleObj: {
                'font-size' : '17px',
                'font-weight': 700,
                color: 'skyblue'
            }
        }
    },
    methods: {
        classBinding() {
            this.isBlack = !this.isBlack
            this.isRedFont = !this.isRedFont
        },
        classBinding2() {
            this.testClass.redClass = !this.testClass.redClass
            this.testClass['blue-font'] = !this.testClass['blue-font']
        },
        changeErrorColor() {
            if(this.errorColor == 'red') {this.errorColor = 'orange'}
            else {this.errorColor = 'red'}
        },
        upFontSize() {
            this.fontSize++
        }
    },
    computed: {
        classObject() {
            if(this.isRedFont) {return { 'red-font': true }}
            else{return {'green-font' : true}}
        }
    }

}
</script>

<style scoped>
div {
    border: 1px solid gray;
    margin: 3px;
}

.redClass {
    background-color: red
}

.blackClass {
    background-color: black
}
.red-font {
    color: red
}
.blue-font {
    color: blue
}
.green-font {
    color: green
}
</style>