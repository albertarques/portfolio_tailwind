import Navbar from "../nav/Navbar";

export default function Header() {
  const sm = ``;
  const md = ``;
  const lg = ``;

  return (
    <>
      <header className="fixed flex h-[3.5rem] leading-[3.5rem] px-4 my-3 justify-between w-screen">
        <h1 className="text-[3.5rem] font-bold text-transparent text-center z-20 golden-animation bg-clip-text">
          AAD
        </h1>
        <Navbar>
        </Navbar>
      </header>
    </>
  );
}
