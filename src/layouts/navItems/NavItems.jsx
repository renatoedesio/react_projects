import { Flex, Box, Heading, Text, Button, Spacer, HStack, Menu, MenuButton, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavItems({navSize, title, icon, active}){
    return (
        <Flex
            mt={30}
            flexDir={"column"}
            w="100%"
            alignItems={navSize == "small" ? "center": "flex-start"}>

       

            <Menu placement="right">
                <Link
                    backgroundColor={active && "#AEC8CA"}
                    p={3}
                    borderRadius={8}
                    _hover={{textDecor: 'none', backgroundColor: '#AEC8CA"'}}
                    w={navSize == "large" && "100%"}
                >
                    
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize={"xl"} color={active ? "#82AAAD" : "gray.500"}></Icon>
                            <Text ml={5} display={navSize=="small"? "none": "flex"} >{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link> 
            </Menu>
        </Flex>


    )
}

