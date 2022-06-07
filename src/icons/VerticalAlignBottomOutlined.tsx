// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import VerticalAlignBottomOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignBottomOutlined';

export interface VerticalAlignBottomOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const VerticalAlignBottomOutlined: VerticalAlignBottomOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={VerticalAlignBottomOutlinedSvg} />
    ;

VerticalAlignBottomOutlined.displayName = 'VerticalAlignBottomOutlined';

export default VerticalAlignBottomOutlined;