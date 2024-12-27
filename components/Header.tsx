import React from "react";

const Header = () => {
  return (
    <section className="pt-10 pb-5">
      <div className="flex items-center justify-between px-20">
        <div className="flex">
          <div className="mr-20">logo</div>
          <nav>
            <ul className="flex items-center gap-8">
              <li className="flex items-center gap-2">
                <p>Product</p>
                <div>V</div>
              </li>
              <li className="flex items-center gap-2">
                <p>Company</p>
                <div>V</div>
              </li>
              <li className="flex items-center gap-2">
                <p>Connect</p>
                <div>V</div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-8">
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
