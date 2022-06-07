// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CaretRightFilledSvg from '@ant-design/icons-svg/lib/asn/CaretRightFilled';

export interface CaretRightFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CaretRightFilled: CaretRightFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CaretRightFilledSvg} />
    ;

CaretRightFilled.displayName = 'CaretRightFilled';

export default FunctionalComponent;