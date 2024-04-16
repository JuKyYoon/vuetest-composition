<template>
  <div>
    메인
    <h3>숫자를 한글로 바꾸기</h3>
    <input v-model="inputNum" id="num"/> <label for="num"> {{ korNum }} </label>
  </div>
</template>

<script setup>

import {ref,computed,watch} from 'vue';
const inputNum = ref(51231)

// 와쳐 이용해서 0을 제거하자
watch(inputNum, (newVal, oldVal)  => {
  if(isNaN(Number(newVal))) {
    inputNum.value = oldVal
  } else {
    if (newVal.length == 0) {
      inputNum.value = 0
    } else if (newVal.length >= 9) {
      inputNum.value = oldVal
    } else {
      if (newVal != 0) {
        // console.log(inputNum.value)
        inputNum.value = Number(inputNum.value)
      } 
    }
  }
})

const han = [" ", " ", "이", "삼", "사" ,"오", "육", "칠", "팔", "구"]
const han2 = [" ", "일", "이", "삼", "사" ,"오", "육", "칠", "팔", "구"]
const unit = ["", "십", "백", "천", "만", "십", "백", "천"]
const korNum = computed(() => {
  if(isNaN(Number(inputNum.value))) {
    return "숫자 아니야"
  } else {
    if(inputNum.value == 0) {return "영 원"}
    let num = inputNum.value.toString().split('').reverse()
    let ret = ""
    let len = num.length
    
    for(let i=0; i<5 && i < len; i++) {
      if(num[i] != 0) {
        ret = (i == 0 ? han2[num[i]] : han[num[i]]) + unit[i] + " " + ret
      } else {
        ret = han[num[i]] + " " + ret
      }
    }

    // 십만 부터 다시 해야 함
    // for(let i=5; i < len; i++) {

    //   if(num[i] != 0) {
    //     ret = (i == 0 ? han2[num[i]] : han[num[i]]) + unit[i] + " " + ret
    //   } else {
    //     ret = han[num[i]] + " " + ret
    //   }
    // }

    return ret + " 원 "
  }
})


// 실패한 거
// const han = [" ", " ", "이", "삼", "사" ,"오", "육", "칠", "팔", "구"]
// const unit = ["", "십", "백", "천", "만", "억", "조"]
// const korNum = computed(() => {
//   if(isNaN(Number(inputNum.value))) {
//     return "숫자 아니야"
//   } else {
//     let num = inputNum.value
//     let ret = ""
    
//     // 일 ! 만
//     // 십만 ~ 천만
//     // 억

//     // 일억일 떄랑 일의 자리 숫자일때 앞에 일 붙음
//     // 십만일때는 만 붙이지 말기 135000
//     // 만약 만 자리수 0이면 만 붙여야 함

//     // 숫자 list 변환후 진행하는 게 좋아보임
//     let u = 0
//     while(num > 0) {
//       if(u == 5) {u++; ret = "만 " + ret}
//       let n = num % 10

//       if(n != 0) {
//         ret = han[n] + unit[u%5] + " " + ret
//       } else {
//         ret = han[n] + " " + ret
//       }
      
//       u++
//       num = parseInt(num/10)
//     }

//     return ret + " 원 "
//   }
// })

</script>

<style scoped>
div {
  border: 1px solid black;
  padding : 3px;
  margin : 3px;
}
</style>
