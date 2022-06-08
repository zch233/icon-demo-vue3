// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import StrikethroughOutlinedSvg from '@ant-design/icons-svg/lib/asn/StrikethroughOutlined';

export interface StrikethroughOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const StrikethroughOutlined: StrikethroughOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={StrikethroughOutlinedSvg} />;

StrikethroughOutlined.displayName = 'StrikethroughOutlined';

export default FunctionalComponent;