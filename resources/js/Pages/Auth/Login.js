import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import { TitleMeta } from "components/common";

const Login = () => {
    const { data, setData, post, errors } = useForm({
        email: "",
        password: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/login");
    }

    return (
        <div>
            <TitleMeta title="Login" metaContent="login form" />

            <div className="w-full h-screen flex items-center justify-center bg-indigo-100">
                <form
                    method="post"
                    onSubmit={submit}
                    className="w-full md:w-1/3 rounded-lg"
                >
                    <h2 className="text-3xl text-center text-gray-500 mb-8">
                        Login
                    </h2>
                    <div className="px-12 pb-10">
                        <div className="w-full mb-2">
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="
                                            w-full
                                            border
                                            rounded
                                            px-3
                                            py-2
                                            text-gray-700
                                            focus:outline-none
                                            "
                                />
                            </div>
                            {errors.email && (
                                <div className="text-red-500">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div className="w-full mb-2">
                            <div className="flex items-center">
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    placeholder="Password"
                                    className="
                                    w-full
                                    border
                                    rounded
                                    px-3
                                    py-2
                                    text-gray-700
                                    focus:outline-none
                                    "
                                />
                            </div>
                            {errors.password && (
                                <div className="text-red-500">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="
                            w-full
                            py-2
                            mt-8
                            rounded-full
                            bg-blue-400
                            text-gray-100
                            focus:outline-none
                            "
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

Login.layout = null;

export default Login;
