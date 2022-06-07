// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import BorderInnerOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderInnerOutlined';

export interface BorderInnerOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BorderInnerOutlined: BorderInnerOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={BorderInnerOutlinedSvg} />
    ;

BorderInnerOutlined.displayName = 'BorderInnerOutlined';

export default BorderInnerOutlined;