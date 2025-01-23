import Link from "next/link";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const { getUser } = getKindeServerSession();
const user =await getUser();

const Navbar = () => {

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="flex items-center justify-between px-8">
        <h1 className="text-lg font-bold">
          <Link href="/">Siam</Link>
        </h1>

        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Link href="/profile" className="btn bg-[#FFA500] px-4 py-2 rounded-xl">
                Profile
              </Link>
              <LogoutLink className="btn bg-[#FFA500] px-4 py-2 rounded-xl">
                Log out
              </LogoutLink>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <LoginLink className="btn bg-[#FFA500] px-4 py-2 rounded-xl">
                Sign in
              </LoginLink>
              <RegisterLink className="btn bg-[#FFA500] px-4 py-2 rounded-xl">
                Sign up
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
