import Link from "next/link";
import Navbar from "../nav/Navbar";

export default function Header() {

  const header = {
    def : "flex fixed px-4 my-3 justify-between w-screen align-middle h-[2rem]",
    md: "md:h-[3rem]",
    lg: "lg:h-[4rem]",
  }
  
  const h1 = {
    def : "text-[2rem] flex font-bold text-transparent text-center z-20 golden-animation bg-clip-text align-middle items-center h-[100%]",
    md : "md:text-[3rem] ",
    lg: "lg:text-[4rem]",
  }

  return (
    <>
      <header className={`${header.def} ${header.md}`}>
        <Link href="/">
          <h1 className={`${h1.def} ${h1.md}`}>
            AAD
          </h1>
        </Link>
        <Navbar>
        </Navbar>
      </header>
    </>
  );
}
