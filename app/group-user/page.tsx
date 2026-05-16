import { MoveLeft } from "lucide-react";

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users", {
    cache: "no-store",
  });
 if (!res.ok) throw new Error("API failed");
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="p-6"> <a href="/" className="p-2 px-2 text-gray-500 font-bold flex gap-2"><MoveLeft /> Back to main</a>
      <h1 className="text-2xl font-bold">Department Summary</h1>
    <div className="flex gap-2 flex-wrap">
      {Object.entries(data).map(([dept, value]: any) => (
        <div key={dept} className="border p-4 mt-4">
          <h2 className="font-bold">{dept}</h2>

          <p>Male: {value.male}</p>
          <p>Female: {value.female}</p>
          <p>Age Range: {value.ageRange}</p>

          <h3 className="mt-2">Hair Colors:</h3>
          <pre>{JSON.stringify(value.hair, null, 2)}</pre>

          <h3 className="mt-2">Users:</h3>
          <pre>{JSON.stringify(value.addressUser, null, 2)}</pre>
        </div>
      ))}
      </div>
    </div>
  );
}