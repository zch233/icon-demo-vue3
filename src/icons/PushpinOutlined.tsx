// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PushpinOutlinedSvg from '@ant-design/icons-svg/lib/asn/PushpinOutlined';

export interface PushpinOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PushpinOutlined: PushpinOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PushpinOutlinedSvg} />;

PushpinOutlined.displayName = 'PushpinOutlined';

export default FunctionalComponent;