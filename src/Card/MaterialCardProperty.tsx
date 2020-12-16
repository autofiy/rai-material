import { PropertyComponent } from "@autofiy/rai-core";
import { Box, Card, Typography } from "@material-ui/core";
import * as React from "react";
import { Direction } from "../Direction";
import { MATERIAL_AUTO_INFO_DEFAULTS } from "../MaterialAutoInfoDefault";

export class MaterialCardProperty extends PropertyComponent {
    render(): any {
        const direction = this.props.autoInfo.getProps().extra?.direction ?? MATERIAL_AUTO_INFO_DEFAULTS.component.card.direction;
        const space = this.props.autoInfo.getProps().extra?.itemSpace ?? MATERIAL_AUTO_INFO_DEFAULTS.component.card.itemSpace;
        return <Box paddingY={space}>
            <Card style={{ padding: 8 }} variant="elevation">
                <Box display="flex"
                    flexDirection={direction === Direction.VERTICAL ? "col" : "row"}
                    style={{ gap: direction === Direction.HORIZONTAL ? 16 : 0 }}
                    alignItems="center" >
                    <Typography variant="caption">{this.title()}</Typography>
                    <Typography variant="body1">{this.value()}</Typography>
                </Box>
            </Card>
        </Box>
    }
}