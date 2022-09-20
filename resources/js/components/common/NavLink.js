import React from "react";
import { Link } from "@inertiajs/inertia-react";

const NavLink = ({ children, href, active, method }) => {
    return (
        <Link
            href={href}
            method={method ?? "get"}
            as="button"
            className={`text-base font-medium text-gray-600 hover:text-gray-900 ${
                active ? "text-white" : ""
            }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;
