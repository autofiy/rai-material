import { ContainerComponent, GroupComponent } from "@autofiy/rai-core";
import { MaterialSimpleGroup } from "./MaterialSimpleGroup";

export class MaterialSimpleContainer extends ContainerComponent {

    protected getDefaultGroupComponent(): typeof GroupComponent {
        return MaterialSimpleGroup;
    }

}