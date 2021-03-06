// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CheckSquareTwoToneSvg from 'icon-base/es/asn/CheckSquareTwoTone';

export interface CheckSquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCheckSquareTwoTone: CheckSquareTwoToneIconType = (props, context) => (
    <Icon name='CheckSquareTwoTone' {...{ ...props, ...context.attrs }} icon={CheckSquareTwoToneSvg} />
);

IconCheckSquareTwoTone.displayName = 'IconCheckSquareTwoTone';
IconCheckSquareTwoTone.theme = 'twotone';
IconCheckSquareTwoTone.originName = 'check-square';

export default IconCheckSquareTwoTone;
