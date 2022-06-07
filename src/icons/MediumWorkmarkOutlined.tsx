// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import MediumWorkmarkOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumWorkmarkOutlined';

export interface MediumWorkmarkOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MediumWorkmarkOutlined: MediumWorkmarkOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={MediumWorkmarkOutlinedSvg} />
    ;

MediumWorkmarkOutlined.displayName = 'MediumWorkmarkOutlined';

export default MediumWorkmarkOutlined;