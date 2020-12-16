import { PropertyComponent } from "@autofiy/rai-core";
import { Table, TableHead, TableBody, Box } from "@material-ui/core";
import * as React from "react";
import { MaterialGroup } from "../MaterialGroup";
import { MaterialTableProperty } from "./MaterialTableProperty";

export class MaterialTableGroup extends MaterialGroup {

    protected getPropertyComponent(): typeof PropertyComponent {
        return MaterialTableProperty;
    }

    render(): any {
        return <Box paddingY={this.getSpacing()}>
            {
                this.renderTitle()
            }

            <Table>
                <TableHead>
                </TableHead>
                <TableBody>
                    {
                        this.renderProperties()
                    }
                </TableBody>
            </Table>
        </Box>
    }

}