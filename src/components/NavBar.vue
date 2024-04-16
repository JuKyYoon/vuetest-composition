<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/template-syntax">템플릿 문법</RouterLink>
        <RouterLink to="/reactivity-fund">반응형 기초</RouterLink>
        <RouterLink to="/computed-prop">계산된 속성</RouterLink>
        <RouterLink to="/class-and-style">클래스와 스타일바인딩</RouterLink>
        <RouterLink to="/conditional">조건부렌더링</RouterLink>
        <RouterLink to="/list">리스트렌더링</RouterLink>  
        <RouterLink to="/event-handling">이벤트 핸들링</RouterLink>
        <RouterLink to="/forms">Form입력 바인딩</RouterLink>
        <RouterLink to="/registering-lifecycle-hooks">생명주기 훅 등록하기</RouterLink>
        <RouterLink to="/watchers">감시자</RouterLink>
        <RouterLink to="/template-refs">템플릿 참조</RouterLink>
        <RouterLink to="/component-basics">컴포넌트 기초</RouterLink>
        <RouterLink to="/component-registration">컴포넌트 등록/Props</RouterLink>
        <RouterLink to="/compoennt-event">컴포넌트 이벤트/Props</RouterLink>
    </nav>
</template>

<style scoped>

nav {
  align-content: center;
  margin: 10px;
  /* border: 3px solid black; */

}

nav > a {
    padding: 5px;
    font-size: 0.9rem;
    border : 2px solid black;
    border-radius: 10px;
    text-decoration-line: none;
    display: inline-block;
    margin: 1px;

}
nav > a:hover {
  background-color: aqua;
}
</style>