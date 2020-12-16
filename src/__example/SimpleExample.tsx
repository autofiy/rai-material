import * as React from "react";
import { AutoInfo } from "@autofiy/rai-core";
import { MaterialSimpleContainer } from "../Simple/MaterialSimpleContainer";

import { customValueRenderers, getData } from "./ExampleUtils";

export class SimpleExample extends React.Component {
    render(): any {
        return <AutoInfo data={getData()}
            properties={{ renderValue: customValueRenderers() }}
            groups={{
                basic: { properties: ["name", "birthDate", "email", "phone", "image"], title: "BASIC INFO" },
                about: { properties: ["education", "job", "yearOfExperience"], title: "ABOUT" }
            }}
            remainingProperties={{
                position: "last",
                title: "LINKS"
            }}
            container={MaterialSimpleContainer} />
    }
}