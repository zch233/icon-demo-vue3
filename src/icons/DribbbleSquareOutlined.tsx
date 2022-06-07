// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import DribbbleSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/DribbbleSquareOutlined';

export interface DribbbleSquareOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DribbbleSquareOutlined: DribbbleSquareOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={DribbbleSquareOutlinedSvg} />
    ;

DribbbleSquareOutlined.displayName = 'DribbbleSquareOutlined';

export default DribbbleSquareOutlined;