// slet endel med eslint, node_modules og @babel som ikke ble lagret/lagret riktig.
// fikk corona, ble veldig syk, barna ble syke - begynte på nytt med react-app/sanity fem ganger,
// dette er det jeg har fått til; lage sanity-appeen og dokumentene der, fikk til react app,
// men jeg tror ikke jeg får hentet inn infoen fra sanity til react?
// eller at jeg mangler layouts/pages

//har ikke laget Routes
//jeg håper det kommer frem at jeg virkelig har prøvd så godt jeg kunne

import "./styles.css";
import Movies from "./components/Moviees";

export default function App() {
  return (
    <>
      <Movies />
    </>
  );
}
