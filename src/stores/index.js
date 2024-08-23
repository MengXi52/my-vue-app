import { defineStore } from 'pinia'
import { ref } from 'vue'


function initState(){
    return{
        isCollapse:false,
    }
}
export const useAllDateStore = defineStore('allcounter', () => {
    //ref   state属性
    //computed   getters 
    //function   actions
    const state = ref(initState());


    return { state};
  })