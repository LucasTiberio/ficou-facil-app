declare module 'styled-components/native';

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

interface iSvg {
    width?: string | number
    height?: string | number
}

interface iRoute {
    name: string
    hideNavigationBar?: boolean;
    needSession?: boolean;
    component: any
}
