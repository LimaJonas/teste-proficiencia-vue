<template>
    <div>
        <h2>Dados</h2>
        <form action method v-on:submit.prevent="salvarDados">
              <label>Nome:</label>
              <input
                  v-model="nome"
                  type="text"
                  placeholder="Ex: João"
                  required
              />
              <label>Sobrenome:</label>
              <input
                  v-model="sobrenome"
                  type="text"
                  placeholder="Ex: Silva"
                  required
              />
              <label>Email:</label>
              <input
                  v-model="email"
                  type="text"
                  placeholder="Ex: email@example.com"
                  required
              />
              <label>Telefone:</label>
              <input
                  v-model="telefone"
                  type="text"
                  placeholder="Ex: (XX) XXXXX-XXXX"
                  required
              />
              <input 
                  v-model="pj" 
                  type="checkbox" 
                  id="pj" 
                  >
              <label for="pj">Pessoa Jurídica</label>
              <br>
              <label v-if="!pj">CPF:</label>
              <input
                  type="text"
                  id="cpf"
                  placeholder="Ex: XXX.XXX.XXX-XX"
                  v-model="cpf"
                  v-if="!pj"
              />
              <label v-if="pj">CPNJ:</label>
              <input
                  type="text"
                  placeholder="Ex:  XX.XXX.XXX/0001-XX"
                  v-model="cnpj"
                  v-if="pj"
              />
              <button type="submit">
                Salvar
              </button>
        </form>
        <Tabela :users="users" />
    </div>
</template>

<script>
import Tabela from './Tabela.vue';

export default {
  name: "Cadastro",
  components: {
    Tabela,
  },
  data() {
    return{
      users: [],
      nome: null,
      sobrenome: null,
      telefone: null,
      email: null,
      cnpj: null,
      cpf: null,
      pj: false,
    }
  },
  computed: {
    nomeCompleto: {
      get: function (){
        return this.nome + ' ' + this.sobrenome
      },
    }
  },
  mounted(){
      if(this.$route.params.array){
        this.users = this.$route.params.array
      } 
  },
  methods: {
    salvarDados(){
      this.users.push({
        nome: this.nomeCompleto,
        email: this.email,
        telefone: this.telefone,
        cnpj: this.cnpj,
        cpf: this.cpf,
        pj: this.pj,
      });

      this.nome = '';
      this.sobrenome = '';
      this.email = '';
      this.telefone = '';
      this.cpf = '';
      this.cnpj = '';
      this.pj = false;
    }
  }
}
</script>

<style scoped>
label {
  font-family: Arial, Helvetica, sans-serif;
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 2px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>