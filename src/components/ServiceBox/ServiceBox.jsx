import React from 'react'
import { Wrapper, Box } from './ServiceBox.styles'

function ServiceBox() {
    return <Wrapper>
        <Box>
            <div>
                <h2>Some of our top services</h2>
                <p>Ut eleifend libero sed neque rhoncus
                consequat. Maecenas tincidunt, augue et
                rutrum condimentum, libero lectus mattis orci,
                ut commodo.
            </p>
            </div>
            <a>View More</a>
        </Box>
    </Wrapper>
}

export default ServiceBox;