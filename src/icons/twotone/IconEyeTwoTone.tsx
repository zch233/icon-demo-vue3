// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EyeTwoToneSvg from 'icon-base/es/asn/EyeTwoTone';

export interface EyeTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEyeTwoTone: EyeTwoToneIconType = (props, context) => <Icon name='EyeTwoTone' {...{ ...props, ...context.attrs }} icon={EyeTwoToneSvg} />;

IconEyeTwoTone.displayName = 'IconEyeTwoTone';
IconEyeTwoTone.theme = 'twotone';
IconEyeTwoTone.originName = 'eye';

export default IconEyeTwoTone;
