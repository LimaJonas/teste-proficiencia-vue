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
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.nome}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.telefone}}</td>
                    <td>{{user.pj}}</td>
                    <td>
                        <button>Editar</button>
                        <button>Apagar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['users'],
}
</script>

<style>
table, th, td {
    border: 1px solid black;
}
</style>