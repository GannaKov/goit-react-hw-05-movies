import { Outlet } from "react-router-dom";
import { Suspense } from 'react';
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
<Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
  </main>
</Container>
)
}