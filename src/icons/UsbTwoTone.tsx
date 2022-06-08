// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UsbTwoToneSvg from '@ant-design/icons-svg/lib/asn/UsbTwoTone';

export interface UsbTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UsbTwoTone: UsbTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={UsbTwoToneSvg} />;

UsbTwoTone.displayName = 'UsbTwoTone';

export default FunctionalComponent;