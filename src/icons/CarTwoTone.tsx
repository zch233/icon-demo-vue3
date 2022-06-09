// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CarTwoTone';

export interface CarTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CarTwoTone: CarTwoToneIconType = (props, context) => <Icon name='CarTwoTone' {...{ ...props, ...context.attrs }} icon={CarTwoToneSvg} />;

CarTwoTone.displayName = 'CarTwoTone';

export default CarTwoTone;