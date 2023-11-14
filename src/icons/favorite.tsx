import { SVGProps } from "react"

export const FavoriteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#8A91AB"
      d="M0 2.5C0 1.837.246 1.201.683.732A2.257 2.257 0 0 1 2.333 0h9.334c.619 0 1.212.263 1.65.732.437.47.683 1.105.683 1.768v16.875a.66.66 0 0 1-.083.321.603.603 0 0 1-.225.23.551.551 0 0 1-.598-.03L7 16.375l-6.093 3.52a.557.557 0 0 1-.824-.2.66.66 0 0 1-.083-.32V2.5Zm2.333-1.25c-.31 0-.606.132-.825.366a1.297 1.297 0 0 0-.341.884v15.708l5.51-3.103a.556.556 0 0 1 .646 0l5.51 3.103V2.5c0-.331-.123-.65-.341-.884a1.129 1.129 0 0 0-.825-.366H2.333Z"
    />
  </svg>
)
