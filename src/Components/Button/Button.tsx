import React from 'react'

interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  return <div>Button</div>
}

export default Button
