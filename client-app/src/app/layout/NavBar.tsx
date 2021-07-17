import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface Props {
    formOpen: () => void;
}

export default function NavBar({formOpen}:Props) {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="Logo" style={{marginRight:'10px'}}></img>
                    Reactivities

                </Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button onClick={formOpen} positive content="Create Activity"></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}