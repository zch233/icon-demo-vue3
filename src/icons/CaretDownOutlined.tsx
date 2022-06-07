// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CaretDownOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretDownOutlined';

export interface CaretDownOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CaretDownOutlined: CaretDownOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CaretDownOutlinedSvg} />
    ;

CaretDownOutlined.displayName = 'CaretDownOutlined';

export default FunctionalComponent;