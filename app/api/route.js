let users = [];

// GET → return all users
export async function GET() {
  return Response.json(users);
}

// POST → add new user
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

{/* not in used right now */}

// PUT → update existing user
// export async function PUT(request) {
//   const body = await request.json();

//   const userIndex = users.findIndex(
//     (user) => user.id === body.id
//   );

//   if (userIndex === -1) {
//     return Response.json({
//       message: "User not found"
//     });
//   }

//   users[userIndex] = {
//     ...users[userIndex],
//     username: body.username,
//     email: body.email,
//     password: body.password
//   };

//   return Response.json({
//     message: "User Updated",
//     user: users[userIndex]
//   });
// }