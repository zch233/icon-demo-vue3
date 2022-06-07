// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CaretLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretLeftOutlined';

export interface CaretLeftOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CaretLeftOutlined: CaretLeftOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CaretLeftOutlinedSvg} />
    ;

CaretLeftOutlined.displayName = 'CaretLeftOutlined';

export default FunctionalComponent;