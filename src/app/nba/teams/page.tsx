const api_key = "25ab2b98-3916-4464-9854-79ea37339b10";

function Header({ children }: { children: any }) {
  return (
    <h1 className="text-xl text-gray-800 drop-shadow-2xl dark:text-slate-300">
      {children}
    </h1>
  );
}

export default async function Teams() {
  const res = await fetch("https://api.balldontlie.io/v1/teams", {
    method: "GET",
    headers: {
      Authorization: api_key,
    },
  });

  const teams = await res.json();

  return (
    <main className="min-h-screen dark:bg-slate-900">
      <div className="grid grid-cols-3">
        {teams.data.map((team: any) => (
          <div
            key={team.id}
            className="m-2 rounded-lg bg-gray-200 p-2 shadow-lg dark:bg-slate-800"
          >
            <Header>{team.full_name}</Header>
            <p>{team.abbreviation}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
