import { FiMenu, FiHome, FiCalendar, FiUser, FiDollarSign, FiBriefcase, FiSettings, FiUserPlus, FiAirplay, FiExternalLink } from 'react-icons/fi'
import { Avatar, Box, Button, Divider, Flex, Heading,  IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import NavItems from "../NavItems"
import { Container } from './styles';
import { PhoneIcon } from '@chakra-ui/icons';
import { useKeycloak } from "@react-keycloak/web";


export default function Sidebar() {
    // usado pra controlar qual o tamanho da tela.
    const [navSize, changeNavSize] = useState("large")

    // usado pra controlar qual link estah ativo ou inativo. Quem preenche esse valor eh o NavItems
    const [activeLink, setActiveLink] = useState("");

    const { keycloak, initialized } = useKeycloak();

    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
            bg={"white"}> 

            {!keycloak.authenticated && (
            <Button colorScheme='blue' onClick={() => keycloak.login()}>Login</Button>
            )}

            {!!keycloak.authenticated && (
                <Button
                    type="button"
                    className="text-blue-800"
                    onClick={() => keycloak.logout()}
                >
                    Logout ({keycloak.tokenParsed.preferred_username})
                </Button>
            )}


            <Flex
                p="5%"
                flexDir={"column"}
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as={"nav"} >
                <Flex mt={4} mb={4} justifyContent={navSize == "small" ?"center" : "space-between"} alignItems={"center"} w={"100%"}>
                    <IconButton
                        background="none"
                        
                        _hover={{ background: 'none' }}
                        icon={<FiMenu />}
                        onClick={() => {
                            if (navSize == "small")
                                changeNavSize("large")
                            else
                                changeNavSize("small")
                        }}
                    />
                    <Box display={navSize == "small" ? "none" : "flex"} mr={10}>
                        { /*
                        <Image  src='src\assets\brasao_pf_pequeno.png' alt='Brasão PF' />
                       
                       
                        <Text as='b'>Workspace</Text>
                        */ }
                    </Box>
                </Flex>

                <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    alignItems={navSize == "small" ? "center" : "flex-start"}>

                    

                    <Divider display={navSize == "small" ? "none" : "flex"} />

                    <Flex mt={4} mb={4} align={"center"}>
                        <Avatar size="sm" src='https://bit.ly/dan-abramov' />
                        <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                            <Heading as={"h3"} size="sm"> {keycloak.tokenParsed.preferred_username}</Heading>
                            <Text color="gray">Perito Criminal</Text>
                        </Flex>
                    </Flex>

                    <Divider display={navSize == "small" ? "none" : "flex"} />
                </Flex>

                <NavItems active={activeLink == "Workspace"} title="Workspace" navSize={navSize} icon={FiCalendar} goTo={"/workspace"} setActiveLink={setActiveLink} />
                <NavItems active={activeLink == "Ocorrência"} title="Ocorrência" navSize={navSize} icon={FiUser} goTo={"/ocorrencia"} setActiveLink={setActiveLink} />

                <NavItems active={activeLink == "Laudos"} title="Laudos" navSize={navSize} icon={FiBriefcase} setActiveLink={setActiveLink} />
                <NavItems active={activeLink == "Formbuilder"} title="Formbuilder" navSize={navSize} icon={FiExternalLink}  setActiveLink={setActiveLink} />
                <NavItems active={activeLink == "Reportar"} title="Reportar" navSize={navSize} icon={FiAirplay} setActiveLink={setActiveLink} />


                <Divider mt={10} display={navSize == "small" ? "none" : "flex"} />

                <NavItems navSize={navSize} icon={FiSettings} title="Configurações" />
                <NavItems navSize={navSize} icon={FiUserPlus} title="Suporte" />
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={"center"}
                mb={4}
            >

                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex flexDir="column" display={navSize == "small" ? "none" : "flex"}>
                    <Button colorScheme='blue' mt={2}>Abrir Chamado</Button>
                </Flex>


                <Flex flexDir="column" display={navSize == "small" ? "flex" : "none"}>
                    <Button size='sm' colorScheme='blue' >
                        <PhoneIcon />
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}