// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RocketTwoToneSvg from '@ant-design/icons-svg/lib/asn/RocketTwoTone';

export interface RocketTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RocketTwoTone: RocketTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={RocketTwoToneSvg} />;

RocketTwoTone.displayName = 'RocketTwoTone';

export default FunctionalComponent;