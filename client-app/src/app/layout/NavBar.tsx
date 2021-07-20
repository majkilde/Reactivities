import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu inverted fixed="top" id="topbar">
            <Container>
                <Menu.Item as={NavLink} to="/" exact header>
                    <img src="/assets/logo.png" alt="Logo" style={{ marginRight: '10px' }}></img>
                    Reactivities

                </Menu.Item>
                <Menu.Item name="Activities" as={NavLink} to="/activities" />
                <Menu.Item   >
                    <Button as={NavLink} to="/createActivity" positive content="Create Activity"></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}