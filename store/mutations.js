export  const  setPriceFilter = (state, result) => {
  console.log(result);
  state.filters.priceFilters = result;
}

export  const  setAreaFilter = (state, result) => {
  state.filters.areaFilters = result;
}

export  const  loadCityList = (state, result) => {
  state.cityList = result;
}

export  const  saveMessage = (state, result) => {
  state.searchData.message = result;
}

export  const  saveSelects = (state, result) => {
  state.searchData.selects = result;
}

export  const  savePrice = (state, result) => {
  state.searchData.price = result;
}

export  const  saveArea = (state, result) => {
  state.searchData.area = result;
}
