import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import NavLink from "./NavLink";

const Header = () => {
    const { url, component } = usePage();

    return (
        <nav className="hidden space-x-10 md:flex">
            <NavLink href="/" active={url === "/" ? "text-white" : ""}>
                Home
            </NavLink>
            <NavLink
                href="/user"
                active={url.startsWith("/user") ? "text-white" : ""}
            >
                User
            </NavLink>
            <NavLink
                href="/contact"
                active={component === "Contact" ? "text-white" : ""}
            >
                Contact
            </NavLink>
            <NavLink href="/logout" method="post">
                Logout
            </NavLink>
        </nav>
    );
};

export default Header;
