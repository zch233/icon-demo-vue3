// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import StepForwardFilledSvg from '@ant-design/icons-svg/lib/asn/StepForwardFilled';

export interface StepForwardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const StepForwardFilled: StepForwardFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={StepForwardFilledSvg} />;

StepForwardFilled.displayName = 'StepForwardFilled';

export default FunctionalComponent;