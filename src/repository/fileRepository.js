import { prisma } from "../database/prismaClient";
class File {
  constructor(name, path) {
    this.name = name;
    this.path = path;
  }

  async create() {
    try {
      // Create file in database
    } catch (error) {
      return error;
    }
  }

  async update() {
    try {
      // Update file in database
    } catch (error) {
      return error;
    }
  }

  async delete() {
    try {
      // Delete file from database
    } catch (error) {
      return error;
    }
  }

  async read() {
    try {
      // Read file from database
    } catch (error) {
      return error;
    }
  }
}

export default File;