import Avatar from "./components/Home/Avatar";
import Wrapper from "./components/Wrapper";
import Content from "./components/Home/Content";
import Footer from "./components/Footer";

export const metadata = {
  title: 'Lee',
};

const Home = () => {
	return (
  <div>
    <Wrapper>
      <Avatar />
      <Content />
      <Footer />
    </Wrapper>
  </div>
  );i
};

export default Home;
