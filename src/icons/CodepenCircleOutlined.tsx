// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CodepenCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodepenCircleOutlined';

export interface CodepenCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CodepenCircleOutlined: CodepenCircleOutlinedIconType = (props, context) => <Icon name='CodepenCircleOutlined' {...{ ...props, ...context.attrs }} icon={CodepenCircleOutlinedSvg} />;

CodepenCircleOutlined.displayName = 'CodepenCircleOutlined';

export default CodepenCircleOutlined;