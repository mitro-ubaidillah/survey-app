import { Box, Button, Flex, Image, Menu, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, SetIsOpen] = useState(false);
    const toggle = () => SetIsOpen(!isOpen);

    return (
        <Box position={"sticky"} top={"0"} zIndex={"10"}>
            <NavBarContainer>
                <Link to={'/'}>
                    {/* <Image src={logo} width={{ base:'40px',md:'60px',lg:'75px' }} /> */}
                </Link>
                <MenuToggle toggle={toggle} isOpen={isOpen} />
                <MenuLinks
                    isOpen={isOpen}
                />
            </NavBarContainer>
        </Box>
    );
}

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </Box>
    );
};

const MenuLinks = ({ isOpen }) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
            borderRadius="20"
            py={{ base: "6" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "center", "flex-end", "flex-end"]}
                direction={["column", "column", "row", "row"]}
                pt={[4, 4, 0, 0]}
                color="#CDD1E0"
            >
                <Menu>
                    <Link to={'/'}>
                        Halo
                    </Link>
                    {/* <Link
                        color="#3AB8FF"
                        _hover={{ textDecoration: "none" }}
                        to="/home"
                    >
                        Beranda
                    </Link> */}
                </Menu>
            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            bg={'transparent'}
            mb={{ base: 0, md: 0 }}
            py={{ base: 5, md: 0 }}
            px={20}
            {...props}
            height={{ base: "0", md: "auto" }}
        >
            {children}
        </Flex>
    );
};

export default Navbar;
