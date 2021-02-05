<template>
    <div>
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
                        <button v-on:click="editarDado(index)">Editar</button>
                        <button v-on:click="removerDado(user, index)">Apagar</button>
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
table, th, td {
    border: 1px solid black;
}
</style>