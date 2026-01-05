import { computed, ref } from "vue"

const getPosts = () => {
    const showPosts = ref(true)
    const posts = ref([])
    const error = ref(null)
    const selectedTag = ref(null);

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/results')
            if (!data.ok) {
                throw Error('No data available, refresh')
            }
            posts.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    const allTags = () => {
        // Mendapatkan semua tags dari setiap post
        const tags = posts.value.reduce((allTags, post) => {
            post.tags.forEach(tag => {
                if (!allTags.includes(tag)) {
                    allTags.push(tag);
                }
            });
            return allTags;
        }, []);

        return tags;
    }

    const filteredPosts = computed(() => {
        if (!selectedTag.value) {
            return posts.value;
        } else {
            return posts.value.filter(post => post.tags.includes(selectedTag.value));
        }
    });

    const filterPostsByTag = tag => {
        console.log('ok');
        if (selectedTag.value === tag) {
            selectedTag.value = null; // Reset filter jika tag yang sama diklik dua kali
        } else {
            selectedTag.value = tag;
        }
    };
    
    return { posts, error, load, showPosts, allTags, filteredPosts, filterPostsByTag }
}

export default getPosts