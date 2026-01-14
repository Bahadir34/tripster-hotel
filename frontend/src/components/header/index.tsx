import { type FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="border-b border-zinc-300 shadow-md">
      <div className="container flex justify-between items-center">
        <div className="flex gap-10 items-center">
          <h2 className="font-bold text-xl md:text-2xl">Tripster</h2>

          <nav className="flex gap-5 items-center">
            <Link to={"/"}>Oteller</Link>
            <Link to={"/"} className="max-md:hidden">
              Popüler
            </Link>
            <Link to={"/admin/create"}>Oluştur</Link>
          </nav>
        </div>

        <div className="flex gap-2 items-center">
          <button
            type="button"
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full"
          >
            Kayıt Ol
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-full max-md:hidden"
          >
            Giriş Yap
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
