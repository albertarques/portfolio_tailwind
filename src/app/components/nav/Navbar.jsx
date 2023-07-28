export default function Navbar({children}) {
  return (
    <nav className="flex sm:justify-center space-x-4">
    {[
      ["Team", "/"],
      ["Projects", "/"],
      ["Reports", "/"],
    ].map(([title, url]) => (
      <a
        href={url}
        key={title}
        className="rounded-lg px-3 py-2 text-slate-700 font-bold golden-animation hover:text-slate-900 text-center"
      >
        {title}
      </a>
    ))}
  </nav>
);
}