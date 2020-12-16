import { GroupComponent, PropertyComponent } from "@autofiy/rai-core";
import { MaterialGroup } from "../MaterialGroup";
import { MaterialCardProperty } from "./MaterialCardProperty";

export class MaterialCardGroup extends MaterialGroup {

    protected getPropertyComponent(): typeof PropertyComponent {
        return MaterialCardProperty;
    }

}