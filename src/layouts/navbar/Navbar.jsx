import { BellIcon, CloseIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { Flex, Spacer, HStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, IconButton, Divider, Icon  } from "@chakra-ui/react";
import { FiBook } from "react-icons/fi";
import { FiBell, FiBookOpen, FiLogOut } from "react-icons/fi";

export default function Navbar(){
    return (
        /*
       <Flex bg="gray.200" justify="space-around" wrap="wrap" gap="2">
        <Box w="150px" h="50px" bg="red">1</Box>
        <Box w="150px" h="50px" bg="blue">2</Box>
        <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
        <Box w="150px" h="50px" flexGrow="3" bg="yellow">4</Box>
       </Flex>
       */
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

            <IconButton aria-label='Logout' icon={<FiLogOut />} /> 
           
        </HStack>

    </Flex>

    )
}

