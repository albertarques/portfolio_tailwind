export function H1({children}) {

  const props = {
    size : "text-[2rem] md:text-[3rem]",
    style : "uppercase",
  }

  return (
    <h1 className={`${props.size} ${props.style}`}>
      {children}
    </h1>
  );
}

export function H2({children}) {
  return (
    <h2 className="text-[1.2rem] md:text-[1rem] font-bold">
      {children}
    </h2>
  );
}

