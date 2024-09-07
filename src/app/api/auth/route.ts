import { decodeJWT } from "@/lib/utils";

type PayloadJWT = {
  iat: number,
  exp: number,
  userId: number,
  tokenType: string
}

export async function POST(request: Request) {
  const res = await request.json();
  const token = res.token
  if (!token) {
    return Response.json({ message: 'Không nhận được session token' }, {
      status: 401
    });
  }
  const tokenPayload = decodeJWT<PayloadJWT>(token)
  const expireAt = new Date(tokenPayload.exp * 1000).toUTCString()
  return Response.json({ data: {
    token: token
  } }, {
    status: 200,
    headers: {
      'Set-Cookie': `sessionToken=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Expires=${expireAt}`,
    }
  });
}
