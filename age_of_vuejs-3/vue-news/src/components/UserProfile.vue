<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>

    <div class="user-description">
      <slot name="username">
        <router-link v-if="userInfo.user" :to="'/user/' + userInfo.user">
          {{ userInfo.user }}
        </router-link>
        <div v-else>
          {{ userInfo.id }}
        </div>
      </slot>
      <div class="time">
        {{ userInfo.time_ago || userInfo.created }}
        <span v-if="userInfo.points">{{ userInfo.points }} points</span>
      </div>
      <div v-if="userInfo.karma">
        <slot name="userKarma">{{ userInfo.karma }} karma</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
};
</script>

<style>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
