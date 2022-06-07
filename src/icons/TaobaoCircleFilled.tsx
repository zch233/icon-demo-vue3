// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import TaobaoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TaobaoCircleFilled';

export interface TaobaoCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TaobaoCircleFilled: TaobaoCircleFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={TaobaoCircleFilledSvg} />
    ;

TaobaoCircleFilled.displayName = 'TaobaoCircleFilled';

export default TaobaoCircleFilled;