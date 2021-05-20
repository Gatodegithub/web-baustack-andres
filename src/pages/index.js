import * as React from "react";
import Layout from "../components/helpers/Layout";
import PublicHeader from '../components/header/PublicHeader';
import SectionFeatures from "../components/sectionFeatures/SectionFeatures";
import SectionWhatWeDo from "../components/SectionWhatWeDo/SectionWhatWeDo";
import Footer from "../components/footer/Footer";

const IndexPage = () => (
  <>
    <Layout title={'Baustack'} metaDescription={'Tablas inteligentes'}>
      <PublicHeader />
      <SectionFeatures />
      <SectionWhatWeDo />
      <Footer />
    </Layout>
  </>
);

export default IndexPage;
