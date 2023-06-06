import { Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useState } from "react";
import Evento from "../components/Testes/Evento";
import SeuNome from "../components/Testes/SeuNome";

export default function Profile() {
  const [nome, setNome] = useState() // usado no UseState
  
  function alterarUsuario(e) {
    e.preventDefault()
    console.log(`Nome: ${name}`)
    console.log(`Endereco: ${endereco}`)
  }

  const [nameStateLift, setNameStateLift] = useState('Nome Teste')
  const [endereco, setEndereco] = useState('Endereco Teste')

  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant={"enclosed"}>
      <TabList>
        <Tab _selected={{color: 'white', bg: 'purple.400'}}>Eventos</Tab>
        <Tab _selected={{color: 'white', bg: 'purple.400'}}>State Lift</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Evento/>
          <form onSubmit={alterarUsuario}>
            <div>
              <label htmlFor="name">Nome:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={name}
                placeholder="Digite seu nome" 
                onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div>
              <label htmlFor="endereco">Endereço</label>
              <input type="text" id="endereco" name="endereco" placeholder="Digite seu Endereço" />
            </div>

            <div>
              <input type="submit" value="Alterar" />
            </div>
          </form>
          
        </TabPanel>
        


        <TabPanel>
            Usado para um componente filho preencher um valor que vai ser usado no componente pai. Exemplo. o nameStateLift foi declarado nessa classe mas quem seta ele é o componente SeuNome
            <SeuNome setNome={setNameStateLift}/>
            {nameStateLift}


        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
