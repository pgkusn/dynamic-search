<template>
    <div class="postbox">
        <div class="postbox_inner">
            <div class="img" :style="{ 'background-image': `url(${post.cover})` }"></div>
            <h6 v-html="`[${post.cate}] ${post.name_short}`"></h6>
            <h4 v-html="post.title"></h4>
            <p v-html="post.description"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Postbox',
    props: {
        post: {
            type: Object,
            default: () => {}
        }
    }
};
</script>

<style scoped>
.postbox {
  padding: 15px;
  margin-bottom: 30px;
}
.postbox_inner {
  border: solid 1px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
}
.postbox_inner * {
  margin-bottom: 10px;
}
.postbox_inner .img {
  height: 200px;
  background-size: cover;
  background-position: center center;
  transition: 0.5s;
  margin-left: -20px;
  margin-right: -20px;
  margin-top: -10px;
  margin-bottom: 20px;
}
::v-deep(.highlight) {
  background-color: red;
  color: white;
  padding: 0px 5px;
}
</style>