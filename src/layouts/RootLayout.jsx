import { Outlet } from "react-router-dom"
import { Flex, Grid, GridItem, IconButton, Text } from "@chakra-ui/react"
import Sidebar from "./sidebar/Sidebar"
import Navbar from "./navbar/Navbar"

export default function RootLayout() {
  return (
    <Flex w="100%">
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
        <GridItem
          as="aside"
          colSpan={{base: 6, lg:2, xl:1 }}
          minHeight={{lg:'100hv'}}
          p={{base: '20px', lg:'20px' }}
        > 
          <Sidebar />
 
        </GridItem>
            <GridItem
              as="main"
              colSpan={{base: 6, lg:4, xl: 5 }}
              p="40px"
            >
          <Navbar />
          <Outlet />
        </GridItem>
      </Grid>



    </Flex>

      /*
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
        <GridItem
          as="aside"
          colSpan={{base: 6, lg:2, xl:1 }}
          bg={"purple.400"}
          minHeight={{lg:'100hv'}}
          p={{base: '20px', lg:'20px' }}
        > 
          <Sidebar />
 
        </GridItem>
            <GridItem
              as="main"
              colSpan={{base: 6, lg:4, xl: 5 }}
              p="40px"
            >
          <Navbar />
          <Outlet />
        </GridItem>
      </Grid>
    */
  )
}
