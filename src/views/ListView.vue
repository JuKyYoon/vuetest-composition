<template>
    <h2>v-for 사용</h2>
    <div>
        <h3>v-for 이용하기</h3>
        <p>v-for="car in cars"</p>
        <p>v-for="(car, index) in cars"       순서 중요. 두번째가 인덱스</p>
        <ul>
            <li v-for="(car, index) in cars">{{index}} : {{ car.type }}</li>
        </ul>
    </div>

    <div>
        <h3>js의 for-each처럼 분해할당 가능</h3>
        <p> v-for="({type}, index) in cars"</p>
        <ul>
            <li v-for="({type}, index) in cars">{{ type }}</li>
        </ul>
    </div>

    <div>
        <h3>in 대신 of 사용가능</h3>
    </div>

    <div>
        <h3>객체에 v-for 사용</h3>
        <p>순서는 Object.keys() 호출한 결과와 동일</p>
        <ul>
            <li v-for="value of book"> {{ value }}</li>
        </ul>
        <p>alias 3개 사용 가능 : 밸류, 속성명, 인덱스</p>
        <p>v-for="(value, attr, idx) in book"</p>
        <ul>
            <li v-for="(value, attr, idx) in book"> {{ idx }} : {{ attr }} : {{ value }}</li>
        </ul>
    </div>

    <div>
        <h3>숫자에 v-for사용</h3>
        <p>v-for="num in 10"</p>
        <span v-for="num in 10">{{ num }}</span>
    </div>

    <div>
        <h3>template에도 v-for사용 가능</h3>
        <template v-for="(car, index) in cars" :key="index">
            <span >{{ index }} : {{ car.type }}</span>
            <hr/>
        </template>
    </div>

    <div>
        <h3>v-if와 v-for 사용</h3>
        <p>v-if가 v-for보다 우선순위 높음 = v-if에서 v-for 변수 접근 불가</p>
        <p>해결책: template태그를 이용하자</p>

        <div> {{ vIfForEx }}</div>

        <ul>
          <template v-for="(car, index) in cars" :key="index">
              <li v-if="car.capacity > 4">{{ car.type }} : cap = {{ car.capacity }}</li>
          </template>
        </ul>
    </div>

    <div>
        <h3>key사용하기</h3>
        <p>리스트 렌더링할때 in-place-patch전략 사용 : 순서 변경된 경우, dom 이동하는거 대신에 변경이 필요한 엘리먼트들을 제자리에서 패치한다!</p>
        <p>위 방식은 효율적이지만, 리스트 렌더링이 임시dom상태나 자식 컴포넌트 상태에 의존하지 않는 경우에만 유효!</p>
        <p>그래서 기존 엘리먼트 재사용하고 재정렬하기 위해 key값 필요</p>
        <p>key에는 문자열, 숫자, 심볼 형식의 값만 사용가능</p>
    </div>

    <div>
        <h3>컴포넌트에 v-for 사용하기</h3>
        <p>컴포넌트에 v-for쓴다고 해서 아이템 자동 전달 X. 왜냐 의존적 관계 되기 때문.</p>
        <list-component-vue v-for="car in cars" :key="car.type" :car="car"></list-component-vue>
        <p><strong>dom에 직접 작성하면 kebal케이스 써야함</strong></p>
        <ListComponentVue v-for="car in cars" :key="car.type" :car="car" />

    </div>

    <div>
        <h3>배열변경 감지</h3>
        <p>배열 변경 메소드 호출되면 업데이트</p>
        <p>filter, concat, slice는 원본배열 안 건드리고 새로운 배열 반환 -> 이 경우는 교체해야 함. 그러나 Dom이 전체를 새롭게 렌더링 하지 않음.</p>
    </div>

    <div>
        <h3>정렬하거나 필터링</h3>
        <p>computed 이용해서 할 수 있다.</p>
        <p>computed에서 reverse랑 sort 주의해서 사용하자. 원본 배열 바꾸므로 복사본 만들자</p>
        <p :style="{color: 'red'}">- return numbers.reverse()</p>
        <p :style="{color: 'green'}">+ return [...numbers].reverse()</p>
        <br/>
        <p>computed 못 쓰는 상황해서는 메소드 이용.</p>
    </div>

</template>

<script setup>
import ListComponentVue from '@/components/ListComponent.vue'
import { ref, reactive} from 'vue'

const cars = ref(
[
  {
    "color": "purple",
    "type": "minivan",
    "capacity": 7
  },
  {
    "color": "blue",
    "type": "SUV",
    "capacity": 5
  },
  {
    "color": "red",
    "type": "sedan",
    "capacity": 5
  },
  {
    "color": "green",
    "type": "hatchback",
    "capacity": 5
  },
  {
    "color": "yellow",
    "type": "convertible",
    "capacity": 4
  },
  {
    "color": "black",
    "type": "pickup truck",
    "capacity": 5
  },
  {
    "color": "white",
    "type": "van",
    "capacity": 8
  },
  {
    "color": "silver",
    "type": "coupe",
    "capacity": 4
  },
  {
    "color": "orange",
    "type": "sports car",
    "capacity": 2
  },
  {
    "color": "gray",
    "type": "station wagon",
    "capacity": 5
  }
])
const book = ref({
  title: "제에에엥목",
  author: "저어어어어아자",
  price: 30000
})

const vIfForEx = `<template v-for="(car, index) in cars" :key="index">\n
            <li v-if="car.capacity > 4">{{ car.type }} : cap = {{ car.capacity }}</li>\n
                </template>`

</script>

<style scoped>
div {
    border: 1px solid gray;
    margin: 3px;
}
</style>