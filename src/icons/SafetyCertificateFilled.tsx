// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SafetyCertificateFilledSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateFilled';

export interface SafetyCertificateFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SafetyCertificateFilled: SafetyCertificateFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SafetyCertificateFilledSvg} />
    ;

SafetyCertificateFilled.displayName = 'SafetyCertificateFilled';

export default FunctionalComponent;