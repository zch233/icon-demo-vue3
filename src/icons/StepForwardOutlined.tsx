// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import StepForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/StepForwardOutlined';

export interface StepForwardOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const StepForwardOutlined: StepForwardOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={StepForwardOutlinedSvg} />;

StepForwardOutlined.displayName = 'StepForwardOutlined';

export default FunctionalComponent;