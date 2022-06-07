// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import HddFilledSvg from '@ant-design/icons-svg/lib/asn/HddFilled';

export interface HddFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const HddFilled: HddFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={HddFilledSvg} />
    ;

HddFilled.displayName = 'HddFilled';

export default HddFilled;