// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import FrownOutlinedSvg from '@ant-design/icons-svg/lib/asn/FrownOutlined';

export interface FrownOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FrownOutlined: FrownOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={FrownOutlinedSvg} />
    ;

FrownOutlined.displayName = 'FrownOutlined';

export default FrownOutlined;