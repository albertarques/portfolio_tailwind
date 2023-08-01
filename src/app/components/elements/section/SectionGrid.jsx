export default function SectionGrid({children, className}) {

  const sm = `grid grid-cols-12 grid-flow-row`;
  const md = ``;
  const lg = ``;

  return (
    <section className={`${sm} ${md} ${lg} ${className ? className : ""}`}>
      {children}
    </section>
  );
}

/* 
/* CONTENTS: Required by Tailwind, makes a phantom div to permits children
/* to be displayed in a grid layout herited from the parent Section.
*/

export function Contents({children}) {
  return (
    <div className="contents">
      {children}
    </div>
  );
}