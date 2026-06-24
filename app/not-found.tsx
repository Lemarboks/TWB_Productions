import Link from "next/link";
export default function NotFound() { return <main className="grid min-h-screen place-items-center px-5 text-center"><div><p className="display gradient-text text-9xl">404</p><h1 className="display mt-4 text-5xl">This track isn&apos;t in the set.</h1><Link className="button-primary mt-8" href="/">Back home</Link></div></main>; }
