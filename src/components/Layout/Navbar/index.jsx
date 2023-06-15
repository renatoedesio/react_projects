import { Flex, Spacer, HStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, IconButton, Divider, Icon  } from "@chakra-ui/react";
import { useKeycloak } from "@react-keycloak/web";
import { FiBook } from "react-icons/fi";
import { FiBell, FiLogOut } from "react-icons/fi";

export default function Navbar(){
    const { keycloak, initialized } = useKeycloak();

    return (

    <Flex as="nav" p="10px" mb="40px" alignItems="center">
        <Breadcrumb>
        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Workspace</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Gerenciar casos</BreadcrumbLink>
        </BreadcrumbItem>
        </Breadcrumb> 
        <Spacer />

        <HStack spacing="20px">
            <IconButton aria-label='Manual' icon={<FiBook />} /> 

            <IconButton aria-label='Notificações' icon={<FiBell />} /> 
    
            <Divider  colorScheme="black"  orientation='vertical' />

            <IconButton aria-label='Logout' onClick={() => keycloak.logout()} icon={<FiLogOut />} /> 
           
        </HStack>

    </Flex>

    )
}

