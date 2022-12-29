import styled from 'styled-components';
import { Link } from "react-router-dom";
export const FilmBox = styled.div`
display:flex;
margin-bottom:20px`

export const FilmInfoDiv = styled.div`
margin-left:20px
`
export const FilmInfoSpan = styled.span`  
font-weight: 700;
margin-bottom:5px
`
export const FilmInfoTitle= styled.h2`
margin-bottom:10px`

export const FilmInfoItem= styled.li`
:not(:last-child){margin-bottom:8px}
`
export const FilmAddTitle =styled.p`
font-weight: 700;
margin-bottom: 10px;
`
export const FilmAddItem= styled.li`
:not(:last-child){margin-bottom:8px}
`
export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: orphans;
  text-decoration: none;
:hover {
    color: orangered;
  }
`
export const FilmAddList= styled.ul`
list-style: inside;`

