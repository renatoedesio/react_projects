import Keycloak from 'keycloak-js'

const url = 'https://keycloak.ace-unb.com/auth';
const realm = 'criminalistica';
const clientId = false ? 'formbuilder-react-dev' : 'formbuilder-react';
const keycloak = new Keycloak({ url, realm, clientId })

export default keycloak
