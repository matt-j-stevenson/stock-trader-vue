<template>
  <div class="center">
    <h3 class="home-title">The Vue.js Stock Trader</h3>
    <hr />
    <h4>The Aim:</h4>
    <div class="panel panel-default">
      <div class="panel-body">
        <h5>"You start out with £1,000 in your Wallet."</h5>
        <h5>"The aim is to buy/trade stocks to make profit."</h5>
        <h5>"Each stock has a preset price, but will flucuate everyday."</h5>
        <h5>"To invest in a company on the current Market, go to 'Market Summary'."</h5>
        <h5>"When you invest in a stock(s), view your stocks under 'Your Stocks'."</h5>
        <h5>"To end the day, click 'End Day'."</h5>
        <h5>"When a stock you've purchased price rises, make sure to sell it at the appropriate time."</h5>
        <h5>"The overall aim is to reach £10,000 within 50 days."</h5>
        <h5>"Happy trading!"</h5>
        <img src="../assets/img/vue.png" width="25px" />
      </div>
    </div>
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
.center {
  text-align: center;
}
.home-title {
  color: #399e79;
}
h4,
h5 {
  color: #34495e;
}
</style>