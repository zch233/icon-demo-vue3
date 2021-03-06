// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EnvironmentTwoToneSvg from 'icon-base/es/asn/EnvironmentTwoTone';

export interface EnvironmentTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEnvironmentTwoTone: EnvironmentTwoToneIconType = (props, context) => (
    <Icon name='EnvironmentTwoTone' {...{ ...props, ...context.attrs }} icon={EnvironmentTwoToneSvg} />
);

IconEnvironmentTwoTone.displayName = 'IconEnvironmentTwoTone';
IconEnvironmentTwoTone.theme = 'twotone';
IconEnvironmentTwoTone.originName = 'environment';

export default IconEnvironmentTwoTone;
