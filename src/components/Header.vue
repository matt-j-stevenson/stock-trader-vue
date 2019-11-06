<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">
          <img src="../assets/img/vue.png" width="25px" />
        </router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/stocks" active="active" tag="li">
            <a>Market Summary</a>
          </router-link>
          <router-link to="/portfolio" activeClass="active" tag="li">
            <a>Your Stocks</a>
          </router-link>
        </ul>

        <strong class="navbar-text navbar-right">Wallet: {{ funds | currency }}</strong>

        <strong class="navbar-text navbar-right">Day: {{ days }}</strong>

        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" @click="endDay">End Day</a>
          </li>
          <li
            class="dropdown"
            :class="{open: isDropdownOpen}"
            @click="isDropdownOpen = !isDropdownOpen"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save | Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#" @click="saveData">Save Data</a>
              </li>
              <li>
                <a href="#" @click="fetchData">Load Data</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isDropdownOpen: false,
      days: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(["randomiseStocks", "loadData"]),
    endDay() {
      this.randomiseStocks();
      this.days += 1;
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    fetchData() {
      this.loadData();
    }
  }
};
</script>

<style>
</style>