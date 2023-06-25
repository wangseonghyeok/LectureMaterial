<style scoped>
input:focus {
  background-color: lightskyblue;
  border: 3px solid #555;
}
</style>

<template>
  <div id="app">
    <p>
      ref 사용 예제<br />
      페이지가 로딩되면 myinput1에 포커스를 주시오 <br />
      버튼을 클릭하면 myinput2에 포커스를 주시오 <br />
    </p>
    <div>
      <div>
        <label>myinput1</label>
        <input type="text" ref="myinput1" v-model="message" />
      </div>
      <div>
        {{ message }}
      </div>
    </div>
    <div>
      <label>myinput2</label>
      <input type="text" ref="myinput2" />
    </div>
    <button v-on:click="handlerMyinput1">포커스 이동</button>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return { message: null };
  },
  //template: ``,
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    /* vuex 를 사용하는 경우
      mapActions 는 store의 actions 를 가져오는 헬퍼 메서드입니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 actions 를 가져오는 2가지 방식
      1) store.모듈명.actions 이름 바꾸어 사용하기(추천방식)
         ...mapActions('모듈명', { dispatch액션명1: '액션명1', dispatch액션명2: '액션명2' }),
      2) store.모듈명.actions 이름 그대로 사용하기
         ...mapActions('모듈명', ['액션명1', '액션명2']),
      */
    handlerMyinput1(e) {
      console.log(e.target);
      debugger;
      this.$refs.myinput2.focus();
    },
  },

  mounted() {
    console.log('mounted');
    //   페이지가 로딩되면 myinput1에 포커스를 주시오
    this.$refs.myinput1.focus();
    /* store의 actions 호출 */
    // this.$store.dispatch('액션명', payload);
  },
};
</script>
