// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MinusSquareTwoToneSvg from 'icon-base/es/asn/MinusSquareTwoTone';

export interface MinusSquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMinusSquareTwoTone: MinusSquareTwoToneIconType = (props, context) => (
    <Icon name='MinusSquareTwoTone' {...{ ...props, ...context.attrs }} icon={MinusSquareTwoToneSvg} />
);

IconMinusSquareTwoTone.displayName = 'IconMinusSquareTwoTone';
IconMinusSquareTwoTone.theme = 'twotone';
IconMinusSquareTwoTone.originName = 'minus-square';

export default IconMinusSquareTwoTone;
