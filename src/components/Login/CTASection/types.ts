export interface iCTASectionButton {
    title: string;
    icon?: JSX.Element;
    onPress?: () => void;
}

export interface Props {
    buttons: iCTASectionButton[]
}