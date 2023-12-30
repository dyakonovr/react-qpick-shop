import { DataTypes } from "sequelize";

export const customCreatedAndUpdatedFields = {
  createdAt: "created_at",
  updatedAt: "updated_at"
};

export const idSettingsObj = { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true };