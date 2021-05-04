import { WepyComponent } from '@wepy/core/types/wepy'

interface Component {
    animate(selector: string, keyframes: any[], duration: number, callback: Function);
    clearAnimation(selector: string, keyframes: any, callback: Function);
    selectComponent(selector: string): any;
}

declare module '@wepy/core/types/wepy' {
    export interface WepyComponent {
        readonly $wx: Component;
    }
}