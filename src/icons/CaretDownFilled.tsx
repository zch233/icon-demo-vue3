// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CaretDownFilledSvg from '@ant-design/icons-svg/lib/asn/CaretDownFilled';

export interface CaretDownFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CaretDownFilled: CaretDownFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CaretDownFilledSvg} />
    ;

CaretDownFilled.displayName = 'CaretDownFilled';

export default FunctionalComponent;