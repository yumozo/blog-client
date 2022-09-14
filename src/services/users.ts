import http from '../http-common'

class UsersDataService {
  getAll() {
    return http.get(`/users`)
  }

  get(id: number) {
    return http.get(`/users/${id}`)
  }

  find(query: any, by = 'filter') {
    return http.get(`/users?${by}=${query}`)
  }

  createUser(data: object) {
    return http.post('/users/new', data)
  }

  updateUser(data: object) {
    return http.put('/users/edit', data)
  }

  deleteUser(id: number, userId: number) {
    return http.delete(`/users/delete?id=${id}`, {
      data: {
        user_id: userId
      }
    })
  }
}

export default new UsersDataService()
