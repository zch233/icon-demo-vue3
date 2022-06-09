// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CaretRightFilledSvg from '@ant-design/icons-svg/lib/asn/CaretRightFilled';

export interface CaretRightFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CaretRightFilled: CaretRightFilledIconType = (props, context) => <Icon name='CaretRightFilled' {...{ ...props, ...context.attrs }} icon={CaretRightFilledSvg} />;

CaretRightFilled.displayName = 'CaretRightFilled';

export default CaretRightFilled;