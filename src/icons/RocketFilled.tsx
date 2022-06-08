// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RocketFilledSvg from '@ant-design/icons-svg/lib/asn/RocketFilled';

export interface RocketFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RocketFilled: RocketFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={RocketFilledSvg} />;

RocketFilled.displayName = 'RocketFilled';

export default FunctionalComponent;