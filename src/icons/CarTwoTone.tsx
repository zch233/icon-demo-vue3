// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CarTwoTone';

export interface CarTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CarTwoTone: CarTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CarTwoToneSvg} />
    ;

CarTwoTone.displayName = 'CarTwoTone';

export default FunctionalComponent;