<template>
    <div>
        <h1>Bills</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>Rating</td>
                <td>Description</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="issue in issues" :key="issue._id" v-on:click="goTo(issue)">
                    <td>{{ issue.name }}</td>
                    <td>{{ issue.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                issues: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            goTo(issue){
              this.$router.push({
                name: 'View',
                params: {id: issue._id}
               })
            },
            fetchItems()
            {
              let uri = 'http://localhost:4000/issues/bills';
              this.axios.get(uri).then((response) => {
                  this.issues = response.data;
              });
            }
        }
    }
</script>
