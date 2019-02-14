import React from "react";
import { Editor } from "./Editor";
import { Preview } from "./Preview";
import placeholderFile from "../utils/placeholder.md";

import "./App.scss";

export default class App extends React.Component {
    state = {
        markdown: "Loading"
    };

    componentDidMount() {
        const markdownFile = fetch(placeholderFile).then(response => response.text());
        markdownFile.then(text => {
            this.setState({ markdown: text });
        });
    }

    onChange = e => {
        this.setState({ markdown: e.target.value });
    };

    render() {
        return (
            <div className="layout">
                <div className="column">
                    <Editor onChange={this.onChange} markdown={this.state.markdown} />
                </div>
                <div className="column">
                    <Preview markdown={this.state.markdown} />
                </div>
            </div>
        );
    }
}
