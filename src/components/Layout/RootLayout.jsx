import { Outlet } from "react-router-dom"
import { Box, Flex, HStack } from "@chakra-ui/react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


export default function RootLayout() {
  return (
    <HStack w={"full"} h={"100vh"} bg={"gray.100"} padding={5}>
      <Flex as="aside">
          <Sidebar /> {/* SideBar eh onde fica listado os itens de menu, foto do perfil, etc */}
      </Flex>
      <Flex as="main" w="full" p={5} h="full" direction={"column"} justifyContent={"flex-start"}>
          <Box w={"100%"}>
            <Navbar />  {/* Navbar eh topo da pagina. Onde fica o breadcrub e botoes pra sair */}
          </Box>
          <Box  w={"100%"}>
              <Outlet /> {/* Outlet eh o conteudo em si */}
          </Box>
        </Flex>
    </HStack>

  )
}
