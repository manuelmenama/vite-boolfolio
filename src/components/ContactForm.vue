<script>

import axios from 'axios';

import { baseUrl } from '../data/data';

export default {
  name: 'ContactForm',
  data() {
    return{
      baseUrl,
      formObject: '',
      formEmail: '',
      formSubject: '',
      errors: {},
      isLoading: false
    }
  },
  methods:{
    sendForm(){
      this.isLoading = true;
      const data = {
        name: this.formObject,
        email: this.formEmail,
        subject: this.formSubject
      }
      console.log(data);
      axios.post(`${baseUrl}contacts`, data)
        .then(result=>{
          this.isLoading = false;

          if(!result.data.success){
            this.errors = result.data.errors; 
            console.log(this.errors);
          }else{
            this.formObject = '';
            this.formEmail = '';
            this.formSubject = '';
            this.errors = {};
          }
        });
    }
  }
}
</script>

<template>

  <form @submit.prevent="sendForm()">
    <div>
      <input v-model.trim="formObject" type="text" placeholder="Oggetto della email..." :class="{'is-invalid': errors.name}">
      <p v-for="(error, index) in errors.name" :key="'name'+index" :class="{'error': errors.name}">{{ error }}{{ errors.name }}</p>
    </div>
    <div>
      <input v-model.trim="formEmail" type="text" placeholder="Email: tuaemail@email.com" :class="{'is-invalid': errors.email}">
      <p v-for="(error, index) in errors.email" :key="'email'+index" class="error">{{ error }}</p>

    </div>
    <div>
      <textarea v-model.trim="formSubject" cols="30" rows="10" :class="{'is-invalid': errors.subject}">Testo della email...</textarea>
      <p v-for="(error, index) in errors.subject" :key="'subj'+index" class="error">{{ error }}</p>

    </div>
    <button type="submit" :disabled="isLoading">{{ isLoading ? 'Invio in corso...' : 'Invia' }}</button>
  </form>
  
</template>


<style lang="scss" scoped>

form{
  width: 100%;
  input{
  width: 50%;
  padding: 10px 5px;
  border-radius: 5px;
  background-color: beige;
  border: 0;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  }
  button{
    cursor: pointer;
    padding: 5px 10px;
    border: 0;
    border-radius: 5px;
    background-color: beige;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
  textarea{
    width: 50%;
    padding: 10px 5px;
    border-radius: 5px;
    background-color: beige;
    border: 0;
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;

  }
  .is-invalid{
    border: 1px solid red;
  }
  .error{
    font-size: .8rem;
    color: red;
    margin-bottom: 1rem;
  }
}

</style>