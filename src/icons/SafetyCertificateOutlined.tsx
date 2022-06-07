// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SafetyCertificateOutlinedSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateOutlined';

export interface SafetyCertificateOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SafetyCertificateOutlined: SafetyCertificateOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SafetyCertificateOutlinedSvg} />
    ;

SafetyCertificateOutlined.displayName = 'SafetyCertificateOutlined';

export default FunctionalComponent;