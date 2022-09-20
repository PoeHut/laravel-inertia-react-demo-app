import React from "react";
import { Head } from "@inertiajs/inertia-react";

const TitleMeta = ({ title, metaContent }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta type="description" content={metaContent} key="description" />
        </Head>
    );
};

export default TitleMeta;
