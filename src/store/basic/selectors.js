const getHomePageData = store => {
    return store.homeReducer.data.homePageData;
}

const searchData = store => {
   return store.homeReducer.data.searchData;
}

const addressData = store => {
    return store.homeReducer.data.addressData
;}

export { getHomePageData, searchData, addressData };