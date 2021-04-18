import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "50": "#47585B",
        },
        yellow: {
            "500": "#FFBA08",
            "50": "#FFBA08"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: '#FFFFFF',
                color: 'gray.50'
            }
        }
    }
})