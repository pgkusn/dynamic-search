<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2>Vue.js實作動態搜尋功能</h2>
                <hr/>
            </div>
        </div>
        <div class="row form-group">
            <div class="col sm-1">
                <label>關鍵字  </label>
            </div>
            <div class="col-sm-11">
                <input class="form-control" placeholder="輸入過濾字串" v-model="searchText"/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <h5>共有 {{ filterPosts.length }} 篇文章</h5>
            </div>
        </div>
        <div class="row">
            <Postbox
                class="col-md-6 col-lg-4"
                v-for="post in filterPosts"
                :key="post.id"
                :post="post"
            >
            </Postbox>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import Postbox from '@/components/Postbox.vue';
import useData from '@/composition/data';

export default {
    name: 'App',
    components: {
        Postbox
    },
    setup () {
        const searchText = ref('');
        const { posts } = useData();
        const filterPosts = computed(() => {
            const regex = new RegExp(searchText.value, 'gi');
            return posts.value.filter(post => {
                let matchFlag = false;
                for (const key of Object.keys(post)) {
                    if (regex.test(post[key])) {
                        matchFlag = true;
                    }
                }
                return matchFlag;
            })
                .map(post => {
                    const newPost = JSON.parse(JSON.stringify(post));
                    newPost.description = newPost.description.substr(0, 90) + '...';
                    return newPost;
                })
                .map(post => {
                    if (!searchText.value.length) return post;
                    const newPost = JSON.parse(JSON.stringify(post));
                    for (const key of Object.keys(newPost)) {
                        const value = newPost[key];
                        const result = regex.exec(value);
                        if (result) {
                            newPost[key] = value.replace(regex, `<span class="highlight">${result[0]}</span>`);
                        }
                    }
                    return newPost;
                });
        });

        return {
            searchText,
            filterPosts
        };
    }
};
</script>

<style>
html, body {
  padding: 20px 10px;
}
h4 {
  line-height: 35px;
  letter-spacing: 1px;
  min-height: 45px;
  font-size: 20px;
  font-weight: 600;
}
</style>
