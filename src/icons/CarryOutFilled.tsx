// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CarryOutFilledSvg from '@ant-design/icons-svg/lib/asn/CarryOutFilled';

export interface CarryOutFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CarryOutFilled: CarryOutFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CarryOutFilledSvg} />
    ;

CarryOutFilled.displayName = 'CarryOutFilled';

export default FunctionalComponent;