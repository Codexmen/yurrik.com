export default async function usePosts(key = 'posts', limit = 10) {
    return useAsyncData('posts-list',
    () => queryContent()
        .only(['title','_path', 'summary','length','order', 'date'])
        .sort({'order': -1})
        .limit(limit)
        .find()
)
}
