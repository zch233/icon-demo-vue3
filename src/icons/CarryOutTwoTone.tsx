// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CarryOutTwoToneSvg from '@ant-design/icons-svg/lib/asn/CarryOutTwoTone';

export interface CarryOutTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CarryOutTwoTone: CarryOutTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CarryOutTwoToneSvg} />
    ;

CarryOutTwoTone.displayName = 'CarryOutTwoTone';

export default FunctionalComponent;