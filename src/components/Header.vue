<template>
  <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">
            <img src="../assets/img/vue.png" width="25px" />
          </router-link>
        </div>

        <div class="navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link to="/stocks" active="active" tag="li">
              <a>Market Summary</a>
            </router-link>
            <router-link to="/portfolio" activeClass="active" tag="li">
              <a>Your Stocks</a>
            </router-link>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li>
              <a class="hoverNone">Day: {{ days }}</a>
            </li>
            <li>
              <a class="hoverNone">Wallet: {{ funds | currency }}</a>
            </li>
          </ul>

          <ul class="nav navbar-nav">
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
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isDropdownOpen: false,
      toggleCollapse: false,
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
.hoverNone {
  pointer-events: none;
  font-weight: bold;
  font-style: italic;
}
</style>