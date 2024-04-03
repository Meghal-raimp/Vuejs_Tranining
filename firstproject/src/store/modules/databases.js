import axios  from "axios";
const state ={
    dummyData:[]
};
const getters = {
    DummyData: (state) => state.dummyData
};
const actions = {
     fetchDummyData({commit}){
        axios.get('http://localhost:3000/products')
            .then(function (resp){
                commit('setDummyData', resp.data);
            })
            .catch(function (error){
                console.log(error)
             })
    }
};
const mutations = {
    setDummyData(state, dummyData){state.dummyData = dummyData}
}
export  default {
    state,
    getters,
    actions,
    mutations
}