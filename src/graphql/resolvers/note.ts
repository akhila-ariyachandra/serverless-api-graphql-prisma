import { ApolloError } from "apollo-server-micro";
import { PrismaClient, Note } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Query: {
    getAllNotes: async (): Promise<Note[]> => {
      try {
        const notes = await prisma.note.findMany();

        return notes;
      } catch (error) {
        console.error("> getAllNotes error: ", error);

        throw new ApolloError("Error retrieving all notes");
      }
    },

    getNote: async (
      parent: any,
      { id }: { id: Note["id"] }
    ): Promise<Note | null> => {
      try {
        const note = await prisma.note.findUnique({
          where: {
            id,
          },
        });

        return note;
      } catch (error) {
        console.error("> getNote error: ", error);

        throw new ApolloError("Error retrieving note");
      }
    },
  },

  Mutation: {
    saveNote: async (
      parent: any,
      { title, content }: { title: Note["title"]; content: Note["content"] }
    ): Promise<Note> => {
      try {
        const note = await prisma.note.create({
          data: {
            title,
            content,
          },
        });

        return note;
      } catch (error) {
        console.error("> saveNote error: ", error);

        throw new ApolloError("Error creating note");
      }
    },

    deleteNote: async (
      parent: any,
      { id }: { id: Note["id"] }
    ): Promise<Note> => {
      try {
        const note = await prisma.note.delete({
          where: {
            id,
          },
        });

        return note;
      } catch (error) {
        console.error("> getNote error: ", error);

        throw new ApolloError("Error retrieving all notes");
      }
    },
  },
};
