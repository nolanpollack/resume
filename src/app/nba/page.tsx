import Link from "next/link";
import giannis from "./assets/giannis.png";
import Image from "next/image";
import { ReactNode } from "react";

const url: String = "https://www.balldontlie.io/api/v1/";

function Header({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-5xl font-bold text-gray-950 drop-shadow-lg dark:text-slate-100">
      {children}
    </h1>
  );
}

function CenterButton({ children }: { children: ReactNode }) {
  return (
    <div className="mx-4 flex justify-center rounded-xl px-16 py-5 shadow-lg transition dark:bg-slate-700 dark:hover:bg-slate-800">
      {children}
    </div>
  );
}

export default async function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <div className="flex min-h-screen pb-10 pt-20">
        <div className="flex items-end justify-center self-end">
          <CenterButton>
            <Header>Games</Header>
          </CenterButton>
          <div className="transition hover:scale-105">
            <Image
              className=""
              src={giannis}
              alt={"Giannis Antetokounpo"}
              width={400}
              height={400}
            />
            <CenterButton>
              <Header>Players</Header>
            </CenterButton>
          </div>
          <CenterButton>
            <Header>Teams</Header>
          </CenterButton>
        </div>
      </div>

      {/*<Link href={"/nba/teams"} className="text-black">*/}
      {/*  Teams*/}
      {/*</Link>*/}
    </main>
  );
}
