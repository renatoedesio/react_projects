import * as React from 'react';
import { useEffect } from 'react';

import { useKeycloak } from '@react-keycloak/web';

const Login = () => {
  const { keycloak } = useKeycloak();

  useEffect(() => {
    async function fetchData() {
      // You can await here
      keycloak?.login();
      // ...
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //

  return (
    <div>
      <h1>Carregando keyclock...</h1>
    </div>
  );
};

export default Login;
