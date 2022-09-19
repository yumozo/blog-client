import type { User } from './user'

import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import UsersDataService from 'services/users'

const usersDataService = UsersDataService

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username } = await req.body

  try {
    // let name: string
    // await usersDataService.find(username)
    //   .then((res: any) => {
    //     name = res.data[0].name
    //   })
    //   .catch((error: any) => {
    //     console.error(error)
    //   })

    const {
      data: name
    } = await usersDataService.getByName(username.toLowerCase())

    const user = { isLoggedIn: true, name } as User
    req.session.user = user
    await req.session.save()
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions)