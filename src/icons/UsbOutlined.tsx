// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UsbOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsbOutlined';

export interface UsbOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UsbOutlined: UsbOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={UsbOutlinedSvg} />;

UsbOutlined.displayName = 'UsbOutlined';

export default FunctionalComponent;