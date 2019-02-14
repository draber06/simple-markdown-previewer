import React from "react";
import { marked, renderer } from "../utils/marked";

import "./Preview.scss";

export const Preview = ({ markdown }) => {
    return (
        <div
            id="preview"
            className="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown, { renderer: renderer }) }}
        />
    );
};
