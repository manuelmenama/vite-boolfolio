import { reactive } from "vue";

export const store = reactive({

  projects:[],
  pageLinks:[],
  types:[],
  tecnologies:[],
  currentPage: '',
  // flag per il controllo del loader
  isLoading: true

});