// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import LeftSquareFilledSvg from '@ant-design/icons-svg/lib/asn/LeftSquareFilled';

export interface LeftSquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LeftSquareFilled: LeftSquareFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={LeftSquareFilledSvg} />
    ;

LeftSquareFilled.displayName = 'LeftSquareFilled';

export default FunctionalComponent;