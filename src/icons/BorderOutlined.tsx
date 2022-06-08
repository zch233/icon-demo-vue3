// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BorderOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderOutlined';

export interface BorderOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BorderOutlined: BorderOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={BorderOutlinedSvg} />;

BorderOutlined.displayName = 'BorderOutlined';

export default FunctionalComponent;