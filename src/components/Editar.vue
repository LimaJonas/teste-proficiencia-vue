<template>
    <div>
        <h2>Editar</h2>
        <form action method v-on:submit.prevent="atualizaDado">
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
            <span>Atualizar</span>
          </button>

          <router-link
            tag="button"
            class="btn btn-success btn-block mt-3"
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