// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import NodeIndexOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeIndexOutlined';

export interface NodeIndexOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const NodeIndexOutlined: NodeIndexOutlinedIconType = (props, context) => <Icon name='NodeIndexOutlined' {...{ ...props, ...context.attrs }} icon={NodeIndexOutlinedSvg} />;

NodeIndexOutlined.displayName = 'NodeIndexOutlined';

export default NodeIndexOutlined;