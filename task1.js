const DB = {
    collections: {
      posts: {
        posts_1: {
          name: 'Post 1',
          text: 'Some text 1'
        },
        posts_2: {
          name: 'Post 2',
          text: 'Some text 2'
        }
      },
      comments: {
        comments_1: {
          postId: 'post_1',
          text: 'Comment 1'
        },
        comments_2: {
          postId: 'post_1',
          text: 'Comment 2'
        }
      }
    }
  };
  
const useCollection = (coll) => {
    const type = DB.collections[coll];

    return function(data){
        if(!type[data]) {
            return null;
        }
       return type[data];
    }

};

const getPostItem = useCollection('posts');

const item1 = getPostItem('posts_1');
console.log(item1);
/*
{
  id: 'posts_1',
  name: 'Post 1',
  text: 'Some text 1'
}
*/

const notFoundItem = getPostItem('posts_4');
console.log(notFoundItem);
 /*
null
*/

