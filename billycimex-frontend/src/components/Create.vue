<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Issue</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Title of Issue:</label>
                        <input type="text" class="form-control" v-model="issue.name"/>
                    </div>
                    <div class="form-group">
                        <label>Issue description:</label>
                        <input type="text" class="form-control" v-model="issue.price"/>
                    </div>

                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add issue"/>
                    </div>
                    <select v-model="selected">
                     <option v-for="option in options" v-bind:value="option.value">
                     {{ option.text }}
                      </option>
                    </select>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
      name: 'AddItem'
  },
  data() {
      return {
          issue: {},
          options: {"Option":"new"},
          selected: {"yes":"true"},
      }

  },
  methods: {
      addItem() {
          let uri = 'http://localhost:4000/issue/add';
          this.issue.status = 'existing'
          this.axios.post(uri, this.issue).then((response) => {
            console.log(response.data)
          });
        }
    }
}
</script>