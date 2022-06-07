// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import RadiusUpleftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusUpleftOutlined';

export interface RadiusUpleftOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RadiusUpleftOutlined: RadiusUpleftOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={RadiusUpleftOutlinedSvg} />
    ;

RadiusUpleftOutlined.displayName = 'RadiusUpleftOutlined';

export default RadiusUpleftOutlined;