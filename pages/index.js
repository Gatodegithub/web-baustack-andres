import Header from '@components/Header/Header';
import SectionFooter from '@components/SectionFooter/SectionFooter';
import SectionOne from '@components/SectionOne/SectionOne';
import SectionThree from '@components/SectionThree/SectionThree';
import SectionTwo from '@components/SectionTwo/SectionTwo';

export default function Index() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFooter />
    </>
  );
}
