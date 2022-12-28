import { Outlet } from "react-router-dom";


import { Link,Container, Header} from "./SharedLayout.styled";
export const SharedLayout = () => {return (
    <Container>
        
     
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