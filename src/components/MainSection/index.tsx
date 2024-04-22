import styled from "styled-components";

interface MainSectionProps {
    children: React.ReactNode
}

 const StyledMainSection = styled.div`
    overflow: scroll;
`

const MainSection = ({children}: MainSectionProps) => {
    return <StyledMainSection>
        {children}
        </StyledMainSection>
}

export default MainSection;