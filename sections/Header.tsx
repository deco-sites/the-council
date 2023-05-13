import Header, {
  FooterProps,
} from "deco-sites/the-council/components/header/Header.tsx";

export type HeaderSection = FooterProps;

function HeaderSection(props: HeaderSection) {
  return <Header {...props} />;
}

export default HeaderSection;
