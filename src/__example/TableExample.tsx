import { AutoInfo } from "@autofiy/rai-core";
import * as React from "react";
import { MaterialTableContainer } from "../Table/MaterialTableContainer";
import { customValueRenderers, getData, getTitles } from "./ExampleUtils";

export class TableExample extends React.Component {
    render(): any {
        return <AutoInfo data={getData()}
            container={MaterialTableContainer}
            properties={{ renderValue: customValueRenderers() , titles : getTitles() }} />
    }
}