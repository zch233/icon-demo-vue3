// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CloseSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CloseSquareFilled';

export interface CloseSquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CloseSquareFilled: CloseSquareFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CloseSquareFilledSvg} />
    ;

CloseSquareFilled.displayName = 'CloseSquareFilled';

export default FunctionalComponent;