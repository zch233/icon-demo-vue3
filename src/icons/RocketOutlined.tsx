// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import RocketOutlinedSvg from '@ant-design/icons-svg/lib/asn/RocketOutlined';

export interface RocketOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RocketOutlined: RocketOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={RocketOutlinedSvg} />
    ;

RocketOutlined.displayName = 'RocketOutlined';

export default RocketOutlined;