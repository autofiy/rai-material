import { ContainerComponent, GroupComponent } from "@autofiy/rai-core";
import * as React from "react";
import { MaterialTableGroup } from "./MaterialTableGroup";

export class MaterialTableContainer extends ContainerComponent {

    protected getDefaultGroupComponent(): typeof GroupComponent {
        return MaterialTableGroup;
    }

}