<template>
  <div class="search-controllers">
    <div class="search-controllers__main">
     <span @click="activateMainSearch" :class="[searchCheck ? '' : 'disable']">Основной поиск</span>
      <label class="switch">
        <input type="checkbox"  v-model="searchCheck" @change="check">
        <span class="slider round"></span>
      </label>
      <span @click="activateSearchByText" :class="[searchCheck ? 'disable' : '']">Искать по названию</span>
    </div>
    <div class="search-controllers__options" v-show="showControllers">
      <span class="search-controllers__options__price" @click="activatePriceFilters" :class="{ disable: !priceFiltersIcon }">Цена</span>
      <span class="search-controllers__options__meters" @click="activateAreaFilters" :class="{ disable: !areaFiltersIcon }">Метраж</span>
    </div>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      searchCheck: true,
      showControllers: false,
      areaFilters: false,
      areaFiltersIcon: true,
      priceFilters: false,
      priceFiltersIcon: false
    }
  },

  methods: {
    check() {
      this.showControllers = !this.searchCheck;
      this.areaFilters = !this.searchCheck;
      if (this.areaFilters) {
        this.priceFilters = !this.areaFilters;
      } else {
        this.priceFilters = !this.searchCheck;
      }

      this.$emit('searchSwitch', this.searchCheck)
      this.$emit('showAreaFilters', this.areaFilters);
      this.$emit('showPriceFilters', this.priceFilters);
    },
    activateSearchByText() {
      this.searchCheck = true;
      this.showControllers = false;
      this.areaFilters = false;
      this.priceFilters = false;
      this.$emit('searchSwitch', this.searchCheck);
      this.$store.commit('setAreaFilter', this.areaFilters);
      this.$store.commit('setPriceFilter', this.priceFilters);
    },
    activateMainSearch() {
      this.searchCheck = false;
      this.showControllers = true;
      this.$emit('searchSwitch', this.searchCheck);
    },
    activateAreaFilters() {
      this.areaFilters = true;
      this.areaFiltersIcon = false;
      this.priceFiltersIcon = true;
      this.priceFilters = false;
      this.$store.commit('setAreaFilter', this.areaFilters);
      this.$store.commit('setPriceFilter', this.priceFilters);
    },
    activatePriceFilters() {
      this.priceFilters = true;
      this.areaFiltersIcon = true;
      this.priceFiltersIcon = false;
      this.areaFilters = false;
      this.$store.commit('setPriceFilter', this.priceFilters);
      this.$store.commit('setAreaFilter', this.areaFilters);
    }
  }
}

</script>


