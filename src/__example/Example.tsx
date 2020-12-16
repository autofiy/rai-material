import { Box, Container, Divider, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import * as React from "react";
import { CardExample } from "./CardExample";
import { SimpleExample } from "./SimpleExample";
import { TableExample } from "./TableExample";

interface State {
    selectedComponent: string;
}

export class Example extends React.Component<any, State> {

    constructor(props: any) {
        super(props);
        this.state = { selectedComponent: "" };
    }

    render(): any {
        let component: any = null;
        switch (this.state.selectedComponent) {
            case "simple": component = <SimpleExample />; break;
            case "table": component = <TableExample />; break;
            case "card": component = <CardExample />; break;
        }

        return <Container>
            <Box padding={8}>
                <Box>
                    <RadioGroup aria-label="component" name="component"
                        value={this.state.selectedComponent}
                        onChange={(e: any) => this.setState({ selectedComponent: e.target.value })}>

                        <FormControlLabel value="simple" control={<Radio />} label="Simple" />
                        <FormControlLabel value="table" control={<Radio />} label="Table" />
                        <FormControlLabel value="card" control={<Radio />} label="Card" />

                    </RadioGroup>
                </Box>

                <Divider hidden />
                <Divider />

                {
                    component
                }

            </Box>
        </Container>
    }
}