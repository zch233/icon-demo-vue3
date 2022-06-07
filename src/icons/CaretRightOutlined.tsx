// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CaretRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretRightOutlined';

export interface CaretRightOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CaretRightOutlined: CaretRightOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CaretRightOutlinedSvg} />
    ;

CaretRightOutlined.displayName = 'CaretRightOutlined';

export default FunctionalComponent;