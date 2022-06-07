// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CodeSandboxCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxCircleFilled';

export interface CodeSandboxCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CodeSandboxCircleFilled: CodeSandboxCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CodeSandboxCircleFilledSvg} />
    ;

CodeSandboxCircleFilled.displayName = 'CodeSandboxCircleFilled';

export default FunctionalComponent;