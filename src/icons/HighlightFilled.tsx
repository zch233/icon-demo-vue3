// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import HighlightFilledSvg from '@ant-design/icons-svg/lib/asn/HighlightFilled';

export interface HighlightFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const HighlightFilled: HighlightFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={HighlightFilledSvg} />
    ;

HighlightFilled.displayName = 'HighlightFilled';

export default HighlightFilled;