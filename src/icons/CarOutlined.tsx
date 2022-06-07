// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CarOutlined';

export interface CarOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CarOutlined: CarOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CarOutlinedSvg} />
    ;

CarOutlined.displayName = 'CarOutlined';

export default FunctionalComponent;