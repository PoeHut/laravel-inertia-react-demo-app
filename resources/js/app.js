import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { Layout } from "components/common";

createInertiaApp({
    resolve: async (name) => {
        const currentComponent = (await import(`./Pages/${name}`)).default;

        // create default layout
        if (currentComponent.layout === undefined) {
            currentComponent.layout = (page) => <Layout children={page} />;
        }

        return currentComponent;
    },

    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },

    title: (title) => `Laravel, Inertia, React App - ${title}`,
});

InertiaProgress.init({
    color: "green",
    includeCSS: true,
    showSpinner: true,
});
