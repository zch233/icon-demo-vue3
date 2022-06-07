// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import AuditOutlinedSvg from '@ant-design/icons-svg/lib/asn/AuditOutlined';

export interface AuditOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AuditOutlined: AuditOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={AuditOutlinedSvg} />
    ;

AuditOutlined.displayName = 'AuditOutlined';

export default AuditOutlined;