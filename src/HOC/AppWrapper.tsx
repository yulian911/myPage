import React from 'react'
import styled from 'styled-components'
import NavigationDots from '../components/NavigationDots/NavigationDots'
import SocialMedia from '../components/SocialMedia/SocialMedia'

interface IStyled {
  background: string | null;
 
}

const AppWrapper = (Component :any,id :any, background:any ) => function HOC() {
  return (
    <Box id={id} background={background}>
        <SocialMedia/>
        <div className='app__wrapper app__flex'>
            <Component />

        </div>
      
        <NavigationDots active={id}/>

    </Box>
  )
}

export default AppWrapper

export const Box = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  background: ${(props: IStyled) => props.background};
`;