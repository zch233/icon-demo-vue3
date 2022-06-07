// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import ArrowsAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowsAltOutlined';

export interface ArrowsAltOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ArrowsAltOutlined: ArrowsAltOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={ArrowsAltOutlinedSvg} />
    ;

ArrowsAltOutlined.displayName = 'ArrowsAltOutlined';

export default ArrowsAltOutlined;