import { AppWrapper, Footer, Header, Main } from "./app-layout.style";

interface AppLayoutProps {}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <AppWrapper>
      <Header></Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </AppWrapper>
  );
};
