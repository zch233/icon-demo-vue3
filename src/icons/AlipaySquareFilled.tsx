// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AlipaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/AlipaySquareFilled';

export interface AlipaySquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AlipaySquareFilled: AlipaySquareFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AlipaySquareFilledSvg} />
    ;

AlipaySquareFilled.displayName = 'AlipaySquareFilled';

export default FunctionalComponent;