import cuid from 'cuid';
export const cuidFn = cuid;


export default function postReducer(state = {posts: [], likes: [], comments: [], postComments: []}, action) {
  switch (action.type) {
    case 'ADD_POST':

      return {...state, posts: action.posts}

    case 'LIKE_POST':

      const filteredLikes = state.likes.filter(function (post) {
        return post.id !== action.post.id
      })

      if (!state.likes.includes(action.post)) {
        return {...state, likes: state.likes.concat(action.post)}
      } else {
        return {...state, likes: filteredLikes}
      }

    case 'ADD_COMMENT':

      const comment = {
        id: cuid(),
        text: action.comment,
        postId: action.post.id
      }

      if (!state.postComments.includes(action.post)) {
        return {...state, comments: [...state.comments, comment], postComments: [...state.postComments, action.post]}
      } else {
        return {...state, comments: [...state.comments, comment]}
      }

    case 'DELETE_COMMENT':

      const deletedComments = state.comments.filter(function (comment) {
        return comment.id !== action.comment.id
      })

      const filteredComments = state.comments.filter(function (comment) {
        return comment.postId === action.post.id
      })

        if (filteredComments.length > 1) {
          return {...state, comments: deletedComments}
        } else {
          const filteredPosts = state.postComments.filter(function (post) {
            return post.id !== action.post.id
          })
          return {...state, comments: deletedComments, postComments: filteredPosts}
        }


    default:
      return state
  }

}
