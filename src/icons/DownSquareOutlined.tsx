// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import DownSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownSquareOutlined';

export interface DownSquareOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DownSquareOutlined: DownSquareOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={DownSquareOutlinedSvg} />
    ;

DownSquareOutlined.displayName = 'DownSquareOutlined';

export default DownSquareOutlined;