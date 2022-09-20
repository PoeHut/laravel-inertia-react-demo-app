import React from "react";
import he from "he";
import { Link } from "@inertiajs/inertia-react";

const Paginate = ({ links }) => {
    return (
        <div className="mt-3 flex justify-center">
            {links?.map((link) =>
                link.url ? (
                    <Link
                        key={link.label}
                        href={link.url}
                        className={`px-1 ${
                            link.active
                                ? "text-black font-bold text-xl"
                                : "text-gray-500"
                        }`}
                    >
                        <span>{he.decode(link.label)}</span>
                    </Link>
                ) : (
                    <span key={link.label} className="px-1 text-gray-500">
                        {he.decode(link.label)}
                    </span>
                )
            )}
        </div>
    );
};

export default Paginate;
