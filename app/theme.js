'use client'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fb631c',
        },
        secondary: {
            main: '#66666',
        },
        icon: {
            main: '#bfbfbf',
        },
        background: {
            default: '#ffffff',
        },
        text: {
            primary: '#000',
            primaryinvert: '#fff',
            secondary: '#333',
            primaryinvert: '#bfbfbf',
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        h1: {
            fontSize: '40rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '30',
            fontWeight: 600,
        },
        h3: {
            fontSize: '25',
            fontWeight: 600,
        },
        h4: {
            fontSize: '20',
            fontWeight: 700,
        },
        h5: {
            fontSize: '18',
            fontWeight: 600,
        },
        h6: {
            fontSize: '14',
            fontWeight: 700,
        },
        body1: {
            fontSize: '1rem',
        },
        button: {
            textTransform: 'capitalize',
        },
    },
    spacing: 8,
    shape: {
        borderRadius: 5,
    }, components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'primary' },
                    style: {
                        textTransform: 'capitalize',
                        backgroundColor: '#fb631c !important',
                        borderRadius: '5px',
                        color: '#fff',
                        position: 'relative'
                    },
                },
            ],
        },
    },
});

export default theme;
