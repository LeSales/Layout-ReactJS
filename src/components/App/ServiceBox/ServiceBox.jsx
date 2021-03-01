import React from 'react'
import { Wrapper, ServiceBoxTitle, ServiceBoxInfo, ServiceBoxButton} from './ServiceBox.styles'

function ServiceBox() {
    return <Wrapper>
        <div>
            <ServiceBoxTitle>Some of our top services</ServiceBoxTitle>
            <ServiceBoxInfo>Ut eleifend libero sed neque rhoncus
                    consequat. Maecenas tincidunt, augue et
                    rutrum condimentum, libero lectus mattis orci,
                    ut commodo.
            </ServiceBoxInfo>
        </div>
        <ServiceBoxButton>View More</ServiceBoxButton>
    </Wrapper>
    
}

export default ServiceBox;