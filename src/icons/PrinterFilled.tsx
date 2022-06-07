// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PrinterFilledSvg from '@ant-design/icons-svg/lib/asn/PrinterFilled';

export interface PrinterFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PrinterFilled: PrinterFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PrinterFilledSvg} />
    ;

PrinterFilled.displayName = 'PrinterFilled';

export default FunctionalComponent;