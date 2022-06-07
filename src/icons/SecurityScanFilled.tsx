// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import SecurityScanFilledSvg from '@ant-design/icons-svg/lib/asn/SecurityScanFilled';

export interface SecurityScanFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SecurityScanFilled: SecurityScanFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={SecurityScanFilledSvg} />
    ;

SecurityScanFilled.displayName = 'SecurityScanFilled';

export default SecurityScanFilled;