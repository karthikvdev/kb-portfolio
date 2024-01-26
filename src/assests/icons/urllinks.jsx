import React from 'react'
import { THEME } from '../../common/constants'

const UrlLinks = ({ theme }) => {
    return (
        <>
            {(!theme || theme === THEME.LIGHT) && <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2867 7.7133C9.60408 7.031 8.67846 6.64771 7.71334 6.64771C6.74821 6.64771 5.82259 7.031 5.14 7.7133L2.56584 10.2866C1.88324 10.9692 1.49976 11.895 1.49976 12.8604C1.49976 13.8257 1.88324 14.7515 2.56584 15.4341C3.24844 16.1167 4.17424 16.5002 5.13959 16.5002C6.10493 16.5002 7.03074 16.1167 7.71334 15.4341L9 14.1475" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.71335 10.2867C8.39594 10.969 9.32156 11.3523 10.2867 11.3523C11.2518 11.3523 12.1774 10.969 12.86 10.2867L15.4342 7.71334C16.1168 7.03074 16.5003 6.10493 16.5003 5.13959C16.5003 4.17424 16.1168 3.24844 15.4342 2.56584C14.7516 1.88324 13.8258 1.49976 12.8604 1.49976C11.8951 1.49976 10.9693 1.88324 10.2867 2.56584L9.00001 3.8525" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            }
            {theme === THEME.DARK && <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2867 7.7133C9.60408 7.031 8.67846 6.64771 7.71334 6.64771C6.74821 6.64771 5.82259 7.031 5.14 7.7133L2.56584 10.2866C1.88324 10.9692 1.49976 11.895 1.49976 12.8604C1.49976 13.8257 1.88324 14.7515 2.56584 15.4341C3.24844 16.1167 4.17424 16.5002 5.13959 16.5002C6.10493 16.5002 7.03074 16.1167 7.71334 15.4341L9 14.1475" stroke="#FCFCFC" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.71338 10.2867C8.39597 10.969 9.32159 11.3523 10.2867 11.3523C11.2518 11.3523 12.1775 10.969 12.86 10.2867L15.4342 7.71334C16.1168 7.03074 16.5003 6.10493 16.5003 5.13959C16.5003 4.17424 16.1168 3.24844 15.4342 2.56584C14.7516 1.88324 13.8258 1.49976 12.8605 1.49976C11.8951 1.49976 10.9693 1.88324 10.2867 2.56584L9.00005 3.8525" stroke="#FCFCFC" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}
        </>
    )
}

export default UrlLinks