// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CheckSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CheckSquareFilled';

export interface CheckSquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CheckSquareFilled: CheckSquareFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CheckSquareFilledSvg} />
    ;

CheckSquareFilled.displayName = 'CheckSquareFilled';

export default FunctionalComponent;