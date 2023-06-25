<style scoped></style>

<template>
  <div>
    <button v-on:click="showLog">show</button>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  methods: {
    showLog(e) {
      console.log(e.target);
      debugger;
      this.$emit('showLog', 'abc', 123);
    },
  },
};
</script>
