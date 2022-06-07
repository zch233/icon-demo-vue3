// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CaretUpFilledSvg from '@ant-design/icons-svg/lib/asn/CaretUpFilled';

export interface CaretUpFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CaretUpFilled: CaretUpFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CaretUpFilledSvg} />
    ;

CaretUpFilled.displayName = 'CaretUpFilled';

export default FunctionalComponent;