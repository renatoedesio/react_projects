import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Tag, useDisclosure } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Image} from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'

export default function Ocorrencia() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (


    
    <>
      <Heading mb={5}>Ocorrências</Heading>

      <Card mb={5} >
        <CardHeader backgroundColor={"#F7FAFC"}>
          <Heading size='md'>Sobre a solicitação</Heading>
        </CardHeader>

        <CardBody>
          <Text>Recentemente, um incidente chocante ocorreu envolvendo um caminhão que foi incendiado. A ocorrência deixou marcas de destruição e levantou questões sobre a segurança dos veículos nas estradas. O incêndio consumiu completamente o caminhão, transformando-o em uma massa retorcida de metal carbonizado. As autoridades estão investigando as causas do incidente, enquanto o proprietário do veículo lida com as consequências devastadoras desse evento. Espera-se que medidas de segurança mais rigorosas sejam implementadas para evitar futuros incidentes semelhantes e proteger a vida dos motoristas e a integridade dos veículos nas vias públicas.</Text>
        </CardBody>
      </Card>

      <Heading size='md'>Materiais</Heading>
      <p>Você tem <b>3 materiais</b> para serem avaliados</p>

      <Card mt={2} >
        <TableContainer >
          <Table  >
            <Thead backgroundColor={"#F7FAFC"} mt={5}>
              <Tr>
                <Th>Nome do material</Th>
                <Th>Status</Th>
                <Th>Fotos anexadas</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Caminhão vermelho</Td>
                <Td><Tag colorScheme='orange'>Pendente</Tag></Td>
                <Td> <Button rightIcon={<ExternalLinkIcon />} onClick={onOpen}></Button></Td>
              </Tr>
              <Tr>
                <Td>Ocorrência de caminhão</Td>
                <Td><Tag colorScheme='green'> Recebido</Tag></Td>
                <Td> <Button rightIcon={<ExternalLinkIcon />} onClick={onOpen}></Button></Td>
              </Tr>
              <Tr>
                <Td>Ocorrência de caminhão</Td>
                <Td><Tag colorScheme='orange'>Pendente</Tag></Td>
                <Td> <Button rightIcon={<ExternalLinkIcon />} onClick={onOpen}></Button></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Card>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Galeria de Fotos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Box boxSize='sm' display={'flex'} justifyContent={'center'}>
            <Image src='https://bit.ly/2Z4KKcF' alt='Dan Abramov' />
          </Box>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Fechar
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>


    </>
  )
}
