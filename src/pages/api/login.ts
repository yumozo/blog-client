import type { User } from './user'

import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import UsersDataService from 'services/users'
import { useState } from 'react'

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username } = await req.body
  // const [user, setUser] = useState(
  //   {
  //     isLoggedIn: false,
  //     info: {},
  //     username: '',
  //   } //as User | undefined
  // )

  try {
    // const {
    //   data: name
    // } = await usersDataService.getByName(username.toLowerCase())
    UsersDataService.getByName('jegor')/*(username.toLowerCase())*/
      .then(async (response: any) => {
        console.log('///')
        console.log(response.data)
        console.log('///')
        const {
          user_id,
          user_name,
          email,
          password_hash,
          registration_date,
          last_login,
          bio,
          login,
        } = response.data
        const user = {
          isLoggedIn: true,
          // info: res.data,
          // info: {
          //   bio: response.data.bio,
          //   email: response.data.email
          // },
          // ---
          // user_id,
          // user_name,
          // email,
          // password_hash,
          // registration_date,
          // last_login,
          // bio,
          // login,
          ...response.data[0]
          // username: user_name
        } as User
        req.session.user = user
        await req.session.save()
        res.json(user);
      })
      .catch((error: any) => {
        console.error(error)
      })
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions)