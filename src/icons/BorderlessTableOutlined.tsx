// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import BorderlessTableOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderlessTableOutlined';

export interface BorderlessTableOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BorderlessTableOutlined: BorderlessTableOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={BorderlessTableOutlinedSvg} />
    ;

BorderlessTableOutlined.displayName = 'BorderlessTableOutlined';

export default BorderlessTableOutlined;