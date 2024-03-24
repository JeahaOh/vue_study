<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt | formatDate }}
      <i class="icon ion-md-create" @click="routeEditpage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>
<script>
import { deletePosts } from '@/api/posts.js';

export default {
  props: {
    postItem: {
      type: Object,
      require: true,
    },
  },
  methods: {
    async deleteItem() {
      console.group('deleteItem');
      try {
        if (!confirm('You want to delete. Are You Sure?')) return;

        console.log('id : ', this.postItem._id);
        await deletePosts(this.postItem._id);
        this.$emit('refresh');
      } catch (err) {
        console.error(err);
      } finally {
        console.groupEnd('deleteItem');
      }
    },
    routeEditpage() {
      this.$router.push(`/post/${this.postItem._id}`);
    },
  },
};
</script>
