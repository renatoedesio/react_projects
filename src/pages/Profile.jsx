import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant={"enclosed"}>
      <TabList>
        <Tab _selected={{color: 'white', bg: 'purple.400'}}>Account Info</Tab>
        <Tab _selected={{color: 'white', bg: 'purple.400'}}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          Teste panel 1
        </TabPanel>

        <TabPanel>
          Teste panel 2
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
