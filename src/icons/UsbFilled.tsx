// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import UsbFilledSvg from '@ant-design/icons-svg/lib/asn/UsbFilled';

export interface UsbFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const UsbFilled: UsbFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={UsbFilledSvg} />
    ;

UsbFilled.displayName = 'UsbFilled';

export default FunctionalComponent;