import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Header from "./Header";

const Layout = ({ children }) => {
    const { auth } = usePage().props;

    return (
        <div>
            <section className="bg-blue-500 py-6 px-4">
                <header className="flex justify-between">
                    <div>
                        <h1 className="text-bold text-lg text-white">
                            Laravel, Inertia, React demo app
                        </h1>
                        <p className="text-gray-50 text-sm">
                            Welcome back {auth.user.name}
                        </p>
                    </div>

                    <Header />
                </header>
            </section>

            <section className="container bg-white p-8">
                <div>
                    {/* <iframe
                        className="mt-4"
                        height="180px"
                        width="100%"
                        scrolling="no"
                        seamless
                        src="https://player.simplecast.com/b83b0a3a-c934-480e-af5d-3007fccd57b6?dark=false"
                    ></iframe> */}

                    {children}
                </div>
            </section>
        </div>
    );
};

export default Layout;
