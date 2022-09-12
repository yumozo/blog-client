import http from '../http-common'

class UsersDataService {
  getAll(page = 0) {
    return http.get(`/users/?page=${page}`)
  }

  get(id: number) {
    return http.get(`/users/${id}`)
  }

  find(query: any, by = 'name', page = 0) {
    return http.get(`/users/?${by}=${query}&page=${page}`)
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
