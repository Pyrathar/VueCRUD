// Create.vue

<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Create Issue</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addIssue">
                    <div class="form-group">
                        <label>Title:</label>
                        <input type="text" class="form-control" v-model="issues.name"/>
                    </div>
                    <div class="form-group">
                        <label>Type:</label>
                        <input type="text" class="form-control" v-model="issues.type"/>
                    </div>
                    <div class="form-group">
                        <label>Description:</label>
                        <input type="text" class="form-control" v-model="issues.description"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
      name: 'addIssue'
  },
  data() {
      return {
          issues: {}
      }
  },
  methods: {
      addIssue() {
           let uri = 'http://localhost:4000/issues/add';
            this.axios.post(uri, this.issues).then((response) => {
                console.log(response.data)
            });
        }
    }
}
</script>
