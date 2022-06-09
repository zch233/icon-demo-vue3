// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CodeSandboxSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxSquareFilled';

export interface CodeSandboxSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CodeSandboxSquareFilled: CodeSandboxSquareFilledIconType = (props, context) => <Icon name='CodeSandboxSquareFilled' {...{ ...props, ...context.attrs }} icon={CodeSandboxSquareFilledSvg} />;

CodeSandboxSquareFilled.displayName = 'CodeSandboxSquareFilled';

export default CodeSandboxSquareFilled;