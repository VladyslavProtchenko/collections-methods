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

    if(!DB.collections[coll]) {
      DB.collections[coll] = {};
      console.log('we haven\'nt this collection, but it was created');
    }
    
    return {
      get: (data) => {

        if(!type[data]) { return null };

        type[data].id = data;

        return type[data];

      },

      create: (data) => {

          const id = coll+'_'+(Object.keys(type).length+1);

          type[id]= data;

          return;
      },

      deleteOne: (data) => {
          return delete type[data];
      },

      edit: (item,data) =>{
        return type[item] = data;
      }

    }

};


const collection = useCollection('posts');


console.log(DB.collections);



