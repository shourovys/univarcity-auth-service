import mongoose, { Schema } from 'mongoose'
import { IUser, IUserModel } from './users.interface'

const UserSchema: Schema<IUser, IUserModel> = new Schema(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const UserModel = mongoose.model<IUser, IUserModel>('User', UserSchema)

export default UserModel
