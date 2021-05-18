import * as React from "react";
import Button from "../components/Main/Button";
import Layout from "../components/Main/Layout";

const IndexPage = () => (
  <>
    <Layout title={'Baustack'} metaDescription={'Tablas inteligentes'}>
      <Button to={"/"}>PRUEBA GRATUITA</Button>
    </Layout>
  </>
);

export default IndexPage;
