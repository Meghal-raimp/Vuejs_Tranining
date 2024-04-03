import {createStore} from "vuex";
import dummyData from './modules/databases'

const store = createStore({
    modules:{
        dummyData
    }
})
export default store;