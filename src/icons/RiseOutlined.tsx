// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import RiseOutlinedSvg from '@ant-design/icons-svg/lib/asn/RiseOutlined';

export interface RiseOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RiseOutlined: RiseOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={RiseOutlinedSvg} />
    ;

RiseOutlined.displayName = 'RiseOutlined';

export default RiseOutlined;