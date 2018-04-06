const trendingPosts = [
    {
        id: 1,
        author: 'jeff',
        verified: true,
        channel: 'OnStellar',
        timePosted: '10 minutes',
        views: 123,
        postPhoto: require('@/assets/images/ink-water-lg.jpg'),
        postTitle: 'Ink in Water',
        postCategory: 'Metamorphosis',
        tokens: 123.45,
        comments: 123
    },
    {
        id: 2,
        author: 'bob',
        verified: false,
        channel: 'OnStellar',
        timePosted: '15 minutes',
        views: 34,
        postPhoto: require('@/assets/images/ground-sm.jpg'),
        postTitle: 'Sticking To The Ground',
        postCategory: 'UFO',
        tokens: 23.12,
        comments: 5
    },
    {
        id: 3,
        author: 'tony',
        verified: true,
        channel: 'OnStellar',
        timePosted: '25 minutes',
        views: 100,
        postPhoto: require('@/assets/images/hallway-md.jpeg'),
        postTitle: 'Spatial Vision',
        postCategory: 'Metaphysics',
        tokens: 5.10,
        comments: 2
    }
]

export function getTrendingPosts(cb) {
    setTimeout(() => {
        if (trendingPosts.length > 0) {
            cb(null, trendingPosts);
        } else {
            cb(new Error('Trending Posts not found'));
        }
    }, 100);
}