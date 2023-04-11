import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "http://10.10.3.4:8082/",
  realm: "ivf",
  clientId: "test_frontend"
});

export default keycloak;
