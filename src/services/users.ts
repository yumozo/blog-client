import http from '../http-common'

class UsersDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`)
  }

  get(id: number) {
    return http.get(`/id/${id}`)
  }

  find(query: any, by = 'name', page = 0) {
    return http.get(`?${by}=${query}&page=${page}`)
  }

  createUser(data: object) {
    return http.post('/new', data)
  }

  updateUser(data: object) {
    return http.put('/edit', data)
  }

  deleteUser(id: number, userId: number) {
    return http.delete(`/delete?id=${id}`, {
      data: {
        user_id: userId
      }
    })
  }
}

export default new UsersDataService()
