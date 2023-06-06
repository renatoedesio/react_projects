import { AtSignIcon, CalendarIcon, ChatIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FiMenu, FiHome, FiCalendar, FiUser, FiDollarSign, FiBriefcase,  FiSettings } from 'react-icons/fi'
import { Avatar, Divider, Flex, Heading, Icon, IconButton, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import NavItems from "../navItems/NavItems";

export default function Sidebar() {
    // usado pra controlar qual o tamanho da tela.
    const [navSize, changeNavSize] = useState("large")

    // usado pra controlar qual link estah ativo ou inativo. Quem preenche esse valor eh o NavItems
    const [activeLink, setActiveLink] = useState(""); 

    return (
        <Flex 
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
            borderRadius={navSize== "small" ? "15px"  : "30px"}
            w={navSize == "small"  ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between">
            
            <Flex
                p="5%"
                flexDir={"column"}
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as={"nav"} 
            >
                    <IconButton
                        background="none"
                        mt={5}
                        _hover={{ background: 'none' }}
                        icon={<FiMenu />}
                        onClick={() => {
                            if (navSize == "small")
                                changeNavSize("large")
                            else
                                changeNavSize("small")
                        }}
                    />
                    <NavItems active={activeLink == "Dashboard"}  title="Dashboard"     navSize={navSize} icon={FiHome}         goTo={"/"}          setActiveLink={setActiveLink} /> 
                    <NavItems active={activeLink == "Workspace"}  title="Workspace"     navSize={navSize} icon={FiCalendar}     goTo={"/workspace"} setActiveLink={setActiveLink}/>
                    <NavItems active={activeLink == "Laudos"}     title="Laudos"        navSize={navSize} icon={FiUser}         goTo={"/create"}    setActiveLink={setActiveLink}/>
                    <NavItems active={activeLink == "Reportar"}   title="Reportar"      navSize={navSize} icon={FiDollarSign}   goTo={"/profile"}   setActiveLink={setActiveLink}/>

                    <Divider mt={10} display={navSize == "small" ? "none": "flex"}/>

                    <NavItems navSize={navSize} icon={FiBriefcase} title="Configurações" />
                    <NavItems navSize={navSize} icon={FiSettings} title="Suporte" />
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >

                <Divider display={navSize == "small" ? "none": "flex"}/>

                <Flex mt={4} align={"center"}>
                    <Avatar size="sm" src="avatar-1.jpg"/>
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none": "flex"}>
                        <Heading as={"h3"} size="sm">Mirian Santos</Heading>
                        <Text color="gray">Perito Criminal</Text>
                    </Flex>

                </Flex>
            </Flex>
        </Flex>

            
    )
}