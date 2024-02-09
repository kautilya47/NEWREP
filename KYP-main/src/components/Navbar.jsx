import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
export default function Navbar() {
  return (
    <nav className="flex bg-black text-white items-center justify-between gap-8 p-4 font-sans">
      <div className="flex items-center gap-8">
        <div className="flex ms-8">
          <BsBook size={48} />
          <Link to="/" className="site-title text-5xl text-inherit ms-2">
            KYP
          </Link>
        </div>
        <select
          id="mainMP"
          className="bg-inherit relative bottom-0 left-0 text-inherit border-2 rounded-sm self-end"
        >
          <option className="text-black">NA</option>
          <option className="text-black">EU5</option>
          <option className="text-black">APAC</option>
        </select>
      </div>
      <ul className="p-5 m-0 list-none flex gap-8">
        <li className="hover:text-orange-500">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-orange-500">
          <Link to="/classification">Classification</Link>
        </li>
        <li className="hover:text-orange-500">
          <Link to="/updates">Updates</Link>
        </li>
        <li className="hover:text-orange-500">
          <Link to="/errors">Errors</Link>
        </li>
        <li className="hover:text-orange-500">
          <Link to="/links">Links</Link>
        </li>
      </ul>
    </nav>
  );
}
