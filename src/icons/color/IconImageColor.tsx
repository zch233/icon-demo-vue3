// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ImageColorSvg from 'icon-base/es/asn/ImageColor';

export interface ImageColorIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconImageColor: ImageColorIconType = (props, context) => (
    <Icon name='ImageColor' {...{ ...props, ...context.attrs }} icon={ImageColorSvg} />
);

IconImageColor.displayName = 'IconImageColor';

export default IconImageColor;