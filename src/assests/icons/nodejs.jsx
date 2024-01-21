import React from 'react'

const NodeJsIcon = ({ theme }) => {
    return (
        <>
            {!theme && <svg width="34" height="34" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7262 0.77637C14.4976 0.334819 15.5024 0.332824 16.2732 0.77637C20.1507 2.96739 24.0295 5.15498 27.9064 7.34734C28.6356 7.75809 29.1234 8.56961 29.1159 9.40983V22.5919C29.1214 23.4669 28.5854 24.2978 27.8161 24.6992C23.9513 26.8782 20.0884 29.0598 16.2243 31.2387C15.4369 31.6889 14.412 31.6543 13.6492 31.1672C12.4906 30.4955 11.3299 29.8271 10.1711 29.1561C9.93432 29.0149 9.6674 28.9026 9.50019 28.673C9.64801 28.4738 9.91227 28.4489 10.127 28.362C10.6107 28.2082 11.0549 27.9613 11.4992 27.7217C11.6116 27.6448 11.7487 27.6743 11.8564 27.7431C12.8472 28.3112 13.8293 28.8958 14.8234 29.4585C15.0355 29.5809 15.2502 29.4184 15.4315 29.3173C19.2241 27.1738 23.0213 25.0384 26.8132 22.8943C26.9537 22.8267 27.0314 22.6775 27.02 22.5236C27.0226 18.1751 27.0206 13.8259 27.0213 9.47742C27.0374 9.3028 26.9363 9.14224 26.7784 9.07077C22.927 6.9018 19.0776 4.7295 15.2268 2.55997C15.1601 2.5141 15.0811 2.48949 15.0001 2.48938C14.9192 2.48926 14.8401 2.51363 14.7732 2.55931C10.9225 4.7295 7.07371 6.90379 3.22297 9.07266C3.06562 9.14424 2.96003 9.30213 2.97875 9.47742C2.97942 13.8259 2.97875 18.1751 2.97875 22.5243C2.97208 22.5994 2.98857 22.6747 3.02601 22.7402C3.06346 22.8056 3.12005 22.858 3.18817 22.8903C4.21576 23.473 5.24468 24.0516 6.27294 24.6323C6.85222 24.9441 7.56346 25.1294 8.20169 24.8905C8.7649 24.6885 9.1597 24.1138 9.14895 23.5158C9.15427 19.1927 9.14629 14.8689 9.15294 10.5465C9.13887 10.3545 9.32092 10.196 9.50751 10.214C10.0012 10.2107 10.4957 10.2074 10.9894 10.2154C11.1955 10.2107 11.3373 10.4174 11.3118 10.6107C11.3098 14.9612 11.3171 19.3118 11.3085 23.6622C11.3098 24.8217 10.8335 26.0833 9.76103 26.6506C8.43981 27.335 6.80679 27.1899 5.50152 26.5336C4.37155 25.9696 3.29321 25.304 2.1833 24.6998C1.412 24.3006 0.878699 23.4663 0.884129 22.592V9.40983C0.87604 8.55221 1.38319 7.72595 2.1351 7.32119C5.99925 5.14047 9.86274 2.95809 13.7262 0.77637Z" fill="#8CC84B" />
                <path d="M17.0973 9.90765C18.7826 9.79918 20.5869 9.84339 22.1034 10.6736C23.2776 11.3099 23.9286 12.6452 23.9493 13.9496C23.9165 14.1256 23.7326 14.2227 23.5646 14.2106C23.0756 14.2099 22.5865 14.2172 22.0975 14.2073C21.8901 14.2152 21.7696 14.024 21.7435 13.8406C21.603 13.2165 21.2626 12.5983 20.6752 12.2972C19.7733 11.8457 18.7277 11.8684 17.7443 11.8778C17.0264 11.916 16.2544 11.9781 15.6462 12.4003C15.1793 12.7201 15.0375 13.3656 15.2041 13.8855C15.3613 14.2588 15.7922 14.3792 16.1447 14.4903C18.1758 15.0214 20.328 14.9686 22.3203 15.6677C23.1451 15.9526 23.952 16.5067 24.2343 17.3703C24.6036 18.5277 24.4417 19.9112 23.6182 20.8404C22.9504 21.605 21.9778 22.0212 21.0077 22.2473C19.7172 22.535 18.3779 22.5423 17.0673 22.4146C15.8349 22.2741 14.5525 21.9503 13.6011 21.1106C12.7876 20.4043 12.3903 19.3037 12.4297 18.2414C12.4392 18.062 12.6178 17.9369 12.7896 17.9516C13.282 17.9477 13.7744 17.9463 14.2669 17.9523C14.4635 17.9382 14.6093 18.1082 14.6194 18.2936C14.7103 18.8883 14.9338 19.5124 15.4523 19.865C16.4531 20.5106 17.7088 20.4664 18.8548 20.4845C19.8041 20.4424 20.8698 20.4296 21.6446 19.8022C22.0533 19.4443 22.1744 18.8455 22.064 18.3304C21.9443 17.8955 21.4893 17.6928 21.0987 17.5603C19.0937 16.926 16.9174 17.1562 14.9318 16.439C14.1257 16.1541 13.3462 15.6155 13.0365 14.7873C12.6044 13.6152 12.8024 12.1655 13.7122 11.2677C14.5993 10.3746 15.8798 10.0306 17.0973 9.90754V9.90765Z" fill="#8CC84B" />
            </svg>}

            {theme && <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.7262 12.7764C27.4976 12.3348 28.5024 12.3328 29.2732 12.7764C33.1507 14.9674 37.0295 17.155 40.9064 19.3473C41.6356 19.7581 42.1234 20.5696 42.1159 21.4098V34.5919C42.1214 35.4669 41.5854 36.2978 40.8161 36.6992C36.9513 38.8782 33.0884 41.0598 29.2243 43.2387C28.4369 43.6889 27.412 43.6543 26.6492 43.1672C25.4906 42.4955 24.3299 41.8271 23.1711 41.1561C22.9343 41.0149 22.6674 40.9026 22.5002 40.673C22.648 40.4738 22.9123 40.4489 23.127 40.362C23.6107 40.2082 24.0549 39.9613 24.4992 39.7217C24.6116 39.6448 24.7487 39.6743 24.8564 39.7431C25.8472 40.3112 26.8293 40.8958 27.8234 41.4585C28.0355 41.5809 28.2502 41.4184 28.4315 41.3173C32.2241 39.1738 36.0213 37.0384 39.8132 34.8943C39.9537 34.8267 40.0314 34.6775 40.02 34.5236C40.0226 30.1751 40.0206 25.8259 40.0213 21.4774C40.0374 21.3028 39.9363 21.1422 39.7784 21.0708C35.927 18.9018 32.0776 16.7295 28.2268 14.56C28.1601 14.5141 28.0811 14.4895 28.0001 14.4894C27.9192 14.4893 27.8401 14.5136 27.7732 14.5593C23.9225 16.7295 20.0737 18.9038 16.223 21.0727C16.0656 21.1442 15.96 21.3021 15.9788 21.4774C15.9794 25.8259 15.9788 30.1751 15.9788 34.5243C15.9721 34.5994 15.9886 34.6747 16.026 34.7402C16.0635 34.8056 16.12 34.858 16.1882 34.8903C17.2158 35.473 18.2447 36.0516 19.2729 36.6323C19.8522 36.9441 20.5635 37.1294 21.2017 36.8905C21.7649 36.6885 22.1597 36.1138 22.1489 35.5158C22.1543 31.1927 22.1463 26.8689 22.1529 22.5465C22.1389 22.3545 22.3209 22.196 22.5075 22.214C23.0012 22.2107 23.4957 22.2074 23.9894 22.2154C24.1955 22.2107 24.3373 22.4174 24.3118 22.6107C24.3098 26.9612 24.3171 31.3118 24.3085 35.6622C24.3098 36.8217 23.8335 38.0833 22.761 38.6506C21.4398 39.335 19.8068 39.1899 18.5015 38.5336C17.3716 37.9696 16.2932 37.304 15.1833 36.6998C14.412 36.3006 13.8787 35.4663 13.8841 34.592V21.4098C13.876 20.5522 14.3832 19.726 15.1351 19.3212C18.9993 17.1405 22.8627 14.9581 26.7262 12.7764Z" fill="#8CC84B" />
                <path d="M30.0973 21.9077C31.7826 21.7992 33.5869 21.8434 35.1034 22.6736C36.2776 23.3099 36.9286 24.6452 36.9493 25.9496C36.9165 26.1256 36.7326 26.2227 36.5646 26.2106C36.0756 26.2099 35.5865 26.2172 35.0975 26.2073C34.8901 26.2152 34.7696 26.024 34.7435 25.8406C34.603 25.2165 34.2626 24.5983 33.6752 24.2972C32.7733 23.8457 31.7277 23.8684 30.7443 23.8778C30.0264 23.916 29.2544 23.9781 28.6462 24.4003C28.1793 24.7201 28.0375 25.3656 28.2041 25.8855C28.3613 26.2588 28.7922 26.3792 29.1447 26.4903C31.1758 27.0214 33.328 26.9686 35.3203 27.6677C36.1451 27.9526 36.952 28.5067 37.2343 29.3703C37.6036 30.5277 37.4417 31.9112 36.6182 32.8404C35.9504 33.605 34.9778 34.0212 34.0077 34.2473C32.7172 34.535 31.3779 34.5423 30.0673 34.4146C28.8349 34.2741 27.5525 33.9503 26.6011 33.1106C25.7876 32.4043 25.3903 31.3037 25.4297 30.2414C25.4392 30.062 25.6178 29.9369 25.7896 29.9516C26.282 29.9477 26.7744 29.9463 27.2669 29.9523C27.4635 29.9382 27.6093 30.1082 27.6194 30.2936C27.7103 30.8883 27.9338 31.5124 28.4523 31.865C29.4531 32.5106 30.7088 32.4664 31.8548 32.4845C32.8041 32.4424 33.8698 32.4296 34.6446 31.8022C35.0533 31.4443 35.1744 30.8455 35.064 30.3304C34.9443 29.8955 34.4893 29.6928 34.0987 29.5603C32.0937 28.926 29.9174 29.1562 27.9318 28.439C27.1257 28.1541 26.3462 27.6155 26.0365 26.7873C25.6044 25.6152 25.8024 24.1655 26.7122 23.2677C27.5993 22.3746 28.8798 22.0306 30.0973 21.9075V21.9077Z" fill="#8CC84B" />
            </svg>}
        </>
    )
}

export default NodeJsIcon