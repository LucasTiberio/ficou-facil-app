export type iLogoType = "logo" | "inline-logo"

export interface Props {
    type?: iLogoType
    useBackground?: boolean
    height?: number
}