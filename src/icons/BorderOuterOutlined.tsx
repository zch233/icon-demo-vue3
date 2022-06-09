// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BorderOuterOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderOuterOutlined';

export interface BorderOuterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BorderOuterOutlined: BorderOuterOutlinedIconType = (props, context) => <Icon name='BorderOuterOutlined' {...{ ...props, ...context.attrs }} icon={BorderOuterOutlinedSvg} />;

BorderOuterOutlined.displayName = 'BorderOuterOutlined';

export default BorderOuterOutlined;