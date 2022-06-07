// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import CarFilledSvg from '@ant-design/icons-svg/lib/asn/CarFilled';

export interface CarFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CarFilled: CarFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={CarFilledSvg} />
    ;

CarFilled.displayName = 'CarFilled';

export default CarFilled;