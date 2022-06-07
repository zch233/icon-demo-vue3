// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import GoldenFilledSvg from '@ant-design/icons-svg/lib/asn/GoldenFilled';

export interface GoldenFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const GoldenFilled: GoldenFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={GoldenFilledSvg} />
    ;

GoldenFilled.displayName = 'GoldenFilled';

export default GoldenFilled;