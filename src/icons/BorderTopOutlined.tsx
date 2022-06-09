// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BorderTopOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderTopOutlined';

export interface BorderTopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BorderTopOutlined: BorderTopOutlinedIconType = (props, context) => <Icon name='BorderTopOutlined' {...{ ...props, ...context.attrs }} icon={BorderTopOutlinedSvg} />;

BorderTopOutlined.displayName = 'BorderTopOutlined';

export default BorderTopOutlined;