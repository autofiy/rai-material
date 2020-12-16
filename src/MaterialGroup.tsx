import { GroupComponent, PropertyComponent } from "@autofiy/rai-core";
import { Box, Typography } from "@material-ui/core";
import React from "react";
import { getMaterialAutoInfoDefaults } from "./MaterialAutoInfoDefault";

export abstract class MaterialGroup extends GroupComponent {

    protected abstract getPropertyComponent(): typeof PropertyComponent;

    render(): any {
        return <Box paddingY={this.getSpacing()}>
            {this.renderTitle()}
            {this.renderProperties()}
        </Box>
    }


    protected getSpacing(): number {
        const defaults = getMaterialAutoInfoDefaults();
        return this.props.autoInfo.getProps().extra?.groupSpace ?? defaults.groupSpace;
    }

    renderTitle(): any {
        const title = this.props.group.title;
        if (title) {
            return <Typography variant="h6">{title}</Typography>
        }
        return null;
    }
}