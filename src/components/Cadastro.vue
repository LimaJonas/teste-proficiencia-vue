<template>
    <div>
        <h2>Dados</h2>
        <form action method v-on:submit.prevent="salvarDados">
            <label>Nome:</label>
            <input
                v-model="user.nome"
                type="text"
                class="form-control"
                placeholder="Ex: João"
            />
            <br>
            <label>Sobrenome:</label>
            <input
                v-model="user.sobrenome"
                type="text"
                class="form-control"
                placeholder="Ex: Silva"
            />
            <br>
            <label>Email:</label>
            <input
                v-model="user.email"
                type="text"
                class="form-control"
                placeholder="Ex: email@example.com"
            />
            <br>
            <label>Telefone:</label>
            <input
                v-model="user.telefone"
                type="text"
                class="form-control"
                placeholder="Ex: (XX) XXXXX-XXXX"
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
                v-model="user.cpf"
                v-if="!pj"
            />
            <label v-if="pj">CPNJ:</label>
            <input
                type="text"
                class="form-control"
                placeholder="Ex:  XX.XXX.XXX/0001-XX"
                v-model="user.cnpj"
                v-if="pj"
            />
            <br>

            <button>
            <span>Salvar</span>
          </button>
        </form>
    </div>
</template>

<script>
export default {
  name: "Cadastro",
  data() {
    return{
      users: [],
      pj: false,
      user: {
        nome: null,
        sobrenome: null,
        email: null,
        cnpj: null,
        cpf: null,
      }
    }
  },
  methods: {
    salvarDados(){
      this.users.push({
        nome: this.user.nome + ' ' + this.user.sobrenome,
        email: this.user.email,
        telefone: this.user.telefone,
        cnpj: this.user.cnpj,
        cpf: this.user.cpf,
      });
      console.log(this.users);
    }
  }
}
</script>