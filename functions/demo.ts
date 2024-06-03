export async function onRequest(context) {
  // Create a prepared statement with our query
  const ps = context.env.NORTHWIND_DB.prepare("SELECT * from users");
  const data = await ps.first();

  return Response.json(data);
}
