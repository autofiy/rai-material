import { ContainerComponent, GroupComponent } from "@autofiy/rai-core";
import { SGCGroup } from "./SGCGroup";

export class SGCContainer extends ContainerComponent {
    protected getDefaultGroupComponent(): typeof GroupComponent {
        return SGCGroup;
    }
}