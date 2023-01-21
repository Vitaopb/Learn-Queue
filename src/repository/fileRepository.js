import { prisma } from "database/prismaClient";
class File {
  async create(name, path) {
    try {
      return await prisma.file.create({
        data: {
          name,
          path
        },
      });
    } catch (error) {
      return error;
    }
  }

  async update(id, name, path) {
    try {
      return await prisma.file.update({
        where: {
          id: id,
        },
        data: {
          name,
          path,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await prisma.file.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async read(id) {
    try {
      return await prisma.file.findUnique({
        where: {
          id: id,
        }
      });
    } catch (error) {
      return error;
    }
  }
}

export default File;
