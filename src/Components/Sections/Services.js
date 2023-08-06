import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'
import ServiceItem from '../ServiceItem/ServiceItem'
import Title from '../Title/Title'
import { code, design, desktop } from '../../utils/Icons'


function Services() {
    const theme = useTheme()
    return (
        <ServicesStyled id='services' theme={theme}>
            <Title name={'Services'} desc={'Innovative Solutions, Seamless Experiences.'} />
            <div className="services-con">
                <ServiceItem 
                    icon={design} 
                    title={'Web Design'}
                    bg={theme.colorPurple}
                    shadow={theme.shadowPurple}
                    desc={"My design philosophy revolves around the belief that every website should be a reflection of its brand and purpose. I approach each project with meticulous attention to detail, ensuring that the visual elements align seamlessly with the client's objectives. By harmonizing creativity and usability, I aim to create websites that not only look stunning but also deliver an intuitive and delightful user experience."}
                />
                <ServiceItem 
                    icon={desktop}
                    title={'Web Development'}
                    bg={theme.colorGreenDark}
                    shadow={theme.shadowGreen}
                    desc={"Collaboration is at the core of my development process. I value open communication and actively engage with clients to understand their goals and objectives thoroughly. By working closely with stakeholders, I ensure that the final product aligns precisely with their vision, while also providing valuable insights and suggestions to enhance the overall project."}
                />
            </div>
        </ServicesStyled>
    )
}

const ServicesStyled = styled(SectionLayout)`
    background: ${(props) => props.theme.colorBgGrad};
    .services-con{
        margin-top: 3.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2rem;
    }
`;

export default Services