import Image, { type ImageProps } from 'next/image';

type AssetImageProps = Omit<ImageProps, 'alt'> & {
  alt: string;
};

export function AssetImage({ alt, sizes = '(max-width: 768px) 100vw, 50vw', ...props }: AssetImageProps) {
  return <Image alt={alt} sizes={sizes} {...props} />;
}
