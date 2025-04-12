import prisma from "@/utils/prisma";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { email, name, password } = body;

  if (!email) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email is required",
    });
  }

  try {
    const user = await prisma.user.create({
      data: { name, email, password },
    });

    return {
      success: true,
      user,
    };
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error creating user",
    });
  }
});
