import * as React from "react";

import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
};

export default App;