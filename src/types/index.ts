export type AnimationFunctionObject = {
    [key: string]: (parentElement: HTMLElement | null, delay?: number, animation?: string) => void;
}