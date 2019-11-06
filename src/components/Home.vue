<template>
  <div>
    <h1>The Vue.js Stock Trader</h1>
    <hr />
    <h4>You may save your data using the 'Save' button, located in the Save & Load dropdown in the navigation bar.</h4>
    <h5>(Click on 'End Day' to a start a new day of trading)</h5>
    <hr />
    <h3>Current Funds: {{funds | currency }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style>
</style>