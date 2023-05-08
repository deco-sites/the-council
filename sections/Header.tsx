import Header, {
  HeaderProps,
} from "deco-sites/the-council/components/Header.tsx";

export type HeaderSection = HeaderProps;

function HeaderSection(props: HeaderSection) {
  return <Header {...props} />;
}

export default HeaderSection;
