import Link from "next/link";
import Navbar from "../nav/Navbar";

export default function Header() {
  const sm = ``;
  const md = ``;
  const lg = ``;

  return (
    <>
      <header className="flex fixed px-4 my-3 justify-between w-screen align-middle h-[5rem]">
        <Link href="/">
          <h1 className="text-[5rem] flex font-bold text-transparent text-center z-20 golden-animation bg-clip-text align-middle items-center h-[100%]">
            AAD
          </h1>
        </Link>
        <Navbar>
        </Navbar>
      </header>
    </>
  );
}
