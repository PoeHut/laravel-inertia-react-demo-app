import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import { TitleMeta } from "components/common";

const UserCreate = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/user");
    }

    return (
        <div>
            <TitleMeta title="User" metaContent="Information about User" />

            <div className="max-w-md mx-auto">
                <h1 className="font-bold text-3xl">Create New User</h1>

                <form onSubmit={submit}>
                    <div className="my-5">
                        <label className="uppercase font-bold mb-1">Name</label>
                        <input
                            type="text"
                            value={data.name}
                            className="rounded border p-2 w-full"
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && (
                            <div className="text-red-500">{errors.name}</div>
                        )}
                    </div>

                    <div className="my-5">
                        <label className="uppercase font-bold mb-1">
                            Email
                        </label>
                        <input
                            type="text"
                            value={data.email}
                            className="rounded border p-2 w-full"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && (
                            <div className="text-red-500">{errors.email}</div>
                        )}
                    </div>

                    <div className="my-5">
                        <label className="uppercase font-bold mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={data.password}
                            className="rounded border p-2 w-full"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        {errors.password && (
                            <div className="text-red-500">
                                {errors.password}
                            </div>
                        )}
                    </div>

                    <div className="my-5">
                        <button
                            type="submit"
                            className="px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-200"
                            disabled={processing}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserCreate;
