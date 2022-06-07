// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PrinterOutlinedSvg from '@ant-design/icons-svg/lib/asn/PrinterOutlined';

export interface PrinterOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PrinterOutlined: PrinterOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PrinterOutlinedSvg} />
    ;

PrinterOutlined.displayName = 'PrinterOutlined';

export default FunctionalComponent;