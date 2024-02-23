import Image from "next/image";

function Name() {
    return <h1 className="space-y-6 py-8 text-5xl text-gray-600">Nolan Pollack</h1>
}

function WhiteBox() {
    return <div className="relative bg-gray-200 px-6 py-3 shadow-xl shadow-gray-500/20 hover:ring-8 ring-gray-500 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <Name/>
    </div>

}

export default function Home() {
  return (
    <main className="bg-white min-h-screen flex-col items-center justify-between p-24">
        <WhiteBox/>
    </main>
  );
}
