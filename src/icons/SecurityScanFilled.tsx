// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SecurityScanFilledSvg from '@ant-design/icons-svg/lib/asn/SecurityScanFilled';

export interface SecurityScanFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SecurityScanFilled: SecurityScanFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SecurityScanFilledSvg} />
    ;

SecurityScanFilled.displayName = 'SecurityScanFilled';

export default FunctionalComponent;