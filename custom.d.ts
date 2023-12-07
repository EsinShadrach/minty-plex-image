declare module "@hcorta/react-to-image" {
  export interface ToImageOptions {
    width?: number | null;
    height?: number | null;
    backgroundColor?: string;
    style?: React.CSSProperties;
    quality?: number;
    cacheBust?: boolean;
    imagePlaceholder?: string;
    pixelRatio?: number;
    filter?: (node: HTMLElement) => boolean;
  }

  export interface ToImageResult {
    ref: any;
    isLoading: boolean;
    getPng: () => void;
  }

  export function useToImage(options: ToImageOptions): ToImageResult;
}
