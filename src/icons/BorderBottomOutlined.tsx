// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import BorderBottomOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderBottomOutlined';

export interface BorderBottomOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BorderBottomOutlined: BorderBottomOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={BorderBottomOutlinedSvg} />
    ;

BorderBottomOutlined.displayName = 'BorderBottomOutlined';

export default BorderBottomOutlined;