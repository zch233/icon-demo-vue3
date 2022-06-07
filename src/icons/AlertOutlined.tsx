// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import AlertOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlertOutlined';

export interface AlertOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AlertOutlined: AlertOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={AlertOutlinedSvg} />
    ;

AlertOutlined.displayName = 'AlertOutlined';

export default AlertOutlined;