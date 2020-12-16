import { PropertyComponent } from "@autofiy/rai-core";
import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import { MATERIAL_AUTO_INFO_DEFAULTS } from "../MaterialAutoInfoDefault";
import { Direction } from "../Direction";

export class MaterialSimpleProperty extends PropertyComponent {

    render(): any {
        const direction = this.props.autoInfo.getProps().extra?.direction ?? MATERIAL_AUTO_INFO_DEFAULTS.component.simple.direction;
        const space = this.props.autoInfo.getProps().extra?.itemSpace ?? MATERIAL_AUTO_INFO_DEFAULTS.component.simple.itemSpace;
        const gap = this.props.autoInfo.getProps().extra?.itemSpace ?? MATERIAL_AUTO_INFO_DEFAULTS.component.simple.gapPx;

        return <Box paddingY={space} display="flex"
            flexDirection={direction === Direction.VERTICAL ? "column" : "row"}
            style={{ gap: gap }}
            alignItems={direction === Direction.VERTICAL ? "" : "center"} >
            <Typography variant="caption">{this.title()}</Typography>
            <Typography variant="body1">{this.value()}</Typography>
        </Box>;
    }

}