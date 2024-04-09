<template>
    <div>
        <h3>js랑 값 바인딩하기</h3>
        <p> {{ msg }}</p>
        <input v-model="msg"/>

        <p>v-model은 input, select, textarea에 사용 가능</p>
        <p>만약 체크박스나 라디오버튼은 checked속성이랑 change이벤트 사용</p>
        <p>select는 value가 속성, change가 이벤트</p>
        <p><b>v-model은 초기값 무시하므로 data에서 선언해줘야함</b></p>
    </div>

    <div>
        <h3>체크박스 사용하기</h3>
        <template v-for="(item, idx) in testCheckBox" :key="idx">
            <input type="checkbox" v-model="checkedData" :value="item"/>
            <label>{{ item }}</label>
        </template>
        <p> 체크된것 : {{ checkedData }} = 체크한 순서대로 배열에 들어감</p>
    </div>

    <div>
        <h3>라디오 버튼 사용하기</h3>
        <template v-for="(item, idx) in testRadio" :key="idx">
            <input type="radio" v-model="radioData" :value="item"/>
            <label>{{ item }}</label>
        </template>
        <p>선택한 것: {{ radioData }}</p>
        <button @click="radioData = undefined">초기화</button>
    </div>

    <div>
        <h3>단일 셀렉트 사용하기</h3>
        <p> {{ selectedData }}</p>
        <select v-model="selectedData">
            <option disabled value="">selecttttasdfa</option>
            <option v-for="(s,i) in testSelect" :key="i">{{ s }}</option>
        </select>
    </div>
    <div>
        <h3>다중 셀렉트 사용하기</h3>
        <p> {{ selectedDatas }}</p>
        <select v-model="selectedDatas" multiple>
            <option v-for="(s,i) in testSelect" :key="i">{{ s }}</option>
        </select>
    </div>
    <div>
        <h3>값 바인딩하기</h3>
        <p>바인딩된 값은 정적문자열</p>
        <p>동적속성에 할당하기 위해서는 v-bind 이용해야 함</p>
        
        <h4>체크박스</h4>
        <p>일반적으로 true/false</p>
        <p>Vue가 제공하는 true-value, false-value 어트리뷰트 통해 값 설정 가능</p>
        <p>v-bind 이용해서 동적 값 할당 가능</p>

        <input
            type="checkbox"
            v-model="toggle1"
            true-value="네"
            false-value="아니오" />  <label>{{ toggle1 }}</label>
        <input v-model="yes"/>
        <input v-model="no"/> 
            <input
            type="checkbox"
            v-model="toggle2"
            :true-value=yes
            :false-value=no />  <label>{{ toggle2 }}</label> 
            <hr/>

        <h4>라디오</h4>
        <input v-model="first"/>
        <input v-model="second"/> 
        <input type="radio" v-model="pick" :value="first" />
        <input type="radio" v-model="pick" :value="second" />
        <p>pick = {{ pick }}</p>

        <h4>셀렉트</h4>
        <select v-model="selected">
          <!-- 인라인 객체 리터럴 -->
          <option disabled value="">none</option>
          <option :value="{ number: 123 }">123</option>
        </select>
        <p>value에 객체 할당 가능 {{ selected }}</p>
    </div>
    <div>
        <h3>수식어</h3>
        <p>.lazy : 일반적으로 input이벤트 이후에 데이터와 동기화. lazy붙이면 change이벤트이후에 동기화 가능 : v-model.lazy</p>
        <p>number 자동 숫자 변환, trim : </p>
    </div>
    <div>
        <h3>컴포넌트에서도 v-model 사용 가능하다.</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "msg",
            checkedData: [],
            testCheckBox : [1,2,3,4],
            radioData: undefined,
            testRadio : [11,22,33],
            selectedData : '',
            selectedDatas : [],
            testSelect: [111,222,333],
            toggle1: '',
            toggle2: '',
            yes: '네',
            no: '아니오',
            first: 'first',
            second: 'second',
            pick: 'second',
            selected: ''
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