// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import StopOutlinedSvg from '@ant-design/icons-svg/lib/asn/StopOutlined';

export interface StopOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const StopOutlined: StopOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={StopOutlinedSvg} />
    ;

StopOutlined.displayName = 'StopOutlined';

export default StopOutlined;