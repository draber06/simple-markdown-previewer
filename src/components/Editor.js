import React from "react";

import "./Editor.scss";

export const Editor = ({ onChange, markdown }) => {
    return (
        <div className="editor">
            <div className="editor__inner">
                <textarea
                    id="editor"
                    className="editor__body"
                    value={markdown}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};
