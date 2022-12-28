import { Outlet } from "react-router-dom";
import { GlobalStyle } from 'CreateGlobalStyle';
import { Toaster } from 'react-hot-toast'
import { Link,Container, Header} from "./SharedLayout.styled";
export const SharedLayout = () => {return (
    <Container>
        <GlobalStyle />
      <Toaster toastOptions={{
      
      error: {duration: 3000,
        style: { border: '1px solid red',
        padding: '16px',
        
          minWidth: '450px',
         
        },
      },
    }} />
      <Header> 
        <nav>
      <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
</nav>
</Header>  
<main>
  <Outlet />
  </main>
</Container>
)}