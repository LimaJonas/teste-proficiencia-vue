<template>
    <div>
        <h2>Dados</h2>
        <form action method v-on:submit.prevent="salvarDados">
            <label>Nome:</label>
            <input
                v-model="nome"
                type="text"
                class="form-control"
                placeholder="Ex: João"
                required
            />
            <br>
            <label>Sobrenome:</label>
            <input
                v-model="sobrenome"
                type="text"
                class="form-control"
                placeholder="Ex: Silva"
                required
            />
            <br>
            <label>Email:</label>
            <input
                v-model="email"
                type="text"
                class="form-control"
                placeholder="Ex: email@example.com"
                required
            />
            <br>
            <label>Telefone:</label>
            <input
                v-model="telefone"
                type="text"
                class="form-control"
                placeholder="Ex: (XX) XXXXX-XXXX"
                required
            />
            <br>
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
                class="form-control"
                placeholder="Ex: XXX.XXX.XXX-XX"
                v-model="cpf"
                v-if="!pj"
            />
            <label v-if="pj">CPNJ:</label>
            <input
                type="text"
                class="form-control"
                placeholder="Ex:  XX.XXX.XXX/0001-XX"
                v-model="cnpj"
                v-if="pj"
            />
            <br>
            <button>
            <span>Salvar</span>
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