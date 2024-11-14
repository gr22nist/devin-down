import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  title?: string
  viewBox?: string
  className?: string
}

const Icon = ({ 
  title, 
  fill, 
  width, 
  height, 
  className, 
  children, 
  viewBox = "0 0 24 24",
  ...props 
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    fill={fill}
    width={width}
    height={height}
    className={className}
    {...props}
  >
    {title && <title>{title}</title>}
    {children}
  </svg>
)

export default Icon 