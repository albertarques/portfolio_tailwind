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
        className="flex rounded-lg text-gray-900 font-bold hover:text-gray-700 hover:text-transparent align-middle items-center golden-animation bg-clip-text"
      >
        {title}
      </a>
    ))}
  </nav>
);
}