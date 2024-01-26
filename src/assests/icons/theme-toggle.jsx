import React from 'react'
import { THEME } from '../../common/constants'

const ThemeToggle = ({ theme }) => {
    return (
        <svg fill={theme === THEME.DARK ? '#607B96' : "#4D5BCE"} height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M256,0C161.743,0,85.333,76.41,85.333,170.667c0,61.792,33.216,117.521,85.333,147.631v44.369V448 c0,11.782,9.551,21.333,21.333,21.333v21.333c0,11.782,9.551,21.333,21.333,21.333h85.333c11.782,0,21.333-9.551,21.333-21.333 v-21.333c11.782,0,21.333-9.551,21.333-21.333v-85.333v-44.369c52.118-30.11,85.333-85.84,85.333-147.631 C426.667,76.41,350.257,0,256,0z M298.667,426.667c-11.782,0-21.333,9.551-21.333,21.333v21.333h-42.667V448 c0-11.782-9.551-21.333-21.333-21.333V384h85.333V426.667z M310.836,286.164c-7.434,3.536-12.17,11.033-12.17,19.265v35.904 h-85.333v-35.904c0-8.232-4.736-15.729-12.17-19.265C156.814,265.069,128,220.501,128,170.667c0-70.693,57.307-128,128-128 s128,57.307,128,128C384,220.501,355.186,265.069,310.836,286.164z" /> <path d="M256,85.333c-47.131,0-85.333,38.202-85.333,85.333c0,11.782,9.551,21.333,21.333,21.333s21.333-9.551,21.333-21.333 C213.333,147.099,232.433,128,256,128c11.782,0,21.333-9.551,21.333-21.333C277.333,94.885,267.782,85.333,256,85.333z" /> <path d="M490.667,149.333h-21.333c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333h21.333 c11.782,0,21.333-9.551,21.333-21.333C512,158.885,502.449,149.333,490.667,149.333z" /> <path d="M64,170.667c0-11.782-9.551-21.333-21.333-21.333H21.333C9.551,149.333,0,158.885,0,170.667 C0,182.449,9.551,192,21.333,192h21.333C54.449,192,64,182.449,64,170.667z" /> <path d="M448.493,76.23l18.112-11.264c10.005-6.222,13.072-19.377,6.849-29.382c-6.222-10.005-19.377-13.072-29.382-6.849 L425.96,39.998c-10.005,6.222-13.072,19.377-6.849,29.382C425.333,79.386,438.488,82.452,448.493,76.23z" /> <path d="M63.496,265.095l-18.112,11.264c-10.005,6.222-13.072,19.377-6.849,29.382c6.222,10.005,19.377,13.072,29.382,6.849 l18.112-11.264c10.005-6.222,13.072-19.377,6.849-29.382S73.501,258.873,63.496,265.095z" /> <path d="M467.714,274.078l-18.24-11.051c-10.077-6.105-23.195-2.885-29.3,7.192c-6.105,10.077-2.885,23.195,7.192,29.3 l18.24,11.051c10.077,6.105,23.195,2.885,29.3-7.192S477.79,280.183,467.714,274.078z" /> <path d="M44.284,67.244l18.24,11.051c10.077,6.105,23.195,2.885,29.3-7.192s2.885-23.195-7.192-29.3l-18.24-11.051 c-10.077-6.105-23.195-2.885-29.3,7.192S34.207,61.139,44.284,67.244z" /> </g> </g> </g> </g>
        </svg>
    )
}

export default ThemeToggle