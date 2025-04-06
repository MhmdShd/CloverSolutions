declare module "*.svg" {
  const svgComponent: React.FC<React.SVGAttributes<SVGElement>>
  export default svgComponent
}

declare module "*.png" {
  const imageSourceUrl: string
  export default imageSourceUrl
}
