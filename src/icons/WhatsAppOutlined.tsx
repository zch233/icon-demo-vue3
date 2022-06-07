// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import WhatsAppOutlinedSvg from '@ant-design/icons-svg/lib/asn/WhatsAppOutlined';

export interface WhatsAppOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const WhatsAppOutlined: WhatsAppOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={WhatsAppOutlinedSvg} />
    ;

WhatsAppOutlined.displayName = 'WhatsAppOutlined';

export default FunctionalComponent;