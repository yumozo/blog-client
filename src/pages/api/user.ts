import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

export type User = {
  isLoggedIn: boolean;
  login: string;
  // info: Object;
  user_id: number,
  user_name: string,
  email: string,
  password_hash: string,
  registration_date: string,
  last_login: string,
  bio: string,
  // username: string;
  // avatarUrl: string
}

export default withIronSessionApiRoute(userRoute, sessionOptions)

async function userRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  if (req.session.user) {
    console.log({ ...req.session.user })
    res.json({
      ...req.session.user,
      isLoggedIn: true,
      user_name: 'jegor'
    })
  } else {
    res.json({
      isLoggedIn: false,
      user_name: 'NOT FOUND',
      user_id: -1,
      email: '',
      password_hash: '',
      registration_date: '',
      last_login: '',
      bio: 'user not found',
      login: '',
    })
  }
}