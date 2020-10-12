<template>
  <form class="search" id="search">
    <div class="search-container">
      <div class="search-fields">
        <input type="text" class="search-fields__main" name="main" v-model="message" @change="saveTextRequest" v-show="textSearch" :placeholder="searchPlaceholderText"/>
        <search-selects v-show="!textSearch" />
      </div>
      <button class="search-button" @click="sendFormRequest">Найти</button>
    </div>
    <area-filters v-show="getFilters.areaFilters"></area-filters>
    <price-filters v-show="getFilters.priceFilters"></price-filters>

    <search-controllers @searchSwitch="hideSearch"  />
  </form>
</template>

<script>
import SearchSelects from "@/components/SearchSelects";
import SearchControllers from "@/components/SearchControllers";
import AreaFilters from "@/components/AreaFilters";
import PriceFilters from "@/components/PriceFilters";
import { mapGetters } from 'vuex';

export default {
  components: {
    SearchSelects,
    SearchControllers,
    AreaFilters,
    PriceFilters
  },

  data: function() {
    return {
      textSearch: true,
      areaFilters: false,
      priceFilters: false,
      searchPlaceholderText: 'Введите название объекта (бизнес-центра, торгового центра, новостройки, логопарка)',
      message: ''
    }
  },

  methods: {
    hideSearch(data) {
      this.textSearch = data;
    },
    sendFormRequest(e) {
      e.preventDefault();
      console.log('data: ', JSON.stringify(this.getSearchData));
      alert(JSON.stringify(this.getSearchData));

    },

    saveTextRequest() {
       this.$store.commit('saveMessage', this.message);
    }
  },

  computed: {
    ...mapGetters(['getFilters', 'getSearchData']),
  },
}

</script>


