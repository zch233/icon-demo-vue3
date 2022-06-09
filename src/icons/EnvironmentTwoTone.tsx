// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import EnvironmentTwoToneSvg from '@ant-design/icons-svg/lib/asn/EnvironmentTwoTone';

export interface EnvironmentTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const EnvironmentTwoTone: EnvironmentTwoToneIconType = (props, context) => <Icon name='EnvironmentTwoTone' {...{ ...props, ...context.attrs }} icon={EnvironmentTwoToneSvg} />;

EnvironmentTwoTone.displayName = 'EnvironmentTwoTone';

export default EnvironmentTwoTone;