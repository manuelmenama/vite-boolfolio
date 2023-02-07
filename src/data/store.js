import { reactive } from "vue";

export const store = reactive({

  projects:[],
  pageLinks:[],
  types:[],
  tecnologies:[],
  showPaginator: true,
  currentPage: ''

});