import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    loadData({ commit }) {
      console.log('hello');
      Vue.http
        .get('data.json')
        .then(response => response.json())
        .then(data => {
          if (data) {
            const stocks = data.stocks;
            const funds = data.funds;
            const stockPortfolio = data.stockPortfolio;

            const portfolio = {
              stockPortfolio,
              funds
            };

            commit('SET_STOCKS', stocks);
            commit('SET_PORTFOLIO', portfolio);
          }
        });
    }
  },
  modules: {
    stocks,
    portfolio
  }
});
