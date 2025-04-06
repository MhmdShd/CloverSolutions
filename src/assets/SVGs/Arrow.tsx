interface ArrowProps {
  height: number
  width: number
}

const Arrow = ({ height, width }: ArrowProps) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox='0 0 278 91'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M272.486 35.4335C279.777 40.1644 279.777 50.8356 272.486 55.5665L221.782 88.4676C213.798 93.648 203.25 87.9181 203.25 78.4011L203.25 12.5989C203.25 3.0819 213.798 -2.64797 221.782 2.5324L272.486 35.4335Z'
        fill='#375A0F'
      />
      <rect y='14' width='211' height='62' rx='12' fill='#375A0F' />
    </svg>
  )
}

export { Arrow }
