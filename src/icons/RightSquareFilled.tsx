// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import RightSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RightSquareFilled';

export interface RightSquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RightSquareFilled: RightSquareFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={RightSquareFilledSvg} />
    ;

RightSquareFilled.displayName = 'RightSquareFilled';

export default FunctionalComponent;