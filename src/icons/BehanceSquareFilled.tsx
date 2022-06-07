// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BehanceSquareFilledSvg from '@ant-design/icons-svg/lib/asn/BehanceSquareFilled';

export interface BehanceSquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BehanceSquareFilled: BehanceSquareFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BehanceSquareFilledSvg} />
    ;

BehanceSquareFilled.displayName = 'BehanceSquareFilled';

export default FunctionalComponent;