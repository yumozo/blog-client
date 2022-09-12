import http from '../http-common'

class PostsDataService {
  getAll(page = 0) {
    return http.get(`/posts/?page=${page}`)
  }

  get(id: number) {
    return http.get(`/posts//${id}`)
  }

  find(query: any, by = 'title', page = 0) {
    return http.get(`/posts/?${by}=${query}&page=${page}`)
  }

  createPost(data: object) {
    return http.post('/posts/new', data)
  }

  updatePost(data: object) {
    return http.put('/posts/edit', data)
  }

  deletePost(id: number, postId: number) {
    return http.delete(`/posts/delete?id=${id}`, {
      data: {
        post_id: postId
      }
    })
  }
}

export default new PostsDataService()
