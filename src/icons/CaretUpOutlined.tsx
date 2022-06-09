// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CaretUpOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretUpOutlined';

export interface CaretUpOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CaretUpOutlined: CaretUpOutlinedIconType = (props, context) => <Icon name='CaretUpOutlined' {...{ ...props, ...context.attrs }} icon={CaretUpOutlinedSvg} />;

CaretUpOutlined.displayName = 'CaretUpOutlined';

export default CaretUpOutlined;