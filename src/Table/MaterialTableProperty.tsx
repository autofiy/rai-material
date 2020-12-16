import { PropertyComponent } from "@autofiy/rai-core";
import { TableRow, TableCell } from "@material-ui/core";
import * as React from "react";

export class MaterialTableProperty extends PropertyComponent {
    render(): any {
        return <TableRow>
            <TableCell>{this.title()}</TableCell>
            <TableCell>{this.value()}</TableCell>
        </TableRow>
    }
}