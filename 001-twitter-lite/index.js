console.log('Hey, guys!');
console.log('#Building CRUD (Create, Read, Update, Delete)');

// [ CRUD ] Basic JavaScript
const twitterLite = {
    users: [
        {
            username: 'clarkkent',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'clarkkent',
            content: 'My first tweet'
        }
    ],
};

// CREATE
function addPost(data) {
    twitterLite.posts.push({
        id: twitterLite.posts.length + 1,
        owner: data.owner,
        content: data.content
    });
}

addPost({ owner: 'clarkkent', content: 'Second tweet' }); 
addPost({ owner: 'clarkkent', content: 'Third tweet' }); 
// console.log(twitterLite.posts)

// READ
function listPosts() {
    return twitterLite.posts;
}

console.log(listPosts())

// UPDATE
function alterContentPost(id, newContent) {
    const postToBeUpdated = listPosts().find((post) => {
        return post.id === id;
    });

    console.log(postToBeUpdated)

    postToBeUpdated.content = newContent
}

alterContentPost(1, 'New post content')

console.log(listPosts())

// DELETE
function removePost(id) {
    const listOfUpdatedPosts = listPosts().filter((currentPost) => {
        return currentPost.id !== id;
    })

    twitterLite.posts = listOfUpdatedPosts;
}

removePost(1);
removePost(2);
removePost(3);

console.log(listPosts());
