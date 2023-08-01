import Link from "next/link";
import Navbar from "../nav/Navbar";

export default function Header() {

  const styles = { 
    header : {
      def : "flex fixed px-4 my-3 justify-between w-screen align-middle h-[2rem]",
      md: "md:h-[3rem]",
      lg: "lg:h-[2.7rem]",
    },
    h1 : {
      def : "text-[2rem] flex font-bold text-transparent text-center z-20 golden-animation bg-clip-text align-middle items-center h-[100%]",
      md : "md:text-[3rem] ",
      lg: "lg:text-[3.5rem]",
    }
  }

  return (
    <>
      <header className={`${styles.header.def} ${styles.header.md} ${styles.header.lg}`}>
        <Link href="/">
          <h1 className={`${styles.h1.def} ${styles.h1.md} ${styles.h1.lg}`}>
            AAD
          </h1>
        </Link>
        <Navbar>
        </Navbar>
      </header>
    </>
  );
}
