import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import axios from "axios";

const Navbar = async () => {
  const response = await axios(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const categories = response.data;

  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          {categories && <MainNav data={categories} />}
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;