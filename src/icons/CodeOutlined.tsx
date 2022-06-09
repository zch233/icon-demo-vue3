// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodeOutlined';

export interface CodeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CodeOutlined: CodeOutlinedIconType = (props, context) => <Icon name='CodeOutlined' {...{ ...props, ...context.attrs }} icon={CodeOutlinedSvg} />;

CodeOutlined.displayName = 'CodeOutlined';

export default CodeOutlined;