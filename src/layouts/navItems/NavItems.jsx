import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'


export default function NavItem({icon, title, description, active, navSize, goTo, setActiveLink }) {

    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <NavLink to={goTo}>
                <Link
                    backgroundColor={active && "#AEC8CA"}
                    p={navSize == "small" ? "0" : "3"} 
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
                    w={navSize == "large" && "100%"}> 
              
                    <MenuButton w="100%">
                        <Flex justifyContent={'center'}>
                            <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                 
                </Link>
                </NavLink>

            </Menu>
        </Flex>
    )
}