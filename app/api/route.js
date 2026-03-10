let users = [];
// let username = [];
// let email = [];
// let password = [];

export async function GET() {
  return Response.json(users);
}

export async function POST(request) {
  const body = await request.json();

  const user = {
    id: Date.now(),
    username: body.username,
    email: body.email,
    password: body.password
  };

  users.push(user);

  return Response.json({
    message: "User Added",
    user
  });
}