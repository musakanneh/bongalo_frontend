import { getReq, postReq } from '../../api_handler';


const state = {
    featuredApartment: [],
    apartmentImages: [],
    currentApartment: {},
    searchedApartment: []

}

const getters = {
    getFeatured: (state) => state.featuredApartment,
    getApartmentImages: (state) => state.apartmentImages,
    getCurrentApartment: (state) => state.currentApartment,
    getSearchedApartment: (state) => state.searchedApartment

}

const actions = {
    async getFeaturedApartments({commit}, data){
        return new Promise( async(resolve, reject) => {
            try {
                var res =  await getReq('apartment_all', {token:""});
                commit('setFeaturedApartments', res.results)
                resolve(1)
                
            } catch (error) {
                window.console.log(error);
                reject(-1)
            }
        })
    },

    async fetchApartmentImages({commit}, data){
        return new Promise( async(resolve, reject) => {
            try {
                var res =  await getReq('apartment_images', {token:"", url:"apartment/images/get?apartment="+data.apartmentUuid});
                commit('setApartmentImages', res.data)
                // window.console.log(res)
                resolve(1)
                
            } catch (error) {
                window.console.log(error);
                reject(-1)
            }
        })
    },

    async setCurrentApartment({commit}, data){
        return new Promise((resolve, reject) => {
            commit('setCurrentApartment', data.apartment)
            resolve(1)
        })
    },

    async searchApartment({commit}, data){
        // 
        return new Promise( async(resolve, reject) => {
            try {
                var res =  await getReq('search_apartment', {token:"", url:data.url});
                commit('setSearchedApartment', res.results)
                window.console.log(res)
                resolve(1)
                
            } catch (error) {
                window.console.log(error);
                reject(-1)
            }
        })
    }
}

const mutations = {
    setFeaturedApartments:(state, newFeatured) => (state.featuredApartment = newFeatured),
    setApartmentImages:(state, images) => (state.apartmentImages = images),
    setCurrentApartment:(state, apartment) => (state.currentApartment = apartment),
    setSearchedApartment: (state, apartments) => (state.searchedApartment = apartments),
}


export default {
    state, 
    actions,
    getters,
    mutations
}