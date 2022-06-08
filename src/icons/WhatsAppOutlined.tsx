// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import WhatsAppOutlinedSvg from '@ant-design/icons-svg/lib/asn/WhatsAppOutlined';

export interface WhatsAppOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const WhatsAppOutlined: WhatsAppOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={WhatsAppOutlinedSvg} />;

WhatsAppOutlined.displayName = 'WhatsAppOutlined';

export default WhatsAppOutlined;