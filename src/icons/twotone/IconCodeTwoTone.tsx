// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodeTwoToneSvg from 'icon-base/es/asn/CodeTwoTone';

export interface CodeTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCodeTwoTone: CodeTwoToneIconType = (props, context) => <Icon name='CodeTwoTone' {...{ ...props, ...context.attrs }} icon={CodeTwoToneSvg} />;

IconCodeTwoTone.displayName = 'IconCodeTwoTone';
IconCodeTwoTone.theme = 'twotone';
IconCodeTwoTone.originName = 'code';

export default IconCodeTwoTone;
