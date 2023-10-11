import mongoose from "mongoose";

const Role = mongoose.Schema({
  role_code: {
    type: String,
    required: true,
  },
  role_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

const RoleModel = mongoose.model("Role", Role);

const rolesToCreate = [
  {
    role_code: "ADMIN",
    role_name: "Quản trị viên",
    description: "Quản trị viên",
  },
  {
    role_code: "USER",
    role_name: "Thành viên",
    description: "Thành viên",
  },
];

export async function createRoles() {
  try {
    const createdRoles = await RoleModel.insertMany(rolesToCreate);
    console.log("Roles created:", createdRoles);
  } catch (error) {
    console.log("Tạo không thành công roles: " + error);
  }
}
