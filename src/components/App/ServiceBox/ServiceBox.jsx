import React from 'react'
import { Wrapper, ServiceBoxTitle, ServiceBoxInfo, ServiceBoxButton, Box} from './ServiceBox.styles'

function ServiceBox() {
    return <Wrapper>
        <Box>
        <div>
            <ServiceBoxTitle>Some of our top services</ServiceBoxTitle>
            <ServiceBoxInfo>Ut eleifend libero sed neque rhoncus
                    consequat. Maecenas tincidunt, augue et
                    rutrum condimentum, libero lectus mattis orci,
                    ut commodo.
            </ServiceBoxInfo>
        </div>
        <ServiceBoxButton>View More</ServiceBoxButton>
        </Box>
        
    </Wrapper>
    
}

export default ServiceBox;