import { PropertyComponent } from "@autofiy/rai-core";
import { MaterialGroup } from "../MaterialGroup";
import { MaterialSimpleProperty } from "./MaterialSimpleProperty";

export class MaterialSimpleGroup extends MaterialGroup {

    protected getPropertyComponent(): typeof PropertyComponent {
        return MaterialSimpleProperty;
    }

}