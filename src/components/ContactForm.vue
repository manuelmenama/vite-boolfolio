<script>

import axios from 'axios';

import { baseUrl } from '../data/data';

export default {
  name: 'ContactForm',
  data() {
    return{
      baseUrl,
      object: '',
      email: '',
      subject: '',
      errors: {}
    }
  },
  methods:{
    sendForm(){
      const data = {
        object: this.object,
        email: this.email,
        subject: this.subject
      }
      
      axios.post(`${baseUrl}contacts/`, data)
        .then(result=>{
          if(!result.data.success){
            this.errors = result.data.errors;
            console.log(this.errors);
          }
        })
    }
  }
}
</script>

<template>

  <form @submit.prevent="sendForm()">
    <div>
      <input v-model.trim="object" type="text" placeholder="Oggetto della email..." name="">
      <p class="error"></p>
    </div>
    <div>
      <input v-model.trim="email" type="text" placeholder="Email: tuaemail@email.com" name="">
      <p class="error"></p>

    </div>
    <div>
      <textarea v-model.trim="subject" cols="30" rows="10">Testo della email...</textarea>
      <p class="error"></p>

    </div>
    <button type="submit">Invia</button>
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
  }
}

</style>