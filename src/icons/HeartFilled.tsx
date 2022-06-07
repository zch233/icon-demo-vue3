// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import HeartFilledSvg from '@ant-design/icons-svg/lib/asn/HeartFilled';

export interface HeartFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const HeartFilled: HeartFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={HeartFilledSvg} />
    ;

HeartFilled.displayName = 'HeartFilled';

export default HeartFilled;