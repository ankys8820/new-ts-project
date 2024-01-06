import { useState } from "react";
import { FaSearch, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const user = { _id: "1234", role: "admin" };

const Header = () => {
  const logOutHandler = () => {
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <>
      <nav className="header">
        <Link to={"/"}>HOME</Link>
        <Link to={"/search"}>
          <FaSearch />
        </Link>
        <Link to={"/cart"}>
          {/*           <FaShoppingBag /> */}
          <FiShoppingCart />
        </Link>
        {user?._id ? (
          <>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <FaUser />
            </button>
          </>
        ) : (
          <Link to={"/login"}>
            <FaSignInAlt />
          </Link>
        )}
        <dialog open={isOpen}>
          <div>
            {user.role === "admin" && (
              <Link to={"/admin/dashboard"}>Admin</Link>
            )}
            <Link to="/orders">Orders</Link>
            <button onClick={logOutHandler}>
              <FaSignOutAlt />
            </button>
          </div>
        </dialog>
      </nav>
    </>
  );
};

export default Header;
