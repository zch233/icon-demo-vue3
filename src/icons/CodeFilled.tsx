// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CodeFilledSvg from '@ant-design/icons-svg/lib/asn/CodeFilled';

export interface CodeFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CodeFilled: CodeFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CodeFilledSvg} />
    ;

CodeFilled.displayName = 'CodeFilled';

export default FunctionalComponent;