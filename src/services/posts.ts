import http from '../http-common'

class PostsDataService {
  getAll() {
    return http.get(`/posts`)
  }

  get(id: number) {
    return http.get(`/posts/${id}`)
  }

  find(query: any, by = 'filter') {
    return http.get(`/posts?${by}=${query}`)
  }

  createPost(data: object) {
    return http.post('/posts/', data)
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
