import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { throttle } from "lodash";
import { Paginate, TitleMeta } from "components/common";
import { clippingParents } from "@popperjs/core";

const UserList = ({ users, filter, can }) => {
    const onSearch = (value) =>
        Inertia.get(
            "/user",
            { search: value },
            { preserveState: true, replace: true }
        );

    const handleSearch = throttle(onSearch, 200);

    return (
        <div>
            <TitleMeta title="User" metaContent="Information about user" />

            <section className="p-8">
                <div>
                    <div className="m-4 flex justify-between">
                        <div>
                            <h1 className="font-bold text-3xl inline-block mr-2">
                                Users
                            </h1>

                            {can?.create && (
                                <Link
                                    href="/user/create"
                                    className="bg-blue-500 uppercase text-white px-4 py-2 rounded"
                                >
                                    New User
                                </Link>
                            )}
                        </div>

                        <input
                            placeholder="Search..."
                            className="border form-input px-4 py-2 rounded-full"
                            value={filter.search ?? ""}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </div>

                    <div className="overflow-x-auto relative">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Username
                                    </th>
                                    <th className="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.data?.map((user) => (
                                    <tr
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        key={user.id}
                                    >
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {user.name}
                                        </th>

                                        {user.can.edit && (
                                            <th
                                                scope="row"
                                                className="text-end"
                                            >
                                                <button
                                                    type="button"
                                                    className="bg-blue-400 text-white px-8 py-2 rounded-md"
                                                >
                                                    Edit
                                                </button>
                                            </th>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Paginate links={users.links} />
        </div>
    );
};

export default UserList;
