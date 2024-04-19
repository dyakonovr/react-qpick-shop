import { DataTypes } from "sequelize";

export const customCreatedAndUpdatedFields = {
  createdAt: "created_at",
  updatedAt: "updated_at"
};

export const idSettingsObject = { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true };