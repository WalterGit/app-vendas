export async function login({
  username,
  password,
}: {
  username: User['username']
  password: string
}) {
  const user = await verifyUserPassword({ username }, password);
  if (!user) return null;

  // Supondo que você tenha uma função para gerar refresh tokens
  const refreshToken = generateRefreshToken();

  const session = await prisma.session.create({
    data: {
      expirationDate: getSessionExpirationDate(),
      userId: user.id,
      refreshToken, // Salva o refresh token gerado na sessão
    },
    select: { id: true, expirationDate: true, userId: true },
  });

  return session;
}