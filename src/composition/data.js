import { ref } from 'vue';
import axios from 'axios';

export default () => {
    const posts = ref([]);

    const postPromise = axios('https://awiclass.monoame.com/api/command.php?type=get&name=post');
    const catePromise = axios('https://awiclass.monoame.com/api/command.php?type=get&name=cata');
    Promise.all([postPromise, catePromise])
        .then(res => {
            const postsData = res[0].data;
            const catesData = res[1].data;
            posts.value = postsData.map((post, index) => {
                const filterCate = catesData.filter(cate => cate.tag === post.tag);
                return {
                    cate: filterCate[0].name,
                    cover: `https://picsum.photos/508/200?random=${index}`,
                    name_short: post.name_short,
                    title: post.title,
                    description: post.description.trim()
                };
            });
        })
        .catch(error => {
            console.error(error.message);
        });

    return {
        posts
    };
};