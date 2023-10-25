import { Helmet } from 'react-helmet-async';
import { TitleH1 } from './HomePage.styled';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <TitleH1>Hi.To use this app go through register form or log in</TitleH1>
    </>
  );
}
