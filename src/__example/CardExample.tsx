import { AutoInfo } from "@autofiy/rai-core";
import * as React from "react";
import { MaterialCardContainer } from "../Card/MaterialCardContainer";
import { customValueRenderers, getData } from "./ExampleUtils";


export class CardExample extends React.Component {
    render(): any {
        return <AutoInfo data={getData()} container={MaterialCardContainer}
            properties={{ renderValue: customValueRenderers() }}
            groups={{
                basic: { properties: ["name", "birthDate", "email", "phone", "image"], title: "BASIC INFO" },
                about: { properties: ["education", "job", "yearsOfExperience"], title: "ABOUT" }
            }}
            remainingProperties={{
                position: "last",
                title: "LINKS"
            }}
        />
    }
}