// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import RadiusBottomrightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusBottomrightOutlined';

export interface RadiusBottomrightOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RadiusBottomrightOutlined: RadiusBottomrightOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={RadiusBottomrightOutlinedSvg} />
    ;

RadiusBottomrightOutlined.displayName = 'RadiusBottomrightOutlined';

export default RadiusBottomrightOutlined;