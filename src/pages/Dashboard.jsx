import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Divider, Flex, HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";


export default function Dashboard() {
  const tasks = useLoaderData() // precisa adicionar o loader={tasksLoader} la no app.json pra funcionar

  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    m: "10px",
    textAlign: "center" ,
    ':hover' : {
      color: 'black', 
      bg: 'blue.200'
    }
  } 
  return (
    <>
        
        
        
      {
      /*
      <SimpleGrid  spacing={10} minChildWidth="300px">

        {tasks && tasks.map(task => (
    
          <Card key={task.id} borderTop={"8px"} borderColor={"purple.400"} bg="white">
            <CardHeader>
              <Flex gap={5}>
                <Box w="50px" h="50px">
                  <Text>AV</Text>
                </Box>

                <Box>
                  <Heading as="h3" size="sm">{task.title}</Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color={"gray.500"}>
              <Text>{task.description}</Text>
            </CardBody>
            <Divider borderColor={"gray.200"} />
            <CardFooter>
              <HStack>
                <Button variant={"ghost"} leftIcon={<ViewIcon/>}>Watch</Button>
                <Button leftIcon={<EditIcon/>}>Comment</Button>
              </HStack>
            
            </CardFooter>
          </Card>





        ))}
      </SimpleGrid>

       */
      }

    </>
  )
}

// tem que instalar o json-server: npm install -g json-server
// depois carregar o servico: json-server -w ./data/db.json
// esse metodo vai carregar os dados
// pra rodar  o servidor npm run dev
export const tasksLoader = async () => {
  const res = await fetch('http://localhost:3000/tasks')

  return res.json()
}