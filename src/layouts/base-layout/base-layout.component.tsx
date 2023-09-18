import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";


export const BaseLayout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};
