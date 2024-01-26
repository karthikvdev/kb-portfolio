import React from 'react'
import { THEME } from '../../common/constants'

const AngularIcon = ({ theme }) => {
  return (
    <>
      {!theme && <svg width="34" height="34" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_5519)">
          <path d="M4.59708 5.60098L19.1505 0.444443L34.0959 5.5093L31.676 24.6572L19.1505 31.5556L6.82102 24.7489L4.59708 5.60098Z" fill="#E23237" />
          <path d="M34.0959 5.5093L19.1505 0.444443V31.5556L31.676 24.6687L34.0959 5.5093Z" fill="#B52E31" />
          <path d="M19.1736 4.07699L10.1051 24.1416L13.4928 24.0843L15.3134 19.558H23.4486L25.4421 24.1416L28.68 24.1989L19.1736 4.07699ZM19.1967 10.5055L22.2617 16.8766H16.5002L19.1967 10.5055Z" fill="white" />
        </g>
        <defs>
          <filter id="filter0_d_1_5519" x="0.597076" y="0.444443" width="37.4988" height="39.1111" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5519" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5519" result="shape" />
          </filter>
        </defs>
      </svg>}
      {theme === THEME?.DARK &&
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3325 17.601L27.8051 12.4445L42.6675 17.5093L40.261 36.6572L27.8051 43.5556L15.5441 36.7489L13.3325 17.601Z" fill="#E23237" />
          <path d="M42.6675 17.5093L27.8051 12.4445V43.5556L40.261 36.6688L42.6675 17.5093Z" fill="#B52E31" />
          <path d="M27.828 16.077L18.8099 36.1417L22.1788 36.0844L23.9893 31.558H32.0793L34.0617 36.1417L37.2816 36.199L27.828 16.077ZM27.851 22.5055L30.899 28.8766H25.1695L27.851 22.5055Z" fill="#1E2235" />
        </svg>}
      {theme === THEME?.LIGHT &&
        <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1_5518)">
            <path d="M13.5971 17.601L28.1505 12.4444L43.0959 17.5093L40.676 36.6572L28.1505 43.5556L15.821 36.7489L13.5971 17.601Z" fill="#E23237" />
            <path d="M43.0959 17.5093L28.1505 12.4444V43.5556L40.676 36.6687L43.0959 17.5093Z" fill="#B52E31" />
            <path d="M28.1736 16.077L19.1051 36.1416L22.4928 36.0843L24.3134 31.558H32.4486L34.4421 36.1416L37.68 36.1989L28.1736 16.077ZM28.1967 22.5055L31.2617 28.8766H25.5002L28.1967 22.5055Z" fill="white" />
          </g>
          <defs>
            <filter id="filter0_d_1_5518" x="9.59708" y="12.4444" width="37.4988" height="39.1111" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5518" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5518" result="shape" />
            </filter>
          </defs>
        </svg>
      }
    </>
  )
}

export default AngularIcon