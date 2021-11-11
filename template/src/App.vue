<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="setLocal($i18n.locale)">\{{ $t("lang_name") }}:<b>\{{ $i18n.locale }}</b></button>
    <HelloWorld :msg="$t('message')" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    setLocal (lang) {
      localStorage.setItem("local", lang === "en-US" ? "zh-CN" : "en-US");
      this.$i18n.locale = lang === "en-US" ? "zh-CN" : "en-US";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
