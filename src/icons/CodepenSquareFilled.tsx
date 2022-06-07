// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CodepenSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CodepenSquareFilled';

export interface CodepenSquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CodepenSquareFilled: CodepenSquareFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CodepenSquareFilledSvg} />
    ;

CodepenSquareFilled.displayName = 'CodepenSquareFilled';

export default FunctionalComponent;