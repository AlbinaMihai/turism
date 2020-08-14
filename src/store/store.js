import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

 export const store=new Vuex.Store({
    state:{
        submenu:'Home'
    },
     mutations:
         {
            changeSubmenu(state,sub){
                state.submenu=sub;
            }
         }
})