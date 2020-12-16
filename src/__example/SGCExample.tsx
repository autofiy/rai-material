import { AutoInfo } from "@autofiy/rai-core";
import * as React from "react";
import { Direction } from "../Direction";
import { SGCContainer } from "../SGC/SGCContainer";
import { customValueRenderers, getData, getTitles } from "./ExampleUtils";

export class SGCExample extends React.Component {
    render(): any {
        return <AutoInfo container={SGCContainer}
            data={getData()} properties={{
                titles: getTitles(),
                renderValue: customValueRenderers()
            }}
            groups={{
                basic: { properties: ["name", "birthDate", "email", "phone", "image"], title: "BASIC INFO" },
                about: { properties: ["education", "job", "yearsOfExperience"], title: "ABOUT" }
            }}
            extra={{ direction: Direction.HORIZONTAL }}
            remainingProperties={{
                position: "last",
                title: "LINKS"
            }} />
    }
}