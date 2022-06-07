// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import MacCommandOutlinedSvg from '@ant-design/icons-svg/lib/asn/MacCommandOutlined';

export interface MacCommandOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MacCommandOutlined: MacCommandOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={MacCommandOutlinedSvg} />
    ;

MacCommandOutlined.displayName = 'MacCommandOutlined';

export default MacCommandOutlined;