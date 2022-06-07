// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import TaobaoSquareFilledSvg from '@ant-design/icons-svg/lib/asn/TaobaoSquareFilled';

export interface TaobaoSquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TaobaoSquareFilled: TaobaoSquareFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={TaobaoSquareFilledSvg} />
    ;

TaobaoSquareFilled.displayName = 'TaobaoSquareFilled';

export default FunctionalComponent;