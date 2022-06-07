// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CarryOutOutlinedSvg from '@ant-design/icons-svg/lib/asn/CarryOutOutlined';

export interface CarryOutOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CarryOutOutlined: CarryOutOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CarryOutOutlinedSvg} />
    ;

CarryOutOutlined.displayName = 'CarryOutOutlined';

export default FunctionalComponent;