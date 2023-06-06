import { Document, Model } from 'mongoose'

export type IUser = {
  id: string
  role: string
  password: string
} & Document

export type IUserModel = Model<IUser, object>
