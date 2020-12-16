import { ContainerComponent, GroupComponent } from "@autofiy/rai-core";
import { MaterialCardGroup } from "./MaterialCardGroup";

export class MaterialCardContainer extends ContainerComponent {

    protected getDefaultGroupComponent(): typeof GroupComponent {
        return MaterialCardGroup;
    }

}