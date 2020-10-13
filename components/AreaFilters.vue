<template>
  <div class="area-filters">
    <div class="area-filters-inputs">
      <input type="text" placeholder="От" v-model="areaStart" @change="saveArea"/>
      <input type="text" placeholder="До" v-model="areaEnd" @change="saveArea"/>
      <div class="area-filters-inputs-wrapper">
        <select name="" id="" v-model="currency" @change="saveArea">
        <option value="&#8381;/месяц">&#8381;/месяц</option>
        <option value="&#36;/месяц">&#36;/месяц</option>
      </select>
      </div>
    </div>
    <button class="button__options" @click="activatePriceFilters">Добавить цену</button>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      areaStart: '',
      areaEnd: '',
      currency: '&#36;/месяц'
    }
  },


  methods: {
    activatePriceFilters(e) {
      e.preventDefault();
      this.$store.commit('setPriceFilter', true);
      this.$store.commit('setAreaFilter', false);
    },

    saveArea() {
      let area = {
        start: this.areaStart,
        end: this.areaEnd,
        currency: this.currency
      }

      this.$store.commit('saveArea', area);
    }
  }
}

</script>


