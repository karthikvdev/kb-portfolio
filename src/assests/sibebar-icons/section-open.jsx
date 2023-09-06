import React from 'react'

const SectionOpen = ({ styles }) => {
  return (
    <svg style={styles} width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_64_2704)">
        <path d="M8.74998 6.65186L4.49997 0.651856L13 0.651855L8.74998 6.65186Z" fill="white" />
      </g>
      <defs>
        <filter id="filter0_d_64_2704" x="0.5" y="0.651855" width="16.5" height="14" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={"0"} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_64_2704" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_64_2704" result="shape" />
        </filter>
      </defs>
    </svg>

  )
}

export default SectionOpen;