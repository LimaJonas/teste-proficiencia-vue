<template>
    <div style="overflow-x:auto;">
        <table>
            <thead>
                <tr>
                    <td>Nome completo</td>
                    <td>Email</td>
                    <td>Telefone</td>
                    <td>Pessoa Jurídica?</td>
                    <td>Ação</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id">
                    <td>{{user.nome}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.telefone}}</td>
                    <td>{{user.pj}}</td>
                    <td>
                        {{ user.index }}
                        <button class="editar" v-on:click="editarDado(index)">Editar</button>
                        <button class="remover" v-on:click="removerDado(user, index)">Apagar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['users'],
    name: "Tabela",
    methods: {
        editarDado(index){
            this.$router.push({
                name: "Editar",
                params: { array: this.users, id: index }
            });
        },
        removerDado(user, index){
            if(this.users[index] === user) { 
                this.users.splice(index, 1)
            }
        },
    }
}
</script>

<style>
table, td, th {  
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #ddd;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 15px;
}

.editar {
  background-color: #ffeb3b;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.remover {
  background-color: #f44336;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>