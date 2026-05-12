import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 font-black text-black">
            V
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide">Voltix Store</h1>
            <p className="text-xs text-gray-400">Modern E-Store</p>
          </div>
        </div>

        <NavLink />
      </div>
    </nav>
  );
}
