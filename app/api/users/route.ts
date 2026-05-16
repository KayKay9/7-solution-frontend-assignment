import { transformUsers } from "@/lib/transformUsers";


export async function GET() {
  const res = await fetch("https://dummyjson.com/users?limit=0");
  const data = await res.json();
  const result = transformUsers(data.users);


  return Response.json(result);
}