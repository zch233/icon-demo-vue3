// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import YahooFilledSvg from '@ant-design/icons-svg/lib/asn/YahooFilled';

export interface YahooFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const YahooFilled: YahooFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={YahooFilledSvg} />
    ;

YahooFilled.displayName = 'YahooFilled';

export default YahooFilled;