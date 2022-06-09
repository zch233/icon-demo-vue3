// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import NodeExpandOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeExpandOutlined';

export interface NodeExpandOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const NodeExpandOutlined: NodeExpandOutlinedIconType = (props, context) => <Icon name='NodeExpandOutlined' {...{ ...props, ...context.attrs }} icon={NodeExpandOutlinedSvg} />;

NodeExpandOutlined.displayName = 'NodeExpandOutlined';

export default NodeExpandOutlined;