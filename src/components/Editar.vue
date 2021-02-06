<template>
    <div>
        <h2>Editar</h2>
        <form action method v-on:submit.prevent="atualizaDado">
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
            Atualizar
            </button>

        <router-link
            tag="button"
            class="novo"
            :to="{ name: 'Cadastro', params: {array: this.users} }"
        >
            Novo
          </router-link>   
        </form>
        <Tabela :users="users" />
    </div>
</template>

<script>    
import Tabela from './Tabela.vue';

export default {
    props: ['array'],
    name: "Editar",
    components: {
        Tabela,
    },
    data() {
        return{
            users: this.$route.params.array,
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
        },
        primeiroNome: {
            get: function () {
                var nomes = this.users[this.$route.params.id].nome.split(' ')
                return nomes[0]
            },
        },
        ultimoNome: {
             get: function () {
                var nomes = this.users[this.$route.params.id].nome.split(' ')
                return nomes[nomes.length - 1]
            },
        }
    },
    mounted() {
        this.nome = this.primeiroNome,
        this.sobrenome = this.ultimoNome,
        this.email = this.users[this.$route.params.id].email,
        this.telefone = this.users[this.$route.params.id].telefone,
        this.pj = this.users[this.$route.params.id].pj,
        this.cpf = this.users[this.$route.params.id].cpf,
        this.cnpj = this.users[this.$route.params.id].cnpj
    },
    methods: {
        atualizaDado(){
            for (var i = 0; i < this.users.length; i++) {
                if (i == this.$route.params.id) {
                    this.users[i].nome = this.nomeCompleto;
                    this.users[i].email = this.email;
                    this.users[i].telefone = this.telefone;
                    this.users[i].pj = this.pj;
                    this.users[i].cpf = this.cpf;
                    this.users[i].cnpj = this.cnpj;
                }
            }

            this.$router.push({
                name: "Cadastro",
                params: { array: this.users }
            });
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

.novo {
    width: 100%;
    background-color: #03a9f4;
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