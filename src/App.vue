<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'Create' }" class="nav-link">Invoices</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'ListBills' }" class="nav-link">Bills</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Index' }" class="nav-link">Quotes</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Index' }" class="nav-link">Bank Sync</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Index' }" class="nav-link">Annual Report</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Index' }" class="nav-link">Settings</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'CreateIssue' }" class="nav-link">New Issue</router-link>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .gap {
      margin-top: 50px;
    }
</style>
