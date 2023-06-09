import { Outlet } from "react-router-dom"
import { Box, Flex, Grid, GridItem, HStack, IconButton, Text } from "@chakra-ui/react"
import Sidebar from "./sidebar/Sidebar"
import Navbar from "./navbar/Navbar"

export default function RootLayout() {
  return (
    <HStack w={"full"} h={"100vh"} bg={"gray.100"} padding={5}>
      <Flex as="aside">
          <Sidebar /> {/* SideBar eh onde fica listado os itens de menu, foto do perfil, etc */}
      </Flex>
      <Flex as="main" w="full" p={5} h="full" direction={"column"} justifyContent={"flex-start"}>
          <Box w={"100%"}>
            <Navbar />  {/* Navbar eh top da pagina. Onde fica o breadcrub e botoes pra sair */}
          </Box>
          <Box  w={"100%"}>
              <Outlet />
          </Box>
        </Flex>
    </HStack>

  )
}
