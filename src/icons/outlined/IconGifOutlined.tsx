// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GifOutlinedSvg from '@ant-design/icons-svg/es/asn/GifOutlined';

export interface GifOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGifOutlined: GifOutlinedIconType = (props, context) => (
    <Icon name='GifOutlined' {...{ ...props, ...context.attrs }} icon={GifOutlinedSvg} />
);

IconGifOutlined.displayName = 'IconGifOutlined';

export default IconGifOutlined;