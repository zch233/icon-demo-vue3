// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import MobileOutlinedSvg from '@ant-design/icons-svg/lib/asn/MobileOutlined';

export interface MobileOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MobileOutlined: MobileOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={MobileOutlinedSvg} />
    ;

MobileOutlined.displayName = 'MobileOutlined';

export default MobileOutlined;