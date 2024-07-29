"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addPost(data: FormData) {
  const username = data.get("username") as string;
  await prisma.username.create({
    data: {
      name: username,
    },
  });

  revalidatePath("/");
}

export async function getPost() {
  const data = await prisma.username.findMany();
  return data;
}
