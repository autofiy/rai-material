import { PropertyComponent } from "@autofiy/rai-core";
import { Box, Card } from "@material-ui/core";
import React from "react";
import { MaterialSimpleProperty } from "../main";
import { getMaterialAutoInfoDefaults } from "../MaterialAutoInfoDefault";
import { MaterialGroup } from "./../MaterialGroup";

export class SGCGroup extends MaterialGroup {
    protected getPropertyComponent(): typeof PropertyComponent {
        return MaterialSimpleProperty;
    }

    render(): any {
        const defaults = getMaterialAutoInfoDefaults();
        const padding = this.props.autoInfo.getProps().extra?.cardPadding ?? defaults.component.sgc.cardPaddingPx;
        return <Box paddingY={this.getSpacing()}>
            <Card style={{ padding: padding }}>
                {this.renderTitle()}
                {this.renderProperties()}
            </Card>
        </Box>
    }
}