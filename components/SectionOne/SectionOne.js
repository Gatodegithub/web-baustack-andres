import { ContainerSectionOne, TextContainer, SvgContainer } from './SectionOne.elements';

const SectionOne = () => {
  return (
    <ContainerSectionOne>
      <TextContainer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia veniam quae numquam illo neque minus recusandae accusamus enim fugiat quas cumque pariatur necessitatibus facere perferendis fuga, sunt voluptate excepturi!
        Fugit est, earum quisquam eaque ullam quia harum architecto nam minima quod porro reprehenderit deserunt. Velit ratione facilis sint quisquam! Perspiciatis omnis molestiae minima eum sunt doloribus dolor deserunt enim.
        Aperiam, dolorem. Incidunt, possimus? Minus esse et sapiente perferendis repellendus reiciendis nulla hic, dignissimos aliquam blanditiis molestiae officia itaque corrupti optio cumque temporibus commodi natus ipsum dolorem a, ducimus veniam!
      </TextContainer>
      <SvgContainer src={'/Mockup App.svg'}></SvgContainer>
    </ContainerSectionOne>
  );
};

export default SectionOne;
