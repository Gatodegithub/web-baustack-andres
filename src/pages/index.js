import * as React from "react";
import Layout from "../components/main/Layout";
import PublicHeader from '../components/PublicHeader';
import SectionFeatures from "../components/SectionFeatures";
import SectionWhatWeDo from "../components/SectionWhatWeDo";

const IndexPage = () => (
  <>
    <Layout title={'Baustack'} metaDescription={'Tablas inteligentes'}>
      <PublicHeader />
      <SectionFeatures />
      <SectionWhatWeDo />
    </Layout>
  </>
);

export default IndexPage;
