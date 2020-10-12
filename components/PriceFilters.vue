<template>
  <div class="price-filters">
    <button class="button__options" @click="activateAreaFilters">Добавить метраж</button>
    <div class="price-filters-inputs">
      <input type="text" placeholder="От" v-model="priceStart" @change="savePrice" />
      <input type="text" placeholder="До" v-model="priceEnd" @change="savePrice"/>
      <div class="price-filters-inputs__meter">
        м <sup>2</sup>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      priceStart: '',
      priceEnd: ''
    }
  },

  methods: {
    activateAreaFilters(e) {
      e.preventDefault();
      this.$store.commit('setAreaFilter', true);
      this.$store.commit('setPriceFilter', false);
    },

    savePrice() {
      let price = {
        start: this.priceStart,
        end: this.priceEnd,
      }

      this.$store.commit('savePrice', price);
    }
  }
}

</script>


