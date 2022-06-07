// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CodeSandboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxOutlined';

export interface CodeSandboxOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CodeSandboxOutlined: CodeSandboxOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CodeSandboxOutlinedSvg} />
    ;

CodeSandboxOutlined.displayName = 'CodeSandboxOutlined';

export default FunctionalComponent;