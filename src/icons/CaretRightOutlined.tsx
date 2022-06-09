// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CaretRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretRightOutlined';

export interface CaretRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CaretRightOutlined: CaretRightOutlinedIconType = (props, context) => <Icon name='CaretRightOutlined' {...{ ...props, ...context.attrs }} icon={CaretRightOutlinedSvg} />;

CaretRightOutlined.displayName = 'CaretRightOutlined';

export default CaretRightOutlined;