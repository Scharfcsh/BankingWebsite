import React from 'react'

function Button({styles}) {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient text-[18px] rounded-lg font-poppins font-medium text-primary outline-none ${styles}`}>
      Get Started

    </button>
  )
}

export default Button