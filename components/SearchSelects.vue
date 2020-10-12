<template>
  <div class="search-selects">
    <select name="city" id="" v-model="searchSelectCity" @change="saveSelect">
      <option :key="key" :value="value.city" v-for="(value, key) in this.$store.state.cityList">
        {{value.city}}
      </option>
    </select>
    <select name="sell" id="" v-model="searchSelectSell" @change="saveSelect">
      <option value="Купить" selected>Купить</option>
      <option value="Продать">Продать</option>
    </select>
    <select name="building" id="" v-model="searchSelectBuilding" @change="saveSelect">
      <option value="Офис" selected>Офис</option>
      <option value="Не офис">Не офис</option>
    </select>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      searchSelectCity:'Москва',
      searchSelectSell: 'Купить',
      searchSelectBuilding: 'Офис'
    }
  },

  mounted() {
    this.$store.dispatch('loadCityList');
  },

  methods: {
    saveSelect() {
      let selects = {
        city: this.searchSelectCity,
        sell: this.searchSelectSell,
        building: this.searchSelectBuilding,
      }

      this.$store.commit('saveSelects', selects);

    },
  }
}

</script>


