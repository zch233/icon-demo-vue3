// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CaretLeftFilledSvg from '@ant-design/icons-svg/lib/asn/CaretLeftFilled';

export interface CaretLeftFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CaretLeftFilled: CaretLeftFilledIconType = (props, context) => <Icon name='CaretLeftFilled' {...{ ...props, ...context.attrs }} icon={CaretLeftFilledSvg} />;

CaretLeftFilled.displayName = 'CaretLeftFilled';

export default CaretLeftFilled;