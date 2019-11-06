<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <p class="price pull-right">{{ stock.price | currency }}</p>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            style="width: 100px"
            :class="{danger: insufficientFunds}"
          />
        </div>
        <div class="pull-right">
          <button
            @click="buyStock"
            class="btn"
            :disabled="insufficientFunds || quantity <= 0"
          >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.danger {
  border: 2px solid lightcoral;
}
.panel-heading, .btn {
  background-color: #399e79;
  color: #fff;
}
.price {
  font-size: 14px;
}
</style>