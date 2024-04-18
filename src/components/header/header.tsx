import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="flex h-[70px] px-[15px]">
                    <div className="flex items-center">
                        <img src={'/images/ubitsBasic.png'} width={'75px'} height={'25px'} alt="" />
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;