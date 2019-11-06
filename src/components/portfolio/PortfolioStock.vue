<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <p class="price pull-right">{{ stock.price | currency }} | Owned: {{ stock.quantity }}</p>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientQuantity}"
            style="width: 100px"
          />
        </div>
        <div class="pull-right">
          <button
            @click="sellStock"
            class="btn"
            :disabled="insufficientQuantity || quantity <= 0"
          >{{insufficientQuantity ? 'Not Enough Stock' : 'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({ placeSellOrder: "sellStock" }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.danger {
  border: 1px solid lightcoral;
}
.panel-heading,
.btn {
  background-color: #34495e;
  color: #fff;
}
.price {
  font-size: 14px;
}
</style>