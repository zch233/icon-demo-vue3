// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import NodeCollapseOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeCollapseOutlined';

export interface NodeCollapseOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const NodeCollapseOutlined: NodeCollapseOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={NodeCollapseOutlinedSvg} />
    ;

NodeCollapseOutlined.displayName = 'NodeCollapseOutlined';

export default FunctionalComponent;