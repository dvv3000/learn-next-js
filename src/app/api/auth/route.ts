export async function POST(request: Request) {
  const res = await request.json();
  const token = res.token
  if (!token) {
    return Response.json({ message: 'Không nhận được session token' }, {
      status: 401
    });
  }
  return Response.json({ data: {
    token: token
  } }, {
    status: 200,
    headers: {
      'Set-Cookie': `sessionToken=${token}; Path=/; HttpOnly; Secure; SameSite=strict`,
    }
  });
}
