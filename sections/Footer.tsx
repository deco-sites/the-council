import Footer, {
  FooterProps,
} from "deco-sites/the-council/components/footer/Footer.tsx";

export type footerSection = FooterProps;

function footerSection(props: footerSection) {
  return <Footer {...props} />;
}

export default footerSection;
