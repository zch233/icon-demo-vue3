// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UsbTwoToneSvg from 'icon-base/es/asn/UsbTwoTone';

export interface UsbTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUsbTwoTone: UsbTwoToneIconType = (props, context) => <Icon name='UsbTwoTone' {...{ ...props, ...context.attrs }} icon={UsbTwoToneSvg} />;

IconUsbTwoTone.displayName = 'IconUsbTwoTone';
IconUsbTwoTone.theme = 'twotone';
IconUsbTwoTone.originName = 'usb';

export default IconUsbTwoTone;
