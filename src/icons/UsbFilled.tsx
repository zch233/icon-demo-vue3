// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UsbFilledSvg from '@ant-design/icons-svg/lib/asn/UsbFilled';

export interface UsbFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UsbFilled: UsbFilledIconType = (props, context) => <Icon name='UsbFilled' {...{ ...props, ...context.attrs }} icon={UsbFilledSvg} />;

UsbFilled.displayName = 'UsbFilled';

export default UsbFilled;